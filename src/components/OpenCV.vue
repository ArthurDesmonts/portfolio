<template>
    <div class="container">
        <p class="back-link">
            <router-link to="/portfolio/">Retour</router-link>
        </p>
        <div class="project-header">
            <div>
                <h1>Projet : <span class="icon">Scanner avec OpenCV</span></h1>
                <p>Création d'un algorithme de scanne par <span class='icon'>camera</span>.</p>
            </div>
            <img class="project-preview" src="../assets/openCVpreview.png" alt="Preview of the project">
        </div>
        <div class="intro-project">
            <div class="intro-pre-content">
                <p>Ce projet fut mon premier projet durant mon alternance. L'objectif été de simplifier l'ajout de documents sur l'application, passant d'une prise manuel, à une prise automatique.</p>
                <p>Le projet était complexes à réaliser. Il m'a fallut prendre en compte une grande quantité de cas de figures qui pouvait casser le fonctionnement de l'algorithme de capture.</p>
            </div>
            <div class="intro-post-content">
                <p>L'avantage que j'ai eu, c'est que j'ai été en total liberté pour l'implémentation, ce qui m'a permit d'être en confort sur ce premier projet.</p>
                <p>Ainsi, j'ai pu établir un plan général du fonctionnement, en commençant par appliquer un traitement classique, puis modifier la capture en cas d'orientation du documents ou de mauvaise qualités de la capture.</p>
            </div>
        </div>
        <div>
            <h2 class="summary-title">Structure</h2>
            <div class="structure-content">
                <p class="subtitle-in-content">Le module a été implémenter sur mobile, en langage natif et donc sans aucun framework de développement multi-plateforme.</p>
                <p>Le module a été conçu en <span class="javaIcon">Java</span>(<span class="androidIcon">Androïd</span>) et en <span class="objectivCicon">Objective-C</span>(<span class="iosIcon">iOS</span>).</p>
                <p>Pour le développement de l'algorithme, le choix s'est tourné vers <span class="opencvIcon">OpenCV</span>.</p>
                <br>
                <p>Pour décrire l'algorithme dans les grandes lignes (et pour cause, impossible de fournir le code), on effectue dans un premier tant une détection des coins du document avec le flux direct de la caméra(sans prise de photos manuel).</p>
                <p>Ensuite, si les coins ne sont pas cohérents, alors on utilise un algorithme qui recalcul l'orientation des coins du documents, peu importe la position dans laquelle il a était capturé, pour effectuer des permutations afin d'obtenir l'image sans aucune orientation. Dans ce cas on re-effectue la capture classique.</p>
            </div>
        </div>
      <h2 class="summary-title">Fonctionnalités</h2>
      <div class="asided-list-content">
        <div class="list-container">
            <p><span class='sub-title-prelist'>Le projet se résume par les points suivants :</span></p>
            <ul class="list">
                <li>Isolation de structures récurrentes</li>
                <li>Traitement d'images</li>
                <li>Contrôle d'orientation</li>
                <li>Algorithme de réorientation</li>
                <li>Capture dynamique à spectre variable</li>
                <li>Décompression par superposition</li>
                <li>Capture en flux continue</li>
                <li>Optimisation des performances</li>
                <li>Optimisation des ressources</li>
            </ul>
        </div>
        <div class="summary justify-content ">
            <p>Comme dit précédemment, je ne peux pas fournir de preuve physique de ce projet, appartenant à mon ancienne entreprise.</p>
            <p>Néanmoins, je peux conclure sur le fait que ce projet fut ma première expérience en termes de projet professionnel avec des exigences. J'ai fait face à un algorithme complexe face aux exigences imposées. Enfin, j'ai eu un réel aperçu de la résolution de bugs et de l'optimisation de performances.</p>
        </div>
      </div>
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
    .container {
        padding: 5em 1em 0 1em;
    }

    .project-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 2em;
        margin-bottom: 4em;
        padding-bottom: 2em;
    }

    .project-preview {
        width: auto;
        height: 400px;
        border-radius: 20px;
        border-color: var(--button-color);
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .list {
        list-style-type: none;
        padding-right: 3em;
        margin: 2em;
        align-items: center;
        border-right: 1px solid var(--button-color);
        cursor: default;
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
       justify-content: center;
       text-align: center;
       margin: 2em;
       font-size: 2em;
    }
    
    .summary-title::before,
    .summary-title::after {
        content: "";
        display: inline-block;
        width: 100px;
        height: 2px;
        background-color: var(--text-color);
        vertical-align: middle;
        margin: 0 10px;
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2em;
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

    .bordered-test{
        border: 1px solid red;
    }

    .back-link {
        margin: 2em 1em;
        list-style: none;
        text-decoration: none;
    }

    .back-link a:visited,
    .back-link a:active,
    .back-link a {
        color: inherit;
        text-decoration: none;
    }

    .back-link::before {
        content: "← ";
    }

    .subtitle-in-content {
        text-align: center;
        margin-bottom: 1em;
        font-size: 1.5em;
    }
</style>