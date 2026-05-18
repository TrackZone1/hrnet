# Comparatif Lighthouse - HRnet (jQuery vs React)

J'ai fait des tests avec Lighthouse pour comparer l'ancienne application en jQuery et la nouvelle version en React (compilée pour la production).

## Résultats des audits (Desktop)

| Catégorie | Version jQuery | Version React (Build) | Différence / Remarques |
| :--- | :---: | :---: | :--- |
| **Performance** | 100 / 100 | 100 / 100 | Égalité (chargement instantané sur ordinateur de bureau) |
| **Accessibilité** | 89 / 100 | **90 / 100** | **+1%** (meilleure sémantique HTML) |
| **Bonnes Pratiques** | 73 / 100 | **100 / 100** | **+27%** (plus de vieux scripts ou de failles de sécurité) |
| **SEO** | 90 / 100 | **100 / 100** | **+10%** (ajout des balises meta description et titre propre) |

## Explications des résultats

1. **Bonnes Pratiques (100% sur React vs 73% sur jQuery)** : 
C'est le plus gros changement. L'ancienne version utilisait de vieux plugins jQuery chargés de manière synchrone qui bloquaient la page et généraient des avertissements de sécurité et de dépréciation dans la console. Sur la version React, le code est propre, sans failles, minifié et optimisé avec Vite.

2. **SEO (100% sur React vs 90% sur jQuery)** :
L'ancienne version n'avait pas de métadonnées sémantiques ou de méta-description pour les moteurs de recherche. J'ai rajouté une description professionnelle et un titre propre dans le fichier `index.html` de la version React, ce qui permet d'atteindre le score maximal.

3. **Performance (100% partout)** :
Sur ordinateur de bureau (Desktop), les deux applications s'affichent instantanément. C'est l'idéal pour l'expérience des employés.

## Rapports d'audits PDF

Les rapports d'audits détaillés au format PDF sont disponibles directement dans le dossier :
- Ancienne version (jQuery) : [lighthouse-jquery.pdf](./lighthouse-jquery.pdf)
- Nouvelle version (React) : [lighthouse-react.pdf](./lighthouse-react.pdf)
