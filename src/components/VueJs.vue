<template>
    <div class="container-project">
        <p class="back-link">
            <router-link to="/portfolio/">Retour</router-link>
        </p>
        <div class="project-header">
            <div>
                <h1>Projet : <span class="icon">Création d'une SPA</span></h1>
                <p>Création d'une Web app avec <span class='icon'>VueJS</span> et <span class='icon'>Spark</span>.</p>
            </div>
            <img class="project-preview" src="../assets/logoVue.svg" alt="Preview of the project">
        </div>
        <div class="intro-project">
            <div class="intro-pre-content">
                <p>Ce projet de développement frontend en Vue.js avait pour but de me laisser carte blanche quant à l'apprentissage de Vue 3. L'objectif était de me familiariser avec le framework, de tester ses limites, et de rédiger une documentation complète pour les développeurs de l'équipe qui ne l'avaient jamais manipulé et qui, de plus, ne sont pas familiers avec JavaScript.</p>
            </div>
            <div class="intro-post-content">
                <p>L'objectif était de juger si le framework serait une bonne opportunité pour une migration de l'application Web actuelle. J'ai donc développé plusieurs interfaces en utilisant les différentes fonctionnalités de Vue 3, mais également, j'ai testé les différentes façons de remplacer les fonctionnalités de l'application actuelle, majoritairement liées à la création de formulaires dynamiques, mais aussi de pallier les appels AJAX excessifs.</p>
            </div>
        </div>
        <div>
            <h2 class="summary-title">Structure</h2>
            <div class="structure-content">
                <p class="subtitle-in-content">Ce projet de 'Démo' prenait la forme d'une application de streaming vidéo, s'inspirant de ce que peut proposer Netflix.</p>
                <p>Pour l'interface, j'ai utilisé <span class="vueIcon">VueJs</span>. En ce qui concerne l'échange avec le serveur <span class="sparkIcon">Spark</span>, j'ai utilisé <span class="axiosIcon">Axios</span>. Avec <span>Vue</span>, j'ai retranscrit les fonctionnalités de l'application visée par une potentielle migration.</p>
                <br>
                <p>Pour ce faire, l'utilisation des Hooks fut un moyen de simplifier ce processus, mais aussi de démontrer la rapidité de Vue comparé à l'ancienne architecture en <span class="jqueryIcon">jQuery</span>.</p>
                <p>Pour le serveur, j'ai utilisé <span class="sparkIcon">Spark</span>, d'une part car pour obtenir une API basique, ce genre de framework est idéal. Mais également car je trouvais intéressant d'apprendre un nouveau framework back-end en <span class="javaIcon">Java</span>.</p>
                <p>Enfin, cela permettait aussi d'utiliser un stockage en JSON, une BDD étant injustifiée pour un tel projet.</p>
            </div>
        </div>

      <h2 class="summary-title">Fonctionnalités</h2>
      <div class="asided-list-content">
        <div class="list-container">
            <p><span class='sub-title-prelist'>Le projet se résume par les points suivants :</span></p>
            <ul class="list">
                <li>Développement d'une UI complète</li>
                <li>Développement d'une SPA entièrement dynamique</li>
                <li>Développement de formulaires</li>
                <li>Élaboration d'une API REST pour simuler des appels de formulaire sur le serveur</li>
                <li>Test des limites du framework</li>
                <li>Utilisation de l'intégralité des Hooks que propose Vue</li>
                <li>Gestion du déploiement</li>
                <li>Rédaction de la documentation complète du projet sur chaque feature</li>
            </ul>
        </div>

        <div class="summary justify-content ">
            <p>Je ne peux pas fournir de preuve physique de ce projet, appartenant à mon ancienne entreprise.</p>
            <p>Cependant, ce projet fut ma première expérience de développement Web dans le milieu professionnel.</p>
            <p>J'ai pu découvrir les différentes méthodes de développement frontend. Enfin, l'utilisation de Vue 3 m'a permis de mieux connaître les frameworks JavaScript, et Vue en particulier me donne envie de continuer dans cette voie.</p>
        </div>
      </div>
      <p class="back-link">
        <router-link to="/portfolio/">Retour</router-link>
      </p>
      <div class="link-button">
          <a href="https://github.com/ArthurDesmonts/typeFaster" target="_blank" class="innerParagraphIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.125-.305-.535-1.54.115-3.205 0 0 1.005-.32 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.55 3.285-1.23 3.285-1.23.655 1.665.245 2.9.12 3.205.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.81 1.1.81 2.22v3.285c0 .32.215.695.825.575C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        </div>
    </div>
  </template>

<style scoped>
    .project-preview {
        width: auto;
        height: 400px;
        border-radius: 20px;
        border-color: var(--button-color);
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    @media(max-width: 1500px) {
        .project-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4em;
        }

        .project-preview {
            width: 50%;
            height: auto;
        }
    }
</style>