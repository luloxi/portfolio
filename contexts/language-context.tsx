"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Header
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    // Hero Section
    "hero.badge": "Web3 Developer & Blockchain Engineer",
    "hero.title": "Building the Decentralized Future",
    "hero.subtitle":
      "Blockchain developer specializing in smart contracts, DApps, and Web3 infrastructure. Turning innovative ideas into decentralized reality.",
    "hero.viewProjects": "View Projects",
    "hero.contactMe": "Contact Me",

    // Projects Section
    "projects.title": "Featured Projects",
    "projects.subtitle": "Decentralized applications and blockchain solutions",
    "projects.viewProject": "View Project",
    "projects.viewGithub": "View GitHub",
    "projects.sami.description":
      "Group chatroom game where players can bet crypto on who's the impostor AI in the chat.",
    "projects.punksociety.description": "Social network where posts are NFTs and likes send USDC to the post author.",
    "projects.tap.description":
      "Web2 platform to connect gamers and streamers with content creators and people in their field.",
    "projects.buidlguidl.description": "Several prototypes to show Scaffold-ETH 2 usage for creating dApps.",

    // Skills Section
    "skills.title": "Skills & Technologies",
    "skills.subtitle": "My technical expertise in the blockchain ecosystem",
    "skills.smartContracts.title": "Smart Contracts",
    "skills.smartContracts.description": "Developing secure and efficient smart contracts",
    "skills.frontend.title": "Frontend & DApps",
    "skills.frontend.description": "Building intuitive decentralized applications",
    "skills.blockchain.title": "Blockchain Protocols",
    "skills.blockchain.description": "Working with various blockchain networks",

    // About Section
    "about.badge": "About Me",
    "about.title": "Blockchain Engineer & Web3 Enthusiast",
    "about.paragraph1":
      "I'm a passionate blockchain developer with 2+ years of experience building decentralized applications and smart contracts. My journey in Web3 began in 2022, and I've been at the growing in this technological niche ever since.",
    "about.paragraph2":
      "I specialize in creating secure, efficient, and user-friendly blockchain solutions. My goal is to contribute to the growth of the decentralized ecosystem and help bridge the gap between traditional systems and Web3, and make it fun in the process!",
    "about.seeResume": "See Resume",

    // Contact Section
    "contact.title": "Contact Me",
    "contact.email.title": "Email Me",
    "contact.email.description": "For project inquiries and collaborations",
    "contact.fiverr.title": "Hire Me on Fiverr",
    "contact.fiverr.description": "For freelance projects and quick tasks",
    "contact.fiverr.link": "View Fiverr Profile",

    // Footer
    "footer.rights": "All rights reserved.",
  },
  es: {
    // Header
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",

    // Hero Section
    "hero.badge": "Desarrollador Web3 e Ingeniero Blockchain",
    "hero.title": "Construyendo el Futuro Descentralizado",
    "hero.subtitle":
      "Desarrollador blockchain especializado en contratos inteligentes, DApps e infraestructura Web3. Convirtiendo ideas innovadoras en realidad descentralizada.",
    "hero.viewProjects": "Ver Proyectos",
    "hero.contactMe": "Contáctame",

    // Projects Section
    "projects.title": "Proyectos Destacados",
    "projects.subtitle": "Aplicaciones descentralizadas y soluciones blockchain",
    "projects.viewProject": "Ver Proyecto",
    "projects.viewGithub": "Ver GitHub",
    "projects.sami.description":
      "Juego de chat grupal donde los jugadores pueden apostar crypto sobre quién es la IA impostora en el chat.",
    "projects.punksociety.description":
      "Red social donde las publicaciones son NFTs y los likes envían USDC al autor de la publicación.",
    "projects.tap.description":
      "Plataforma Web2 para conectar gamers y streamers con creadores de contenido y personas en su campo.",
    "projects.buidlguidl.description": "Varios prototipos para mostrar el uso de Scaffold-ETH 2 para crear dApps.",

    // Skills Section
    "skills.title": "Habilidades y Tecnologías",
    "skills.subtitle": "Mi experiencia técnica en el ecosistema blockchain",
    "skills.smartContracts.title": "Contratos Inteligentes",
    "skills.smartContracts.description": "Desarrollo de contratos inteligentes seguros y eficientes",
    "skills.frontend.title": "Frontend y DApps",
    "skills.frontend.description": "Construyendo aplicaciones descentralizadas intuitivas",
    "skills.blockchain.title": "Protocolos Blockchain",
    "skills.blockchain.description": "Trabajando con varias redes blockchain",

    // About Section
    "about.badge": "Acerca de Mí",
    "about.title": "Ingeniero Blockchain y Entusiasta Web3",
    "about.paragraph1":
      "Soy un desarrollador blockchain apasionado con más de 2 años de experiencia construyendo aplicaciones descentralizadas y contratos inteligentes. Mi viaje en Web3 comenzó en 2022, y he estado creciendo en este nicho tecnológico desde entonces.",
    "about.paragraph2":
      "Me especializo en crear soluciones blockchain seguras, eficientes y fáciles de usar. Mi objetivo es contribuir al crecimiento del ecosistema descentralizado y ayudar a cerrar la brecha entre los sistemas tradicionales y Web3, ¡y hacerlo divertido en el proceso!",
    "about.seeResume": "Ver Currículum",

    // Contact Section
    "contact.title": "Contáctame",
    "contact.email.title": "Envíame un Email",
    "contact.email.description": "Para consultas de proyectos y colaboraciones",
    "contact.fiverr.title": "Contrátame en Fiverr",
    "contact.fiverr.description": "Para proyectos freelance y tareas rápidas",
    "contact.fiverr.link": "Ver Perfil de Fiverr",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
