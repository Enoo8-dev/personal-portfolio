export const personalInfo = {
    // Dati personali
    firstName: "Federico",
    lastName: "Benini",
    
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // Dati lavorativi
    role: "Full Stack Developer",
    location: "Ferrara, Italy",
    timezone: "Europe/Rome",
    email: "me@beninifederico.it",

    // Assets e File
    avatar: "/images/avatar.jpg",
    vCardLink: "/federico-benini.vcf",
    domain: "beninifederico.it",
    
    // Social
    social: {
        linkedin: "https://www.linkedin.com/in/federico-benini0810/",
        github: "https://github.com/Enoo8-dev",
    }
};