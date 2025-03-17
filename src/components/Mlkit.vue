<template>
    <div class="container-project">
        <p class="back-link">
            <router-link to="/portfolio/">Retour</router-link>
        </p>
        <div class="project-header">
            <div>
                <h1>Projet : <span class="icon">Interpréteur de texte</span></h1>
                <p>Lecture optique et isolation de termes spécifiques via une <span class='icon'>image</span>.</p>
            </div>
            <img class="project-preview" src="../assets/mlkitPreview.png" alt="Preview of the project">
        </div>
        <div class="intro-project">
            <div class="intro-pre-content">
                <p>J'ai travaillé sur un projet de reconnaissance de caractères. À travers l'utilisation de deux API, l'objectif était de traiter le contenu textuel de documents scannés. Dans un premier temps, j'ai dû rechercher les API d'OCR (<span class="icon">O</span>ptical <span class="icon">C</span>haracter <span class="icon">R</span>ecognition) les plus performantes, fiables, maintenables, et enfin adaptables sur les deux plateformes (iOS et Android).</p>
            </div>
            <div class="intro-post-content">
                <p>Une fois mes recherches effectuées, j'ai ajusté à l'aide de l'API, la réception des caractères sur l'image. Puis, j'ai implémenté différentes méthodes de traitement pour améliorer la qualité de la reconnaissance, telles qu'un score de confiance ou encore un score d'isolement des mots. Enfin, vient le développement d'un algorithme de reconnaissance des erreurs, pour ne conserver qu'une partie des éléments récupérés.</p>
            </div>
        </div>
        <div>
            <h2 class="summary-title">Structure</h2>
            <div class="structure-content">
                <p class="subtitle-in-content">Le module a été implémenté sur mobile, en langage natif et donc sans aucun framework de développement multi-plateforme.</p>
                <p>Le module a été conçu en <span class="javaIcon">Java</span> (<span class="androidIcon">Android</span>) et en <span class="objectivCicon">Objective-C</span> (<span class="iosIcon">iOS</span>).</p>
                <p>Pour le développement de l'algorithme, j'ai utilisé deux API différentes, <span class="mlkitIcon">MLKit</span> sur <span class="androidIcon">Android</span>, et <span class="iosIcon">Apple Vision Kit</span> pour le module <span class="iosIcon">iOS</span> car <span class="mlkitIcon">MLKit</span> est une exclusivité de Google.</p>
                <br>
                <p>Pour décrire le fonctionnement du module, on utilise les deux API pour récupérer le texte sur la photo reçue.</p>
                <p>Une fois le texte récupéré, il est découpé dans une architecture avec le schéma d'objet suivant :</p>
                <p class="architectureListe">Page -> Paragraphe -> Ligne -> Mot</p>
                <p>Chaque objet contient un ensemble des sous-objets. De plus, chaque objet se voit attribuer un score de confiance.</p>
                <p>L'objectif étant d'isoler certains mots, on utilise un algorithme qui compare chaque mot avec un score de confiance suffisant, pour le comparer à un ensemble de mots à potentiellement retrouver.</p>
                <br>
                <p>S'il y a correspondances, on crée un objet qui associe les deux matchs.</p>
                <br>
                <p>Enfin, une fois cette liste récupérée, on analyse si chaque objet est valide en fonction de son contexte de capture. C'est-à-dire, si les mots autour de celui-ci permettent d'identifier quel est le type d'information que donne ce terme (par exemple un nom, une adresse, etc.).</p>
            </div>
        </div>

      <h2 class="summary-title">Fonctionnalités</h2>
      <div class="asided-list-content">
        <div class="list-container">
            <p><span class='sub-title-prelist'>Le projet se résume par les points suivants :</span></p>
            <ul class="list">
                <li>Recherche d'API les plus performantes</li>
                <li>Développement de l'UI</li>
                <li>Création de l'algorithme principal</li>
                <li>Optimisation de l'algorithme</li>
                <li>Amélioration des performances</li>
                <li>Processus de détection d'erreurs</li>
                <li>Instauration de contextes linguistiques</li>
                <li>Développement multi-plateforme</li>
            </ul>
        </div>

        <div class="summary justify-content ">
            <p>Ce projet a été une première en termes de recherche d'API et de développement d'algorithmes de reconnaissance. J'ai pu découvrir les différentes méthodes de traitement de texte et de la gestion des contextes.</p>
            <p>Enfin, j'ai réellement pu être autonome sur ce projet en ce qui concerne la recherche de solutions et la mise en place de ces dernières.</p>
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