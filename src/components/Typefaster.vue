<template>
    <div class="container">
        <div class="project-header">
            <h1>Nom du projet : <span class="icon">Type Faster</span></h1>
            <img class="project-preview" src="../assets/typefasterPreview.png" alt="Preview of the project">
        </div>
      <p>Développement d'un jeu de typing avec <span class='icon'>stockage sur serveur</span></p>
      <p>J’avais cette idée de projet depuis un moment, mais je n’avais pas trouvé la techno que je ne maitrisais pas qui serait intéressante pour ce projet. C'est pourquoi, quand j'ai découvert <span class='icon'>Express</span>, je me suis dit que l'occasion était parfaite pour me lancer. J'ai donc développé un jeu de typing, stockant les scores sur un serveur, embarquant des session et des comptes utilisateurs, des graphiques, etc. Le but était de renforcer mes compétences en JS (à travers le fonctionnement du jeu), mais surtout de me rapprocher du Fullstack en utilisant Express et <span class='icon'>MongoDB</span>.</p>
      <h2 class="summary-title">Résumé du projet :</h2>
      <div class="asided-list-content">
        <div class="list-container">
            <p><span class='underline'>Le projet se résume par les points suivants :</span></p>
            <ul class="list">
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
        </div>
        <p class="summary">Ce projet était une envie personnelle plus que vraiment utilitaire. J'ai amélioré mes compétences en JS, en Node, en Express, en NOSQL. De façon générale, ce projet a éclairci ma vision du Full-Stack vis-à-vis de la séparation entre Front et Back lors de l'utilisation de Frameworks JS.</p>
      </div>
      <div class="link-button">
          <a href="https://github.com/ArthurDesmonts/typeFaster" target="_blank" class="innerParagraphIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.125-.305-.535-1.54.115-3.205 0 0 1.005-.32 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.55 3.285-1.23 3.285-1.23.655 1.665.245 2.9.12 3.205.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.81 1.1.81 2.22v3.285c0 .32.215.695.825.575C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="https://arthurdesmonts.github.io/typeFaster/" target="_blank" class="innerParagraphImage">
            <img src="../assets/typefasterLogo.png" alt="Typefaster Logo" width="24" height="24">
          </a>
        </div>
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

    .list {
        list-style-type: none;
        padding-right: 3em;
        margin: 2em;
        align-items: center;
        border-right: 1px solid var(--button-color);
    }

    .list li {
        margin: 1em 0;
        border: 1px solid var(--button-color);
        width: auto;
        padding: 1em;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s;
        text-align: center;
    }

    .list li:hover {
        transform: translateY(-5px);
    }

    .summary-title{
        margin: 2em 0;
    }

    .asided-list-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .list-container {
        width: 50%;
    }

    .summary {
        width: 50%;
        margin: 2em;

    }

    .link-button {
        display: flex;
        flex-direction: row;
        gap : 2em;
        margin-top: 1em;
        margin-left: auto;
        width: auto;
        justify-content: center;
    }
    
    .innerParagraphIcon {
        fill: var(--text-color);
    }
</style>