const data = {
  langages: [
    { titre: "HTML/CSS", annee: "2 ans", logo: "/htmlcss.jpg",niveau:"intermediaire" },
    { titre: "JavaScript", annee: "2 ans", logo: "/javascript.jpg" ,niveau:"intermediaire"},
    { titre: "TypeScript", annee: "1 an", logo: "/typescript.jpg" ,niveau:"debutant"},
    { titre: "ReactJS", annee: "2 ans", logo: "/reactjs.jpg" ,niveau:"expert"},
    { titre: "React Native", annee: "2 ans", logo: "/reactNative.jpg" ,niveau:"debutant"},
    { titre: "Langage C", annee: "1 an", logo: "/langageC.jpg", nbreProjet: 2 ,niveau:"debutant"},
    { titre: "NodeJS", annee: "2 ans", logo: "/nodejs.jpg", nbreProjet: 2 ,niveau:"intermediaire"},
    { titre: "Supabase", annee: "1 an", logo: "/supabase.jpg", nbreProjet: 1 ,niveau:"debutant"},
    { titre: "MongoDB", annee: "2 ans", logo: "/mongodb.jpg", nbreProjet: 3 ,niveau:"debutant"},
    { titre: "MySQL", annee: "1 an", logo: "/mysql.jpg", nbreProjet: 3 ,niveau:"intermediaire"},
    { titre: "SQLite", annee: "1 an", logo: "/sqlite.jpg", nbreProjet: 2 ,niveau:"debutant"},
  ],
  formation:[
     {
      date:"Session 2024",
      titre:"Diplôme de Bachelier de Seconde Degré BAC",
      organisateur:"La guinée",
      description:"ok c'est bien",
      certificat:"/certificat/bacdevant.jpg"
     },
      {
      date:"Session 2024",
      titre:"Diplôme de Bachelier de Seconde Degré BAC",
      organisateur:"La guinée",
      description:"ok c'est bien",
      certificat:"/certificat/cjp1.jpg"
     },
      {
      date:"Session 2024",
      titre:"Diplôme de Bachelier de Seconde Degré BAC",
      organisateur:"La guinée",
      description:"ok c'est bien",
      certificat:"/sqlite.jpg"
     },
   ],
  info: {
    nom: "Soumah",
    prenom: "Fodé Momo",
    email: "fodemomos11@gmail.com",
    phone: ["627172530", "666761076"],
    adresse: "Labé (Hafia)",
    profile: "/mainbg.jpeg",
  },
  projets: [
    {
      titre: "Gestion de l'école",
      langage: {
        frontend: ["ReactJS", "TailwindCSS"],
        backend: ["NodeJS", "Express"],
        baseDonnees: "MongoDB",
      },
      lien: "https://eliteschool.onrender.com/",
      equipe: "Seul",
      isActive: true,
    },
    {
      titre: "ClassMate",
      langage: {
        frontend: "React Native",
        backend: ["NodeJS", "Express"],
        baseDonnees: "SQLite",
      },
      lien: "https://classmate.onrender.com/",
      equipe: "Seul",
      isActive: true,
    },
  ],
};

export default data;
