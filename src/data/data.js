const data = {
  skills: {
    langages: [
      { titre: "HTML/CSS", annee: "2 ans", logo: "/htmlcss.jpg", niveau: "intermediaire", nbreProjet: 5, surCV: true },
      { titre: "JavaScript", annee: "2 ans", logo: "/javascript.jpg", niveau: "intermediaire", nbreProjet: 8, surCV: true },
      { titre: "JAVA", annee: "2 mois", logo: "/javaLogo.webp", niveau: "debutant", nbreProjet: 1, surCV: false },
      { titre: "Langage C", annee: "1 an", logo: "/langageC.jpg", niveau: "debutant", nbreProjet: 2, surCV: false },
    ],
    frameworks: [
      { titre: "ReactJS", annee: "2 ans", logo: "/reactjs.jpg", niveau: "avance", nbreProjet: 4, surCV: true },
      { titre: "React Native", annee: "2 ans", logo: "/reactNative.jpg", niveau: "intermediaire", nbreProjet: 3, surCV: true },
      { titre: "Flutter & Dart", annee: "1 an", logo: "/flutter.jpeg", niveau: "debutant", nbreProjet: 2, surCV: false },
    ],
    backend: [
      { titre: "NodeJS", annee: "2 ans", logo: "/nodejs.jpg", niveau: "intermediaire", nbreProjet: 5, surCV: true },
      { titre: "SPRING BOOT", annee: "2 mois", logo: "/springBootLogo.png", niveau: "debutant", nbreProjet: 1, surCV: false },
    ],
    baseDonnees: [
      { titre: "MongoDB", annee: "2 ans", logo: "/mongodb.jpg", niveau: "intermediaire", nbreProjet: 4, surCV: true },
      { titre: "MySQL", annee: "1 an", logo: "/mysql.jpg", niveau: "intermediaire", nbreProjet: 3, surCV: true },
      { titre: "PostgreSQL", annee: "1 an", logo: "/postgreLogo.png", niveau: "intermediaire", nbreProjet: 2, surCV: true },
      { titre: "SQLite", annee: "1 an", logo: "/sqlite.jpg", niveau: "debutant", nbreProjet: 2, surCV: false }
    ],
    outils: [
      { titre: "VS Code", annee: "2 ans", logo: "/vscode.jpeg", niveau: "expert", nbreProjet: 20, surCV: true },
      { titre: "GitHub", annee: "2 ans", logo: "/gituhb.png", niveau: "avance", nbreProjet: 15, surCV: true },
      { titre: "Git", annee: "2 ans", logo: "/git.png", niveau: "intermediaire", nbreProjet: 15, surCV: true }
    ]
  },
  formation: [
    {
      date: "Session 2024 / Établi le 23/07/2024 / Fait à Conakry, le 25/07/2024",
      titre: "Diplôme de Bachelier du second Degré",
      organisateur: "MINISTERE DE L'ENSEIGNEMENT PRÉ-UNIVERSITAIRE ET DE L'ALPHABETISATION / Direction Générale des Examens et Contrôle Scolaire",
      description: "Obtenu dans le profil SCIENCES MATHÉMATIQUES avec la mention ASSEZ BIEN.",
      certificat: "/certificat/bacdevant.jpg",
      surCV: false,
    },
    {
      date: "S'est déroulée du 16 au 17 mai 2025",
      titre: "Certificat de formation",
      organisateur: "Université de Labé et CJP (Club des Jeunes Informaticiens)",
      description: "Formation intitulée : Comment protéger son Réseaux LAN avec un pare-feu",
      certificat: "/certificat/cjp1.jpg",
      surCV: true,
    },
    {
      date: "S'est déroulée du 1 juin au 24 septembre 2025",
      titre: "Certificat de formation en Développement Web Full-Stack",
      organisateur: "SIMPLON Guinée",
      description: "Formation complète sur le développement web moderne utilisant React pour le front-end, Node.js/Express pour le back-end, et MongoDB pour la gestion de bases de données NoSQL.",
      certificat: "/certificat/attend.png",
      surCV: true,
    },
    {
      date: "Date de 12 au 15 novembre 2025",
      titre: "Formation sur la gestion de projets",
      organisateur: "Université de Labé",
      description: "Formation en gestion de projets : Acquisition des compétences nécessaires pour gérer des projets.",
      certificat: "/certificat/gestion.jpeg",
      surCV: true,
    },
    {
      date: "Date d'obtention : 21 NOV. 2025",
      titre: "CERTIFICATION JAVASCRIPT",
      organisateur: "CodinGame Filiale de : CoderPad",
      description: "Ce document atteste que Fode Momo Soumah a validé ses compétences en résolution de problèmes avec JavaScript.",
      certificat: "/certificat/codingame.png",
      surCV: true,
    },
    {
      date: "Date d'obtention : 22 NOV. 2025",
      titre: "CERTIFICATION PYTHON 3",
      organisateur: "CodinGame Filiale de : CoderPad",
      description: "Ce document atteste que Fode Momo Soumah a validé ses compétences en résolution de problèmes avec python 3.",
      certificat: "/certificat/python.png",
      surCV: true,
    },
    {
      date: "Date de 1 au 5 decembre",
      titre: "Développement Mobile avec Flutter",
      organisateur: "Université de Labé",
      description: "Formation en développement Flutter : Acquisition des compétences nécessaires pour développer des applications mobile multiplateformes.",
      certificat: "/certificat/fluttermobileFOr.jpeg",
      surCV: true,
    },
    {
      date: "Date de 1 au 3 avril 2026",
      titre: "Formation en Spring Boot",
      organisateur: "Université de Labé",
      description: "Formation en développement Spring Boot : Acquisition des compétences nécessaires pour développer des applications mobile multiplateformes.",
      certificat: "/certificat/nonCertificat.png",
      surCV: false,
    },
    {
      date: "Date de 2 au 5 avril 2026",
      titre: "Formation sur l'intelligence artificielle",
      organisateur: "Université de Labé",
      description: "Formation sur l'intelligence artificielle : Acquisition des compétences nécessaires pour développer des applications mobile multiplateformes.",
      certificat: "/certificat/IA.jpeg",
      surCV: false,
    }
  ],
  info: {
    nom: "Soumah",
    prenom: "Fodé Momo",
    email: "fodemomos11@gmail.com",
    phone: ["627172530", "666761076"],
    adresse: "Labé (Hafia)",
    description: "Je suis étudiant en Licence 2 Informatique à l’Université de Labé, en Guinée Conakry. Passionné par le développement web et mobile, j’ai construit mon parcours autour des technologies modernes comme React, React Native (Expo), Node.js, ainsi que des bases de données telles que MongoDB, SQLite, MySQL et plus récemment Supabase / PostgreSQL.",
    profile: "/momo.png",
  },
  langues: [
    { langue: "Français", niveau: "Courant" },
    { langue: "Anglais", niveau: "Intermédiaire" }
  ],
  hobbies: [
    { nom: "Veille Technologique", icone: "💻" },
    { nom: "Voyage", icone: "✈️" },
    { nom: "Serie", icone: "📚" },
    { nom: "Jeux vidéo", icone: "🎮" }
  ],
  projets: [
    {
      titre: "EliteSchool",
      description: "Application web complète de gestion scolaire permettant la gestion des élèves, professeurs, classes, notes et emplois du temps.",
      image: "/eliteschool.png",
      langage: {
        frontend: ["ReactJS", "TailwindCSS"],
        backend: ["NodeJS", "Express"],
        baseDonnees: "MongoDB",
      },
      lien: "https://eliteschool.onrender.com/",
      equipe: "Seul",
      isActive: false,
      progression: 50,
      surCV: true,
    },
    {
      titre: "ClassMate",
      description: "Application mobile de gestion de classe développée avec React Native, permettant aux enseignants de gérer leurs cours et étudiants.",
      image: "/projects/classmate.png",
      langage: {
        frontend: "React Native",
        backend: ["NodeJS", "Express"],
        baseDonnees: "SQLite",
      },
      lien: "https://classmate.onrender.com/",
      equipe: "Seul",
      isActive: false,
      progression: 100,
      surCV: true,
    },
    {
      titre: "Brainly Guinée",
      description: "BRAINLY GUINEE est une plateforme éducative sociale dédiée aux élèves et étudiants de Guinée. Notre objectif est de faciliter l\'entraide, le partage de connaissances et l\'accès aux ressources pédagogiques locales, tout en intégrant des outils modernes d\'intelligence artificielle.",
      image: "/Brainly.jpeg",
      langage: {
        frontend: "flutter",
        backend: ["supabase"],
        baseDonnees: "PostgreSQL, Sqlite",
      },
      lien: "https://classmate.onrender.com/",
      equipe: "Seul",
      isActive: true,
      progression: 100,
      surCV: true,
    },
    {
      titre: "ALGOSTUDIO",
      description: "Application mobile de gestion de classe développée avec React Native, permettant aux enseignants de gérer leurs cours et étudiants.",
      image: "/algoStudio.jpeg",
      langage: {
        frontend: "flutter",
        backend: ["supabase"],
        baseDonnees: "PostgreSQL, Sqlite",
      },
      lien: "https://classmate.onrender.com/",
      equipe: "Seul",
      isActive: false,
      progression: 100,
      surCV: true,
    },
    {
      titre: "Lenapila Assistance",
      description: "LENAPILA ASSISTANCE est une plateforme de mise en relation entre les prestataires de services et les clients. Elle permet aux utilisateurs de trouver facilement des prestataires de services qualifiés et fiables, et aux prestataires de trouver des clients pour leurs services.",
      image: "/lenapila.png",
      langage: {
        frontend: "flutter et reactjs",
        backend: ["NodeJS", "Express"],
        baseDonnees: "PostgreSQL, Sqlite",
      },
      lien: "https://classmate.onrender.com/",
      equipe: ["Fode Momo Soumah ", "et Jean Michel haba"],
      isActive: true,
      progression: 100,
      surCV: true,
    },
  ],
};

export default data;
