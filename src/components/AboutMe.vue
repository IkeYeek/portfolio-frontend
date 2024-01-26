<script setup lang="ts"></script>

<template>
  <div id="timeline-container">
    <q-timeline id="timeline" color="secondary">
      <q-timeline-entry heading> A propos de moi </q-timeline-entry>
      <q-timeline-entry
        title="Moi"
        subtitle="8 février 2000"
        icon="account_circle"
      >
        <div>
          Je m'appelle Lucas Marquès, je suis un développeur Freelance
          originaire de Tours en région centre vivant aujourd'hui en Nouvelle
          Aquitaine vers Bordeaux.<br />
          J'ai 24 ans et je suis analyste programmeur de formation, je peux
          programmer et maintenir des sites webs, des applications de réalité
          mixte, et des applications desktop et mobiles. J'aime ne pas me donner
          de limites dans mon champ des possibles, c'est pour moi la meilleur
          des manières de se dépasser dans une discipline ou l'on peut aussi
          simplement trouver de la connaissance et se former sur des sujets
          précis.
        </div>
      </q-timeline-entry>
      <q-timeline-entry title="L'informatique et la programmation" icon="code">
        <div>
          Passioné par l'informatique depuis mon plus jeune âge de part mon
          père, j'ai très tôt apprit à faire des sites webs de manière
          autodidacte sur Openclassrooms, et au fil des années j'ai développé
          une grande passion pour l'informatique en général et la programmation
          en particulier qui m'a menée où je suis aujourd'hui.
        </div>
      </q-timeline-entry>
      <q-timeline-entry title="La musique" icon="music_note">
        <div>
          Parallèlement à l'informatique, j'ai développe une passion pour la
          musique. D'abord par la pratique de la guitare et la composition de
          musiques rock / punk / metal, puis par la découverte du hip-hop et la
          production d'instrumentales sur FL Studio. Aujourd'hui j'écoute et
          produit principalement de la musique Tekno sur Ableton live et je
          mixe, principalement des musiques de genre underground, dub, tribe,
          DnB etc.<br />Je ne fais pas de publicité direct pour mes compositions
          afin de séparer mes deux passions, mais je serais ravis d'aborder ces
          sujets à l'occasion !
        </div>
      </q-timeline-entry>
      <q-timeline-entry title="Autodidacte" icon="local_library">
        <div>
          Bien qu'ayant étudié pendant 5 années l'informatique, je me considère
          majoritairement autodidacte dans ce domaine au même titre que dans ma
          passion pour la musique, entre autre. En effet, j'ai au fil des années
          apprit à me former sur internet, et aujourd'hui je suis capable
          d'aborder une nouvelle technologie sans crainte. Fouiller des
          documentations pendant des heures, regarder des vidéos et des forums,
          fouiller des dépots git pour en comprendre le code ou l'architecture
          sont des choses que je fais au quotidien.
        </div>
      </q-timeline-entry>
      <q-timeline-entry title="Engagement et éthique" icon="diversity_3">
        <div>
          Je place l'éthique au centre de toutes mes activités professionnelles.
          Je considère qu'il est à la fois important d'appliquer cette éthique
          aussi bien dans mon travail - en donnant mon maximum et en faisant en
          sorte de ne travailler que pour des projets que je trouve réellement
          intéressants et dans lesquels je sais que je peux m'impliquer - mais
          également dans les objectifs des projets sur lesquels je travaills. Je
          prend en considération tous les aspects d'un projet afin de m'assurer
          qu'il est en accord avec mon éthique pour pouvoir donner le meilleur
          de moi même.
        </div>
      </q-timeline-entry>
      <q-timeline-entry heading> Mon Parcours </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<style scoped>
#timeline {
  width: 80%;
  height: 80%;
  backdrop-filter: blur(5px);
}
#timeline-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
