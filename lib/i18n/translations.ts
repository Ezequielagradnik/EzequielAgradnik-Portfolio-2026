export type Locale = "en" | "es" | "he"

export const locales: Locale[] = ["en", "es", "he"]

// Paragraph strings may wrap phrases in **double asterisks**; <RichText> renders them bold.
const en = {
    nav: {
      about: "About",
      experience: "Experience",
      services: "Services",
      contact: "Contact",
      menu: "Menu",
      close: "Close",
    },
    places: {
      ba: { city: "Buenos Aires", full: "Buenos Aires, Argentina" },
      tlv: { city: "Tel Aviv", full: "Tel Aviv, Israel" },
    },
    hero: {
      status: "Available for projects",
      name: "Ezequiel Agradnik",
      role: "Full-stack & automation developer",
      stats: [
        { value: 19, prefix: "", unit: "years old", caption: "Freelancing since sixteen" },
        { value: 3, prefix: "", unit: "languages", caption: "Spanish, English and Hebrew" },
        { value: 10, prefix: "+", unit: "projects", caption: "Shipped for clients in four countries" },
      ],
      scroll: "Scroll",
    },
    about: {
      label: "About",
      heading: "Building products since sixteen.",
      p1: "Right now I'm an **Automation Developer at Satellites on Fire**, building the internal automations that keep the team moving.",
      p2: "I'm also the **CTO of Brandon Network**, where we're building an AI for the 200 lawyers in Brandon Brokerage's portfolio, and I co-founded **PADI**, a tutoring marketplace with 2,500+ students.",
      now: "Now",
      active: "Active",
      study: "Education",
      degree: "IT Baccalaureate",
      degreeFrom: "Graduated from ORT Argentina",
      honors: "Graduated with honors",
      gpa: "8.7",
      gpaLabel: "average",
      certs: "+5",
      certsLabel: "certificates",
      certsCaption: "Cybersecurity and programming",
      base: "Based in",
      localTime: "Local time",
      offline: "Off the keyboard",
      offlineItems: ["Gym", "Side projects", "Golf"],
    },
    timeline: {
      label: "Experience",
      heading: "The road so far",
      present: "Present",
      active: "Active",
      types: {
        "Part-time": "Part-time",
        Freelance: "Freelance",
        "Co-founder": "Co-founder",
      },
      roles: {
        "Automation Developer": "Automation Developer",
        "Full Stack & AI Developer": "Full Stack & AI Developer",
        "Web Developer & Process Automation": "Web Developer & Process Automation",
        "Process Automation": "Process Automation",
        "Co-founder & CTO": "Co-founder & CTO",
        CTO: "CTO",
        "Full Stack Developer": "Full Stack Developer",
        "Web Developer": "Web Developer",
      },
    },
    skills: {
      label: "Stack",
      heading: "What I work with",
      hint: "Scroll",
      categories: {
        Languages: "Languages",
        Frontend: "Frontend",
        "Backend & Databases": "Backend & databases",
        "Automation & AI": "Automation & AI",
        "DevOps & Cloud": "DevOps & cloud",
        Cybersecurity: "Cybersecurity",
        CMS: "CMS",
      },
    },
    services: {
      label: "Services",
      heading: "What I do",
      items: {
        fullStack: {
          title: "Full-stack development",
          description:
            "Web applications end to end with React, Next.js and Node.js: responsive interfaces, REST APIs, database design and the server architecture underneath.",
        },
        api: {
          title: "API design & integration",
          description:
            "REST and GraphQL APIs built for scale and security, plus integrations that get third-party services talking to each other reliably.",
        },
        devops: {
          title: "DevOps & deployment",
          description:
            "CI/CD pipelines with Docker, GitHub Actions and Vercel. Zero-downtime deploys to AWS, GCP or DigitalOcean.",
        },
        automation: {
          title: "AI & process automation",
          description:
            "End-to-end automations with n8n, ManyChat and the Claude and OpenAI APIs: chatbot flows, lead capture, and internal workflows that remove repetitive work.",
        },
        database: {
          title: "Database architecture",
          description:
            "Relational and document databases (PostgreSQL, MongoDB) with data models designed for integrity and performance under real traffic.",
        },
        testing: {
          title: "Testing & code quality",
          description:
            "Unit, integration and end-to-end tests with Jest and Cypress, so regressions get caught before users do.",
        },
      },
    },
    contact: {
      label: "Contact",
      heading: "Let's talk.",
      copy: "Got a project, an idea, or a process that should run itself? Write me. I usually reply within a day.",
      copyEmail: "Click to copy",
      copied: "Copied",
      localTime: "Local time",
      links: {
        call: "Book a call",
        whatsapp: "WhatsApp",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
    },
    footer: {
      made: "Made in {city}",
      updated: "Last updated",
    },
}

export type Translation = typeof en

const es: Translation = {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      services: "Servicios",
      contact: "Contacto",
      menu: "Menú",
      close: "Cerrar",
    },
    places: {
      ba: { city: "Buenos Aires", full: "Buenos Aires, Argentina" },
      tlv: { city: "Tel Aviv", full: "Tel Aviv, Israel" },
    },
    hero: {
      status: "Disponible para proyectos",
      name: "Ezequiel Agradnik",
      role: "Desarrollador full-stack y de automatizaciones",
      stats: [
        { value: 19, prefix: "", unit: "años", caption: "Freelance desde los dieciséis" },
        { value: 3, prefix: "", unit: "idiomas", caption: "Español, inglés y hebreo" },
        { value: 10, prefix: "+", unit: "proyectos", caption: "Terminados para clientes en cuatro países" },
      ],
      scroll: "Scroll",
    },
    about: {
      label: "Sobre mí",
      heading: "Construyo productos desde los dieciséis.",
      p1: "Hoy soy **Automation Developer en Satellites on Fire**, donde construyo las automatizaciones internas que mantienen al equipo en movimiento.",
      p2: "Además soy **CTO de Brandon Network**, donde estamos desarrollando una IA para los 200 abogados de la cartera de Brandon Brokerage, y cofundé **PADI**, un marketplace de tutorías con más de 2.500 estudiantes.",
      now: "Ahora",
      active: "Activo",
      study: "Estudios",
      degree: "Bachiller en Informática",
      degreeFrom: "Recibido en ORT Argentina",
      honors: "Recibido con honores",
      gpa: "8.7",
      gpaLabel: "promedio",
      certs: "+5",
      certsLabel: "certificados",
      certsCaption: "Ciberseguridad y programación",
      base: "Base",
      localTime: "Hora local",
      offline: "Fuera del teclado",
      offlineItems: ["Gimnasio", "Proyectos propios", "Golf"],
    },
    timeline: {
      label: "Experiencia",
      heading: "El camino hasta acá",
      present: "Actualidad",
      active: "Activo",
      types: {
        "Part-time": "Part-time",
        Freelance: "Freelance",
        "Co-founder": "Cofundador",
      },
      roles: {
        "Automation Developer": "Desarrollador de Automatizaciones",
        "Full Stack & AI Developer": "Desarrollador Full Stack e IA",
        "Web Developer & Process Automation": "Desarrollador Web y Automatización de Procesos",
        "Process Automation": "Automatización de Procesos",
        "Co-founder & CTO": "Cofundador y CTO",
        CTO: "CTO",
        "Full Stack Developer": "Desarrollador Full Stack",
        "Web Developer": "Desarrollador Web",
      },
    },
    skills: {
      label: "Stack",
      heading: "Con qué trabajo",
      hint: "Scrolleá",
      categories: {
        Languages: "Lenguajes",
        Frontend: "Frontend",
        "Backend & Databases": "Backend y bases de datos",
        "Automation & AI": "Automatización e IA",
        "DevOps & Cloud": "DevOps y cloud",
        Cybersecurity: "Ciberseguridad",
        CMS: "CMS",
      },
    },
    services: {
      label: "Servicios",
      heading: "Qué hago",
      items: {
        fullStack: {
          title: "Desarrollo full-stack",
          description:
            "Aplicaciones web de punta a punta con React, Next.js y Node.js: interfaces responsive, APIs REST, diseño de bases de datos y la arquitectura de servidor que hay debajo.",
        },
        api: {
          title: "Diseño e integración de APIs",
          description:
            "APIs REST y GraphQL pensadas para escalar con seguridad, más integraciones que hacen que servicios de terceros se hablen entre sí de forma confiable.",
        },
        devops: {
          title: "DevOps y deployment",
          description:
            "Pipelines de CI/CD con Docker, GitHub Actions y Vercel. Deploys sin downtime a AWS, GCP o DigitalOcean.",
        },
        automation: {
          title: "IA y automatización de procesos",
          description:
            "Automatizaciones de punta a punta con n8n, ManyChat y las APIs de Claude y OpenAI: flujos de chatbot, captación de leads y workflows internos que eliminan el trabajo repetitivo.",
        },
        database: {
          title: "Arquitectura de bases de datos",
          description:
            "Bases relacionales y de documentos (PostgreSQL, MongoDB) con modelos de datos diseñados para integridad y performance con tráfico real.",
        },
        testing: {
          title: "Testing y calidad de código",
          description:
            "Tests unitarios, de integración y end-to-end con Jest y Cypress, para que las regresiones se detecten antes de que las vea un usuario.",
        },
      },
    },
    contact: {
      label: "Contacto",
      heading: "Hablemos.",
      copy: "¿Tenés un proyecto, una idea o un proceso que debería funcionar solo? Escribime. Suelo responder en menos de un día.",
      copyEmail: "Click para copiar",
      copied: "Copiado",
      localTime: "Hora local",
      links: {
        call: "Agendar una llamada",
        whatsapp: "WhatsApp",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
    },
    footer: {
      made: "Hecho en {city}",
      updated: "Última actualización",
    },
}

const he: Translation = {
    nav: {
      about: "אודות",
      experience: "ניסיון",
      services: "שירותים",
      contact: "צור קשר",
      menu: "תפריט",
      close: "סגור",
    },
    places: {
      ba: { city: "בואנוס איירס", full: "בואנוס איירס, ארגנטינה" },
      tlv: { city: "תל אביב", full: "תל אביב, ישראל" },
    },
    hero: {
      status: "פנוי לפרויקטים",
      name: "אזקיאל אגרדניק",
      role: "מפתח Full-stack ואוטומציות",
      stats: [
        { value: 19, prefix: "בן ", unit: "", caption: "פרילנסר מאז גיל שש-עשרה" },
        { value: 3, prefix: "", unit: "שפות", caption: "ספרדית, אנגלית ועברית" },
        { value: 10, prefix: "+", unit: "פרויקטים", caption: "שהושלמו ללקוחות בארבע מדינות" },
      ],
      scroll: "גלילה",
    },
    about: {
      label: "אודות",
      heading: "בונה מוצרים מגיל שש-עשרה.",
      p1: "כרגע אני **Automation Developer ב-Satellites on Fire**, בונה את האוטומציות הפנימיות שמניעות את הצוות.",
      p2: "בנוסף אני **ה-CTO של Brandon Network**, שם אנחנו מפתחים AI עבור 200 עורכי הדין בתיק הלקוחות של Brandon Brokerage, וייסדתי במשותף את **PADI**, מרקטפלייס שיעורים פרטיים עם יותר מ-2,500 תלמידים.",
      now: "עכשיו",
      active: "פעיל",
      study: "לימודים",
      degree: "בגרות במגמת מחשבים",
      degreeFrom: "בוגר ORT ארגנטינה",
      honors: "בוגר בהצטיינות",
      gpa: "8.7",
      gpaLabel: "ממוצע",
      certs: "+5",
      certsLabel: "תעודות",
      certsCaption: "סייבר ותכנות",
      base: "בסיס",
      localTime: "שעה מקומית",
      offline: "מחוץ למקלדת",
      offlineItems: ["חדר כושר", "פרויקטים אישיים", "גולף"],
    },
    timeline: {
      label: "ניסיון",
      heading: "הדרך עד עכשיו",
      present: "היום",
      active: "פעיל",
      types: {
        "Part-time": "משרה חלקית",
        Freelance: "פרילנס",
        "Co-founder": "מייסד שותף",
      },
      roles: {
        "Automation Developer": "מפתח אוטומציות",
        "Full Stack & AI Developer": "מפתח Full Stack ו-AI",
        "Web Developer & Process Automation": "מפתח אתרים ואוטומציות תהליכים",
        "Process Automation": "אוטומציית תהליכים",
        "Co-founder & CTO": "מייסד שותף ו-CTO",
        CTO: "CTO",
        "Full Stack Developer": "מפתח Full Stack",
        "Web Developer": "מפתח אתרים",
      },
    },
    skills: {
      label: "Stack",
      heading: "עם מה אני עובד",
      hint: "גללו",
      categories: {
        Languages: "שפות",
        Frontend: "Frontend",
        "Backend & Databases": "Backend ובסיסי נתונים",
        "Automation & AI": "אוטומציה ו-AI",
        "DevOps & Cloud": "DevOps וענן",
        Cybersecurity: "סייבר",
        CMS: "CMS",
      },
    },
    services: {
      label: "שירותים",
      heading: "מה אני עושה",
      items: {
        fullStack: {
          title: "פיתוח Full-stack",
          description:
            "אפליקציות ווב מקצה לקצה עם React, Next.js ו-Node.js: ממשקים רספונסיביים, APIs מסוג REST, עיצוב בסיסי נתונים וארכיטקטורת השרת שמתחת.",
        },
        api: {
          title: "עיצוב ושילוב APIs",
          description:
            "APIs מסוג REST ו-GraphQL שנבנו לסקייל ולאבטחה, ואינטגרציות שגורמות לשירותי צד שלישי לדבר זה עם זה באופן אמין.",
        },
        devops: {
          title: "DevOps ופריסה",
          description:
            "פייפליינים של CI/CD עם Docker, GitHub Actions ו-Vercel. פריסות ללא השבתה ל-AWS, GCP או DigitalOcean.",
        },
        automation: {
          title: "AI ואוטומציית תהליכים",
          description:
            "אוטומציות מקצה לקצה עם n8n, ManyChat וה-APIs של Claude ו-OpenAI: זרימות צ׳אטבוט, לכידת לידים ותהליכי עבודה פנימיים שמבטלים עבודה חוזרת.",
        },
        database: {
          title: "ארכיטקטורת בסיסי נתונים",
          description:
            "בסיסי נתונים רלציוניים ומסמכיים (PostgreSQL, MongoDB) עם מודלי נתונים שתוכננו לשלמות ולביצועים תחת עומס אמיתי.",
        },
        testing: {
          title: "בדיקות ואיכות קוד",
          description:
            "בדיקות יחידה, אינטגרציה ו-end-to-end עם Jest ו-Cypress, כדי שרגרסיות ייתפסו לפני שהמשתמשים יתפסו אותן.",
        },
      },
    },
    contact: {
      label: "צור קשר",
      heading: "בואו נדבר.",
      copy: "יש לכם פרויקט, רעיון, או תהליך שאמור לרוץ לבד? כתבו לי. בדרך כלל אני עונה תוך יום.",
      copyEmail: "לחצו להעתקה",
      copied: "הועתק",
      localTime: "שעה מקומית",
      links: {
        call: "לקבוע שיחה",
        whatsapp: "WhatsApp",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
    },
    footer: {
      made: "נעשה ב{city}",
      updated: "עודכן לאחרונה",
    },
}

export const translations: Record<Locale, Translation> = { en, es, he }
