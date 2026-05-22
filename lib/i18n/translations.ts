export type Locale = "en" | "es" | "he"

export const locales: Locale[] = ["en", "es", "he"]

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      work: "Work",
      contact: "Contact",
    },
    hero: {
      greeting: "Hey! It's Ezequiel Agradnik",
      subtitle: "🚀 Full-Stack Developer | Automation Developer",
      viewPortfolio: "View Portfolio",
      contactMe: "Contact Me",
      scroll: "Scroll",
    },
    about: {
      title: "Code & Me",
      mobileDescription:
        "18-year-old developer working part-time as an Automation Developer at Satellites on Fire, studying Cybersecurity at Universidad de Palermo, and freelancing for clients across Dubai, Israel, and Argentina.",
      greeting: "Hey, I'm Ezequiel Agradnik!",
      paragraph1Intro: "I'm an 18-year-old developer based in Argentina, currently working part-time as an",
      paragraph1Role: "Automation Developer at Satellites on Fire",
      paragraph1End: ", where I build automations that streamline the team's internal processes.",
      paragraph2Intro: "In parallel, I'm studying",
      paragraph2University: "Cybersecurity at Universidad de Palermo",
      paragraph2Middle: "and working toward the",
      paragraph2Cert: "Cisco Junior Cybersecurity Analyst",
      paragraph2End: "certification — combining hands-on development with a strong security foundation.",
      paragraph3Intro: "I've been building websites and automations as a",
      paragraph3Freelance: "freelancer since I was 16",
      paragraph3Middle: ", shipping projects like",
      paragraph3Projects: "PADI",
      paragraph3And: "and",
      paragraph3Linkup: "Linkup",
      paragraph3For: "for clients across",
      paragraph3Countries: "Dubai, Israel, and Argentina",
      paragraph3End: ".",
      paragraph4Intro: "I'm passionate about building",
      paragraph4Solutions: "innovative digital solutions",
      paragraph4Middle: "and I'm always looking for new challenges that push me to grow. Outside of work, I enjoy",
      paragraph4Hobbies: "going to the gym, programming in my free time, and playing golf",
      paragraph4End: ".",
      stats: {
        yearsOld: "Years Old",
        yrsFreelancing: "Yrs Freelancing",
        countries: "Countries",
        clients: "Clients",
      },
      currently: "Currently",
    },
    timeline: {
      title: "The Road So Far",
      active: "Active",
      types: {
        "Part-time": "Part-time",
        Freelance: "Freelance",
        "Co-founder": "Co-founder",
      },
      roles: {
        "Automation Developer": "Automation Developer",
        "Web Developer & Process Automation": "Web Developer & Process Automation",
        "Process Automation": "Process Automation",
        "Co-founder & CTO": "Co-founder & CTO",
        "Full Stack Developer": "Full Stack Developer",
      },
    },
    skills: {
      title: "Code Arsenal",
      categories: {
        Languages: "Languages",
        Frontend: "Frontend",
        "Backend & Databases": "Backend & Databases",
        Automation: "Automation",
        Cybersecurity: "Cybersecurity",
        Tools: "Tools",
      },
    },
    services: {
      title: "My Expertise",
      cards: {
        fullStack: {
          title: "🧑‍💻 Full Stack Development",
          description:
            "End-to-end web application development with modern frameworks like React, Next.js, and Node.js. Experienced in building responsive UIs, RESTful APIs, database design, and server-side architecture. Specialized in creating seamless user experiences with optimized performance and scalability.",
        },
        api: {
          title: "🗃️ API Design & Integration",
          description:
            "Robust design and integration of RESTful and GraphQL APIs. Focused on scalability, security, and performance, enabling seamless data exchange between front-end and back-end systems.",
        },
        devops: {
          title: "🛠️ DevOps & Deployment",
          description:
            "Setup and automation of CI/CD pipelines using tools like Docker, GitHub Actions, and Vercel. Skilled in deploying scalable apps to cloud platforms like AWS, GCP, and DigitalOcean with zero-downtime strategies.",
        },
        automation: {
          title: "🤖 AI & Process Automation",
          description:
            "Building end-to-end automations with n8n, ManyChat, and AI APIs like Claude and OpenAI. From chatbot flows and lead capture to internal workflows that connect tools and eliminate repetitive work.",
        },
        database: {
          title: "🧾 Database Architecture",
          description:
            "Design and management of relational and non-relational databases (PostgreSQL, MongoDB, etc.). Optimized data models for performance, integrity, and scalability in high-traffic applications.",
        },
        testing: {
          title: "🧪 Testing & Code Quality",
          description:
            "Implementation of automated testing (unit, integration, e2e) using Jest, Cypress, and other tools. Committed to maintaining high code quality and preventing regressions through best practices.",
        },
      },
    },
    portfolio: {
      title: "Featured Projects",
      tagline:
        "A showcase of websites and applications I've built for clients around the world, from Dubai to Argentina.",
      projectCounter: "Project {current} of {total}",
      items: {
        kurtisConner: "Personal website for comedian and content creator",
        energyHumanities: "Academic platform for energy and culture research",
        olbMotors: "Luxury automotive dealership in Dubai",
        linkup: "Co-pilot platform for early-stage startups",
        tarjetaControl: "Card payment control service platform",
        padiClases:
          "Tutoring marketplace with over 2,500 students where Argentine university students learn from top-scoring peers via live classes, co-studying groups, and AI tutors trained per subject. Used by students from Di Tella, UDESA and more.",
      },
    },
    contact: {
      title: "Ping Me",
      subtitle: "Always open to new projects, creative ideas, and good conversations.",
      heading: "Let's build something together.",
      copy: "Got an idea, a project, or just want to say hi? Drop me a line — I usually reply within a day.",
      emailLabel: "Email me directly",
      phone: {
        contactHub: "Contact Hub",
        reach: "Reach Ezequiel",
        tap: "Tap to connect",
        schedule: "Schedule",
        whatsapp: "WhatsApp",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
    },
    footer: {
      builtWith: "Built with",
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      services: "Servicios",
      work: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "¡Hola! Soy Ezequiel Agradnik",
      subtitle: "🚀 Desarrollador Full-Stack | Desarrollador de Automatizaciones",
      viewPortfolio: "Ver Portfolio",
      contactMe: "Contactame",
      scroll: "Scroll",
    },
    about: {
      title: "Código y Yo",
      mobileDescription:
        "Desarrollador de 18 años trabajando part-time como Automation Developer en Satellites on Fire, estudiando Ciberseguridad en la Universidad de Palermo y haciendo freelance para clientes de Dubai, Israel y Argentina.",
      greeting: "¡Hola! Soy Ezequiel Agradnik",
      paragraph1Intro: "Soy un desarrollador de 18 años basado en Argentina, actualmente trabajando part-time como",
      paragraph1Role: "Automation Developer en Satellites on Fire",
      paragraph1End: ", donde construyo automatizaciones que optimizan los procesos internos del equipo.",
      paragraph2Intro: "En paralelo, estudio",
      paragraph2University: "Ciberseguridad en la Universidad de Palermo",
      paragraph2Middle: "y estoy preparándome para la certificación de",
      paragraph2Cert: "Cisco Junior Cybersecurity Analyst",
      paragraph2End: " — combinando desarrollo hands-on con una base sólida de seguridad.",
      paragraph3Intro: "Vengo construyendo sitios web y automatizaciones como",
      paragraph3Freelance: "freelancer desde los 16",
      paragraph3Middle: ", entregando proyectos como",
      paragraph3Projects: "PADI",
      paragraph3And: "y",
      paragraph3Linkup: "Linkup",
      paragraph3For: "para clientes de",
      paragraph3Countries: "Dubai, Israel y Argentina",
      paragraph3End: ".",
      paragraph4Intro: "Me apasiona construir",
      paragraph4Solutions: "soluciones digitales innovadoras",
      paragraph4Middle: "y siempre estoy buscando nuevos desafíos que me empujen a crecer. Fuera del trabajo disfruto",
      paragraph4Hobbies: "ir al gimnasio, programar en mi tiempo libre y jugar al golf",
      paragraph4End: ".",
      stats: {
        yearsOld: "Años",
        yrsFreelancing: "Años Freelance",
        countries: "Países",
        clients: "Clientes",
      },
      currently: "Actualmente",
    },
    timeline: {
      title: "El Camino Hasta Acá",
      active: "Activo",
      types: {
        "Part-time": "Part-time",
        Freelance: "Freelance",
        "Co-founder": "Co-fundador",
      },
      roles: {
        "Automation Developer": "Desarrollador de Automatizaciones",
        "Web Developer & Process Automation": "Desarrollador Web y Automatización de Procesos",
        "Process Automation": "Automatización de Procesos",
        "Co-founder & CTO": "Co-fundador y CTO",
        "Full Stack Developer": "Desarrollador Full Stack",
      },
    },
    skills: {
      title: "Arsenal de Código",
      categories: {
        Languages: "Lenguajes",
        Frontend: "Frontend",
        "Backend & Databases": "Backend y Bases de Datos",
        Automation: "Automatización",
        Cybersecurity: "Ciberseguridad",
        Tools: "Herramientas",
      },
    },
    services: {
      title: "Mi Expertise",
      cards: {
        fullStack: {
          title: "🧑‍💻 Desarrollo Full Stack",
          description:
            "Desarrollo de aplicaciones web end-to-end con frameworks modernos como React, Next.js y Node.js. Experiencia construyendo UIs responsive, APIs RESTful, diseño de bases de datos y arquitectura server-side. Especializado en crear experiencias de usuario fluidas con performance y escalabilidad optimizadas.",
        },
        api: {
          title: "🗃️ Diseño e Integración de APIs",
          description:
            "Diseño robusto e integración de APIs RESTful y GraphQL. Enfocado en escalabilidad, seguridad y performance, permitiendo intercambio de datos fluido entre sistemas front-end y back-end.",
        },
        devops: {
          title: "🛠️ DevOps y Deployment",
          description:
            "Setup y automatización de pipelines CI/CD usando herramientas como Docker, GitHub Actions y Vercel. Hábil en desplegar aplicaciones escalables a plataformas cloud como AWS, GCP y DigitalOcean con estrategias de zero-downtime.",
        },
        automation: {
          title: "🤖 IA y Automatización de Procesos",
          description:
            "Construcción de automatizaciones end-to-end con n8n, ManyChat y APIs de IA como Claude y OpenAI. Desde flujos de chatbots y captación de leads hasta workflows internos que conectan herramientas y eliminan el trabajo repetitivo.",
        },
        database: {
          title: "🧾 Arquitectura de Bases de Datos",
          description:
            "Diseño y gestión de bases de datos relacionales y no relacionales (PostgreSQL, MongoDB, etc.). Modelos de datos optimizados para performance, integridad y escalabilidad en aplicaciones de alto tráfico.",
        },
        testing: {
          title: "🧪 Testing y Calidad de Código",
          description:
            "Implementación de testing automatizado (unit, integration, e2e) usando Jest, Cypress y otras herramientas. Comprometido con mantener alta calidad de código y prevenir regresiones mediante buenas prácticas.",
        },
      },
    },
    portfolio: {
      title: "Proyectos Destacados",
      tagline:
        "Una selección de sitios y aplicaciones que construí para clientes alrededor del mundo, de Dubai a Argentina.",
      projectCounter: "Proyecto {current} de {total}",
      items: {
        kurtisConner: "Sitio personal para comediante y creador de contenido",
        energyHumanities: "Plataforma académica para investigación sobre energía y cultura",
        olbMotors: "Concesionaria de autos de lujo en Dubai",
        linkup: "Plataforma co-pilot para startups en etapa temprana",
        tarjetaControl: "Plataforma de control de pagos con tarjeta",
        padiClases:
          "Marketplace de tutorías con más de 2.500 estudiantes donde universitarios argentinos aprenden de pares con notas top mediante clases en vivo, grupos de co-studying y tutores IA entrenados por materia. Usado por estudiantes de Di Tella, UDESA y más.",
      },
    },
    contact: {
      title: "Escribime",
      subtitle: "Siempre abierto a nuevos proyectos, ideas creativas y buenas conversaciones.",
      heading: "Construyamos algo juntos.",
      copy: "¿Tenés una idea, un proyecto o simplemente querés saludar? Mandame un mensaje — usualmente respondo en menos de un día.",
      emailLabel: "Escribime directo",
      phone: {
        contactHub: "Centro de Contacto",
        reach: "Contactá a Ezequiel",
        tap: "Tocá para conectar",
        schedule: "Agendar",
        whatsapp: "WhatsApp",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
    },
    footer: {
      builtWith: "Hecho con",
      rights: "Todos los derechos reservados.",
    },
  },
  he: {
    nav: {
      home: "בית",
      about: "אודות",
      services: "שירותים",
      work: "פרויקטים",
      contact: "צור קשר",
    },
    hero: {
      greeting: "היי! אני אזקיאל אגרדניק",
      subtitle: "🚀 מפתח Full-Stack | מפתח אוטומציות",
      viewPortfolio: "צפו בפורטפוליו",
      contactMe: "צרו קשר",
      scroll: "גלילה",
    },
    about: {
      title: "קוד ואני",
      mobileDescription:
        "מפתח בן 18 העובד במשרה חלקית כ-Automation Developer ב-Satellites on Fire, לומד סייבר באוניברסיטת פלרמו, ופרילנסר ללקוחות בדובאי, ישראל וארגנטינה.",
      greeting: "היי, אני אזקיאל אגרדניק!",
      paragraph1Intro: "אני מפתח בן 18 שגר בארגנטינה, וכרגע עובד במשרה חלקית כ-",
      paragraph1Role: "Automation Developer ב-Satellites on Fire",
      paragraph1End: ", שם אני בונה אוטומציות שמייעלות את התהליכים הפנימיים של הצוות.",
      paragraph2Intro: "במקביל, אני לומד",
      paragraph2University: "סייבר באוניברסיטת פלרמו",
      paragraph2Middle: "ועובד לקראת תעודת",
      paragraph2Cert: "Cisco Junior Cybersecurity Analyst",
      paragraph2End: " — שמשלבת פיתוח מעשי עם בסיס חזק באבטחת מידע.",
      paragraph3Intro: "אני בונה אתרים ואוטומציות כ-",
      paragraph3Freelance: "פרילנסר מאז גיל 16",
      paragraph3Middle: ", ושחררתי פרויקטים כמו",
      paragraph3Projects: "PADI",
      paragraph3And: "ו-",
      paragraph3Linkup: "Linkup",
      paragraph3For: "ללקוחות מ-",
      paragraph3Countries: "דובאי, ישראל וארגנטינה",
      paragraph3End: ".",
      paragraph4Intro: "אני נלהב מבניית",
      paragraph4Solutions: "פתרונות דיגיטליים חדשניים",
      paragraph4Middle: "ותמיד מחפש אתגרים חדשים שדוחפים אותי לצמוח. מחוץ לעבודה אני נהנה",
      paragraph4Hobbies: "ללכת לחדר כושר, לתכנת בזמן הפנוי ולשחק גולף",
      paragraph4End: ".",
      stats: {
        yearsOld: "גיל",
        yrsFreelancing: "שנות פרילנס",
        countries: "מדינות",
        clients: "לקוחות",
      },
      currently: "כרגע",
    },
    timeline: {
      title: "הדרך עד עכשיו",
      active: "פעיל",
      types: {
        "Part-time": "משרה חלקית",
        Freelance: "פרילנס",
        "Co-founder": "מייסד שותף",
      },
      roles: {
        "Automation Developer": "מפתח אוטומציות",
        "Web Developer & Process Automation": "מפתח אתרים ואוטומציות תהליכים",
        "Process Automation": "אוטומציית תהליכים",
        "Co-founder & CTO": "מייסד שותף ו-CTO",
        "Full Stack Developer": "מפתח Full Stack",
      },
    },
    skills: {
      title: "ארסנל הקוד",
      categories: {
        Languages: "שפות",
        Frontend: "Frontend",
        "Backend & Databases": "Backend ובסיסי נתונים",
        Automation: "אוטומציה",
        Cybersecurity: "סייבר",
        Tools: "כלים",
      },
    },
    services: {
      title: "המומחיות שלי",
      cards: {
        fullStack: {
          title: "🧑‍💻 פיתוח Full Stack",
          description:
            "פיתוח אפליקציות ווב מקצה לקצה עם פריימוורקים מודרניים כמו React, Next.js ו-Node.js. ניסיון בבניית ממשקים רספונסיביים, APIs RESTful, עיצוב בסיסי נתונים וארכיטקטורת שרת. מתמחה ביצירת חוויות משתמש חלקות עם ביצועים וסקלביליות מיטביים.",
        },
        api: {
          title: "🗃️ עיצוב ושילוב APIs",
          description:
            "עיצוב חזק ושילוב של APIs מסוג RESTful ו-GraphQL. מתמקד בסקלביליות, אבטחה וביצועים, מה שמאפשר חילופי נתונים חלקים בין מערכות צד-לקוח וצד-שרת.",
        },
        devops: {
          title: "🛠️ DevOps ופריסה",
          description:
            "הקמה ואוטומציה של פייפליינים CI/CD בכלים כמו Docker, GitHub Actions ו-Vercel. מיומן בפריסת אפליקציות סקלביליות לפלטפורמות ענן כמו AWS, GCP ו-DigitalOcean באסטרטגיות zero-downtime.",
        },
        automation: {
          title: "🤖 AI ואוטומציית תהליכים",
          description:
            "בניית אוטומציות מקצה לקצה עם n8n, ManyChat ו-APIs של AI כמו Claude ו-OpenAI. מזרימות צ׳אטבוטים ולכידת לידים ועד וורקפלואו פנימי שמחבר כלים ומבטל עבודה חוזרת.",
        },
        database: {
          title: "🧾 ארכיטקטורת בסיסי נתונים",
          description:
            "עיצוב וניהול בסיסי נתונים רלציוניים ולא-רלציוניים (PostgreSQL, MongoDB ועוד). מודלי נתונים ממוטבים לביצועים, שלמות וסקלביליות באפליקציות בעומס גבוה.",
        },
        testing: {
          title: "🧪 בדיקות ואיכות קוד",
          description:
            "הטמעת בדיקות אוטומטיות (יחידה, אינטגרציה, e2e) עם Jest, Cypress וכלים נוספים. מחויב לשמירה על איכות קוד גבוהה ומניעת רגרסיות באמצעות שיטות עבודה מומלצות.",
        },
      },
    },
    portfolio: {
      title: "פרויקטים נבחרים",
      tagline: "אוסף של אתרים ואפליקציות שבניתי ללקוחות מסביב לעולם, מדובאי ועד ארגנטינה.",
      projectCounter: "פרויקט {current} מתוך {total}",
      items: {
        kurtisConner: "אתר אישי לקומיקאי ויוצר תוכן",
        energyHumanities: "פלטפורמה אקדמית למחקר על אנרגיה ותרבות",
        olbMotors: "סוכנות רכבי יוקרה בדובאי",
        linkup: "פלטפורמת co-pilot לסטארטאפים בשלבים מוקדמים",
        tarjetaControl: "פלטפורמת ניהול תשלומים בכרטיס אשראי",
        padiClases:
          "מרקטפלייס שיעורים פרטיים עם יותר מ-2,500 תלמידים, שבו סטודנטים ארגנטינאים לומדים מעמיתים בעלי ציונים מובילים דרך שיעורים בשידור חי, קבוצות co-studying ומורי AI מאומנים לפי מקצוע. בשימוש על ידי סטודנטים מ-Di Tella, UDESA ועוד.",
      },
    },
    contact: {
      title: "צרו קשר",
      subtitle: "תמיד פתוח לפרויקטים חדשים, רעיונות יצירתיים ושיחות טובות.",
      heading: "בואו נבנה משהו ביחד.",
      copy: "יש לכם רעיון, פרויקט או סתם רוצים להגיד שלום? כתבו לי — בדרך כלל אני עונה תוך יום.",
      emailLabel: "כתבו לי ישירות",
      phone: {
        contactHub: "מרכז התקשרות",
        reach: "צרו קשר עם אזקיאל",
        tap: "לחצו כדי להתחבר",
        schedule: "קביעת פגישה",
        whatsapp: "WhatsApp",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
    },
    footer: {
      builtWith: "נבנה עם",
      rights: "כל הזכויות שמורות.",
    },
  },
} as const

export type Translation = (typeof translations)["en"]
