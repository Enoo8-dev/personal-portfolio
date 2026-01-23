const WP_API_URL = 'http://localhost:10004/wp-json/wp/v2';

export interface Project {
  slug: string;
  data: {
    title: string;
    description: string;
    pubDate: Date;
    tags: string[];
    link: string; // Live link
    repo: string; // GitHub link
    image: string; // URL immagine
    lang: 'en' | 'it'; // Lingua del progetto
    featured: boolean; // Progetto in evidenza
  };
}

export async function getWPProjects(): Promise<Project[]> {
  // Aggiungiamo '_embed' per ricevere anche i dettagli di Immagini e Tag in una sola chiamata
  const res = await fetch(`${WP_API_URL}/projects?_embed`);
  
  if (!res.ok) {
    console.error("Errore chiamando WordPress:", res.statusText);
    return [];
  }

  const data = await res.json();

  return data.map((post: any) => {
    // 1. Recuperiamo l'immagine (se esiste, altrimenti stringa vuota)
    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
    const imageUrl = featuredMedia?.source_url || '/images/placeholder-card-projects.jpg';

    // 2. Recuperiamo i tag (se esistono)
    const tags = post._embedded?.['wp:term']?.[0]?.map((term: any) => term.name) || [];

    return {
      slug: post.slug,
      data: {
        title: post.title.rendered,
        // Usiamo l'excerpt (riassunto) e puliamo i tag <p> che WP aggiunge
        description: post.excerpt.rendered.replace(/<[^>]+>/g, ''), 
        pubDate: new Date(post.date),
        tags: tags,
        // I tuoi campi ACF
        link: post.acf?.link || '',
        repo: post.acf?.repo || '',
        image: imageUrl,
        lang: post.acf?.lang || 'en', // Default to 'en' if not set
        featured: post.acf?.featured || false,
      }
    };
  });
}