<template>
    <div class="container-project">
        <p class="back-link">
            <router-link to="/portfolio/">Retour</router-link>
        </p>
        <div class="project-header">
            <div>
                <h1>Nom du projet : <span class="icon">Type Faster</span></h1>
                <p>Développement d'un jeu online de <span class='icon'>typing</span>.</p>
            </div>
            <img class="project-preview" src="../assets/typefasterPreview.png" alt="Preview of the project">
        </div>
        <div class="intro-project">
            <div class="intro-pre-content">
                <p>Le but du jeu est de copier un texte de mots aléatoires le plus rapidement possible.</p>
                <p>Ce n'est pas un projet complexe, mais pour se familiariser avec JavaScript, c'est idéal.</p>
            </div>
            <div class="intro-post-content">
                <p>L'idée, à travers la création de ce jeu, était d'une part d'utiliser JavaScript comme langage principal, en commençant par une interface réactive, puis par l'utilisation d'une API REST pour stocker les données des utilisateurs.</p>
            </div>
        </div>
        <div>
            <h2 class="summary-title">Structure</h2>
            <div class="structure-content">
                <p class="subtitle-in-content">Le projet embarque une architecture simple et efficace, un client et une API.</p>
                <p>Pour le client, j'ai choisi d'utiliser <span class='vueIcon'>Vue.JS</span>, pour sa simplicité et son efficacité pour la création de SPA.</p>
                <p>Quant à l'API, j'ai utilisé <span class="expressIcon">Express</span>. Dans le cas de la création d'une API rudimentaire, ce fut le framework parfait étant donné son stockage en NoSQL.</p>
                <p>Enfin, pour rendre l'interface plus chaleureuse et me concentrer sur les fonctionnalités plutôt que sur le design, j'ai utilisé <span class="tailwindIcon">TailwindCSS.</span></p>
            </div>
        </div>
      <h2 class="summary-title">Fonctionnalités</h2>
      <div class="asided-list-content">
        <div class="list-container">
            <p><span class='sub-title-prelist'>Le projet se résume par les points suivants :</span></p>
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
        <div class="summary justify-content ">
            <p>Ce projet était une envie personnelle, étant un grand fan de ce jeu. J'ai pu retravailler mon utilisation de JS, Node et NoSQL tout en apprenant à utiliser Express.</p>
            <p>Enfin, j'ai progressé dans l'implémentation d'API REST, même dans le cadre d'un projet très simple.</p>
        </div>
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

<style>
    .project-preview {
        width: auto;
        height: 400px;
        border-radius: 20px;
        border-color: var(--button-color);
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
</style>