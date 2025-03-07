<template>
    <div class="container">
        <div class="project-header">
            <h1>Nom du projet : <span class="icon">Type Faster</span></h1>
            <img class="project-preview" src="../assets/typefasterPreview.png" alt="Preview of the project">
        </div>
      <p>Développement d'un jeu de typing avec <span class='icon'>stockage sur serveur</span></p>
      <p>J’avais cette idée de projet depuis un moment, mais je n’avais pas trouvé la techno que je ne maitrisais pas qui serait intéressante pour ce projet. C'est pourquoi, quand j'ai découvert <span class='icon'>Express</span>, je me suis dit que l'occasion était parfaite pour me lancer. J'ai donc développé un jeu de typing, stockant les scores sur un serveur, embarquant des session et des comptes utilisateurs, des graphiques, etc. Le but était de renforcer mes compétences en JS (à travers le fonctionnement du jeu), mais surtout de me rapprocher du Fullstack en utilisant Express et <span class='icon'>MongoDB</span>.</p>
      <h2>Résumé du projet</h2>
      <p><span class='underline'>Le projet se résume par les points suivants :</span></p>
      <ul>
        <li>Interface dynamique</li>
        <li>Gestion des sessions</li>
        <li>Gestion des utilisateurs</li>
        <li>Stockage des scores</li>
        <li>Gestion des graphiques</li>
        <li>Gestion des erreurs</li>
        <li>Gestion des performances</li>
        <li>Mise en relation des données recueillies</li>
        <li>Formulaire de connexion avec Hashage</li>
      </ul>
      <p>Ce projet était une envie personnelle plus que vraiment utilitaire. J'ai amélioré mes compétences en JS, en Node, en Express, en NOSQL. De façon générale, ce projet a éclairci ma vision du Full-Stack vis-à-vis de la séparation entre Front et Back lors de l'utilisation de Frameworks JS.</p>
      <h2>Liens</h2>
      <p>GitHub: <a href="https://github.com/ArthurDesmonts/typeFaster">https://github.com/ArthurDesmonts/typeFaster</a></p>
      <p>Démo: <a href="https://arthurdesmonts.github.io/typeFaster/">https://arthurdesmonts.github.io/typeFaster/</a></p>
    </div>
  </template>

<style scoped>
    .container {
        padding: 5em 1em 0 1em;
    }

    .project-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 2em;
        margin: 2em;
    }

    .project-preview {
        width: 50%;
        height: auto;
        border-radius: 20px;
        border-color: var(--button-color);
    }
</style>