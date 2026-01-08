import astroIcon from '../assets/icons/astro.svg';
import angularIcon from '../assets/icons/angular.svg';

export interface Skill {
    name: string;
    icon?: string; // Material Symbol name
    imageSrc?: string; // Percorso dell'immagine personalizzata
    type: string;
    description: {
        en: string;
        it: string;
    };
    // Classi Tailwind per i colori
    iconColor: string;
    iconBg: string;
    neon?: string; // Colore neon opzionale per l'effetto glow
}

export const skills: Skill[] = [
    {
        name: "Astro",
        imageSrc: astroIcon.src,
        type: "Frontend",
        description: {
            en: "Modern static site generator for fast, optimized websites.",
            it: "Miglior framework per creare siti web veloci e ottimizzati."
        },
        iconColor: "text-orange-500",
        iconBg: "bg-orange-500/10",
        neon: "to-orange-500"
    },
    {
        name: "Angular",
        imageSrc: angularIcon.src,
        type: "Frontend",
        description: {
            en: "Dynamic framework for complex web applications.",
            it: "Framework dinamico per applicazioni web complesse."
        },
        iconColor: "text-red-500",
        iconBg: "bg-red-500/10",
        neon: "to-red-500"
    },
    {
        name: "Express.js",
        icon: "dns",
        type: "Backend",
        description: {
            en: "Scalable server-side applications and RESTful APIs.",
            it: "Applicazioni server-side scalabili e API RESTful."
        },
        iconColor: "text-green-500",
        iconBg: "bg-green-500/10",
        neon: "to-green-500"
    },
    {
        name: "TypeScript",
        icon: "integration_instructions",
        type: "Language",
        description: {
            en: "Type-safe code for better maintainability and fewer bugs.",
            it: "Codice type-safe per migliore manutenibilità e meno bug."
        },
        iconColor: "text-blue-600",
        iconBg: "bg-blue-600/10",
        neon: "to-blue-600"
    },
    {
        name: "Tailwind CSS",
        icon: "style",
        type: "Styling",
        description: {
            en: "Rapid UI development with utility-first classes.",
            it: "Sviluppo UI rapido con classi utility-first."
        },
        iconColor: "text-cyan-500",
        iconBg: "bg-cyan-500/10",
        neon: "to-cyan-500"
    },
    {
        name: "MySQL",
        icon: "database",
        type: "Database",
        description: {
            en: "Relational database management system.",
            it: "Gestione di database relazionali."
        },
        iconColor: "text-blue-400",
        iconBg: "bg-blue-400/10",
        neon: "to-blue-400"
    },
    {
        name: "Unix Based OS",
        icon: "terminal",
        type: "DevOps",
        description: {
            en: "Server and IT infrastructure management.",
            it: "Gestione di server e infrastrutture IT."
        },
        iconColor: "text-orange-500",
        iconBg: "bg-orange-500/10",
        neon: "to-orange-500"
    },
    {
        name: "Git",
        icon: "commit",
        type: "Version Control",
        description: {
            en: "Source code management and collaborative workflows.",
            it: "Gestione del codice sorgente e workflow collaborativi."
        },
        iconColor: "text-red-500",
        iconBg: "bg-red-500/10",
        neon: "to-red-500"
    }
];