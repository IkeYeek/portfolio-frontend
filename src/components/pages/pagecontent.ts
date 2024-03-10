const aboutMe = {
  color: "accent",
  path: "/",
  entries: [
    {
      title: "A propos de moi",
      type: "Heading",
      innerHtml: "A propos de moi",
    },
    {
      title: "Moi",
      subtitle: "8 fevrier 2000",
      icon: "account_circle",
      type: "Entry",
      innerHtml:
        "Je suis né à Tours, dans le centre de la France mais j'ai grandit dans la campagne périgourdine avant de me rendre à Bordeaux pour mes études supérieures. Je suis développeur freelance, mes services sont détaillés plus loins dans mon site. Je suis également passionné de musique. Je tiens un également un blog ayant pour sujet principale mes deux passions !",
    },
    {
      title: "Informatique & Programmation",
      icon: "code",
      type: "Entry",
      innerHtml:
        "J'ai commencé à programmer à l'âge de 12 ans car je voulais être capable de créer mon propre launcher Minecraft. Après avoir passé beaucoup de temps à essayer de jouer avec Java sans jamais vraiment l'apprendre, j'ai commencé à rentrer sérieusement dans la programmation en faisant mes premiers sites webs en HTML/CSS/PHP grâce aux cours du SiteDuZéro et de Grafikart. C'est depuis - avec l'informatique - une de mes plus grandes passions, et c'est principalement pour ça que j'ai décidé d'en faire mon métier.",
    },
    {
      title: "Musique & Composition",
      icon: "music_note",
      type: "Entry",
      innerHtml:
        "Ma deuxième passion dans la vie, c'est la musique. J'ai commencé par la guitare au collège avant de découvrir la musique teKno, dont je suis très vite tombé amoureux. Aujourd'hui, je mix et produit principalement des styles de musique teKno tels que de l'acidcore ou de la tribe / mental etc. Parallèlement à ça j'ai longtemps été un grand consommateur de Rock / Grunge et de Rap Francophone.",
    },
    {
      title: "Autodidacte",
      icon: "local_library",
      type: "Entry",
      innerHtml:
        "Même si j'ai suivi des études d'informatique, je me considère comme autodidacte. J'ai commencé l'informatique en apprenant seul, de même pour la guitare et la MAO et l'immense majorité des competences que j'ai aujourd'hui. Pour moi, la meilleur manière d'apprendre c'est d'expérimenter, et internet reste une source infinie de connaissance sur tous les sujets.",
    },
    {
      title: "Engagement & Ethique",
      icon: "diversity_3",
      innerHtml:
        "Je place l'éthique au centre de mon activité. Je choisis avec sérieux les personnes avec qui je travaille afin de m'assurer qu'ils n'outrepassent pas mes valeurs morales dans l'objectif de pouvoir toujours donner le meilleurs de moi-même.",
      type: "Entry",
    },
    /*{
      title: "Mon Parcours",
      type: "Heading",
      innerHtml: "Mon Parcours",
      linkTo: "/academics",
    },*/
  ],
};

const academics = {
  color: "accent",
  path: "/academics",
  entries: [
    {
      title: "A propos de moi",
      type: "Heading",
      innerHtml: "A propos de moi",
      linkTo: "/",
    },
    {
      title: "Mon Parcours",
      type: "Heading",
      innerHtml: "Mon Parcours",
    },
    {
      title: "Baccalauréat Scientifique",
      subtitle: "2018 - Lycée Alcide Dusolier - Nontron (24)",
      icon: "science",
      type: "Entry",
      innerHtml:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum mollis ultricies. Praesent nec lobortis diam. Quisque egestas leo ac sapien condimentum gravida. Donec ac leo porttitor, pellentesque nulla ac, tincidunt ligula. Nulla non ullamcorper urna, eu tincidunt magna. Praesent aliquam ex eu nulla convallis ultricies. Aenean ullamcorper ultricies iaculis. Nam eu purus vitae risus maximus lobortis. Duis porttitor purus id ex ornare vehicula. Donec facilisis libero felis, quis vestibulum quam auctor nec. Etiam sed neque sit amet est lobortis porttitor at et lorem. In tortor nisl, bibendum sed nisl eu, cursus mattis enim.",
    },
    {
      title: "DUT Informatique",
      subtitle: "2020 - IUT de Gradignan (33)",
      icon: "integration_instructions",
      type: "Entry",
      innerHtml:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum mollis ultricies. Praesent nec lobortis diam. Quisque egestas leo ac sapien condimentum gravida. Donec ac leo porttitor, pellentesque nulla ac, tincidunt ligula. Nulla non ullamcorper urna, eu tincidunt magna. Praesent aliquam ex eu nulla convallis ultricies. Aenean ullamcorper ultricies iaculis. Nam eu purus vitae risus maximus lobortis. Duis porttitor purus id ex ornare vehicula. Donec facilisis libero felis, quis vestibulum quam auctor nec. Etiam sed neque sit amet est lobortis porttitor at et lorem. In tortor nisl, bibendum sed nisl eu, cursus mattis enim.",
    },
    {
      title: "Licence 3 Mention Informatique",
      subtitle: "2022 - Université de Bordeaux (33)",
      icon: "school",
      type: "Entry",
      innerHtml:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum mollis ultricies. Praesent nec lobortis diam. Quisque egestas leo ac sapien condimentum gravida. Donec ac leo porttitor, pellentesque nulla ac, tincidunt ligula. Nulla non ullamcorper urna, eu tincidunt magna. Praesent aliquam ex eu nulla convallis ultricies. Aenean ullamcorper ultricies iaculis. Nam eu purus vitae risus maximus lobortis. Duis porttitor purus id ex ornare vehicula. Donec facilisis libero felis, quis vestibulum quam auctor nec. Etiam sed neque sit amet est lobortis porttitor at et lorem. In tortor nisl, bibendum sed nisl eu, cursus mattis enim.",
    },
    {
      title:
        "Licence Professionnelle Développement d'Application Web et Innovation Numérique (DAWIN)",
      subtitle: "2023 - IUT de Gradignan (33)",
      icon: "laptop_windows",
      type: "Entry",
      innerHtml:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum mollis ultricies. Praesent nec lobortis diam. Quisque egestas leo ac sapien condimentum gravida. Donec ac leo porttitor, pellentesque nulla ac, tincidunt ligula. Nulla non ullamcorper urna, eu tincidunt magna. Praesent aliquam ex eu nulla convallis ultricies. Aenean ullamcorper ultricies iaculis. Nam eu purus vitae risus maximus lobortis. Duis porttitor purus id ex ornare vehicula. Donec facilisis libero felis, quis vestibulum quam auctor nec. Etiam sed neque sit amet est lobortis porttitor at et lorem. In tortor nisl, bibendum sed nisl eu, cursus mattis enim.",
    },
    {
      title: "Mes Expériences",
      type: "Heading",
      innerHtml: "Mes Expériences",
      linkTo: "/my-experiences",
    },
  ],
};

const experiences = {
  color: "accent",
  path: "/my-experiences",
  entries: [
    {
      title: "Mon Parcours",
      type: "Heading",
      innerHtml: "Mon Parcours",
      linkTo: "/academics",
    },
    {
      title: "Mes Expériences",
      type: "Heading",
      innerHtml: "Mes Expériences",
    },
    {
      title:
        "Développement d'un outil simulant le procédé LBM en integrant des interactions aléatoires.",
      subtitle:
        "2020 - Département GMP de l'IUT de Gradignan (Stage/Télétravail)",
      icon: "biotech",
      type: "Entry",
      innerHtml:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum mollis ultricies. Praesent nec lobortis diam. Quisque egestas leo ac sapien condimentum gravida. Donec ac leo porttitor, pellentesque nulla ac, tincidunt ligula. Nulla non ullamcorper urna, eu tincidunt magna. Praesent aliquam ex eu nulla convallis ultricies.",
    },
    {
      title:
        "Amélioration de l'outil de simulation développé en stage, développement de Proof of Concepts de Réalité Mixte.",
      subtitle: "2021-2022 - I2M Bordeaux (CDD)",
      icon: "memory",
      type: "Entry",
      innerHtml:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum mollis ultricies. Praesent nec lobortis diam. Quisque egestas leo ac sapien condimentum gravida. Donec ac leo porttitor, pellentesque nulla ac, tincidunt ligula. Nulla non ullamcorper urna, eu tincidunt magna. Praesent aliquam ex eu nulla convallis ultricies.",
    },
    {
      title:
        "Développement d'un outil no-code permettant de générer des environnements en réalité mixte.",
      subtitle: "2022-2023 - I2M Bordeaux (Alternance)",
      icon: "view_in_ar",
      type: "Entry",
      innerHtml:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum mollis ultricies. Praesent nec lobortis diam. Quisque egestas leo ac sapien condimentum gravida. Donec ac leo porttitor, pellentesque nulla ac, tincidunt ligula. Nulla non ullamcorper urna, eu tincidunt magna. Praesent aliquam ex eu nulla convallis ultricies.",
    },
    {
      title:
        "Développement d'un outil permettant de mesurer et de comparer simplement des environnements de production utilisant une prise connectée.",
      subtitle: "2023 - IUT de Bordeaux (Projet de fin d'année)",
      icon: "ssid_chart",
      type: "Entry",
      innerHtml:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum mollis ultricies. Praesent nec lobortis diam. Quisque egestas leo ac sapien condimentum gravida. Donec ac leo porttitor, pellentesque nulla ac, tincidunt ligula. Nulla non ullamcorper urna, eu tincidunt magna. Praesent aliquam ex eu nulla convallis ultricies.",
    },
    {
      title:
        "Développement d'une interface légère et mise à disposition de plans pour un organizer DIY en Rust et React.",
      subtitle: "2023 - Projet Personnel",
      icon: "playlist_add_check",
      type: "Entry",
      innerHtml:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum mollis ultricies. Praesent nec lobortis diam. Quisque egestas leo ac sapien condimentum gravida. Donec ac leo porttitor, pellentesque nulla ac, tincidunt ligula. Nulla non ullamcorper urna, eu tincidunt magna. Praesent aliquam ex eu nulla convallis ultricies.",
    },
    {
      title: "Mes Compétences",
      type: "Heading",
      innerHtml: "Mes Connaissances",
      linkTo: "/my-skills",
    },
  ],
};


const content = {
  aboutMe,
  academics,
  experiences,
  skills: [],
  whatcanido: [],
};

export default content;
