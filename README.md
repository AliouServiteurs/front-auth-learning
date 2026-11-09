# Front Auth Learning

Petit projet d'apprentissage du frontend : une page de connexion responsive construite avec HTML, CSS et JavaScript natifs.

> **Important :** ce projet est une interface de démonstration. Le formulaire ne réalise pas de connexion et aucune donnée n'est envoyée ni vérifiée.

## Fonctionnalités

- Mise en page responsive avec une navigation adaptée aux petits écrans.
- Menu mobile interactif, avec état accessible exposé via `aria-expanded` et `aria-label`.
- Champs e-mail et mot de passe avec libellés, attributs d'autocomplétion et validation HTML native.
- Styles de focus clavier pour les principaux contrôles.

## Technologies

- HTML5
- CSS3
- JavaScript natif

Aucune dépendance ni étape de compilation n'est nécessaire.

## Lancer le projet

Ouvrez `index.html` dans un navigateur. Vous pouvez aussi servir le dossier avec un serveur HTTP local, par exemple avec l'extension **Live Server** de Visual Studio Code.

## Structure

```text
.
├── index.html   # Structure de la page et formulaire de démonstration
├── styles.css   # Mise en page, styles et adaptation mobile
├── script.js    # Ouverture et fermeture du menu mobile
└── README.md    # Documentation du projet
```

## Limites et prochaines étapes

- Les liens de navigation et de création de compte sont des exemples et ne mènent pas à des pages dédiées.
- Le bouton de connexion n'est pas relié à un service d'authentification.
- Une authentification réelle nécessite notamment un backend sécurisé, une validation côté serveur et une gestion sûre des sessions. Ne saisissez pas de vrais identifiants dans cette démonstration.
