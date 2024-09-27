export interface Project {
    number: number;
    title: string;
    description: string;
    technologies: string[];  // SVG-URLs oder Namen der Technologien
    github: string;
    livetest: string;
    img: string;  // Bild-URL oder Pfad
  }