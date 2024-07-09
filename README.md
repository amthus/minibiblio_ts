

# Minibiblio

Ce projet implémente une application de gestion de bibliothèque en TypeScript. Il permet d'ajouter, de rechercher, de mettre à jour et de supprimer des livres à partir d'une collection.
## Fonctionnalités

- **Ajout de livres**: Permet d'ajouter un nouveau livre à la bibliothèque.
- **Recherche de livres**: Permet de rechercher un livre par titre, année ou auteur.
- **Mise à jour de livres**: Permet de mettre à jour les détails d'un livre existant.
- **Suppression de livres**: Permet de supprimer un livre de la bibliothèque.

## Structure du Projet


**Dossiers :**

- **dist/** : Contient les fichiers JavaScript compilés à partir des fichiers TypeScript.
- **node_modules/** : Répertoire des modules Node.js installés.
- **src/** : Contient les fichiers sources TypeScript, notamment :
  - **index.ts** : Point d'entrée de l'application.
  - **Book.ts** : Définition de la classe `Book` pour représenter un livre.
  - **Library.ts** : Définition de la classe `Library` pour gérer la collection de livres.

**Fichier principal :**

- **index.html** : Fichier HTML servant de page principale pour l'exécution de l'application.

**Fichiers de configuration et de gestion des dépendances :**

- **package.json** : Liste des dépendances et scripts du projet.
- **package-lock.json** : Verrouillage des versions des dépendances installées.
- **tsconfig.json** : Configuration du compilateur TypeScript.
- **webpack.config.js** : Configuration du module bundler Webpack pour la compilation et le regroupement des fichiers JavaScript.
  
## Installation

Pour exécuter Minibiblio localement :

1. Clonez ce dépôt : `git clone https://github.com/votre-utilisateur/minibiblio.git`
2. Installez les dépendances : `npm install`
3. Compilez le TypeScript : `npm run build`
4. Lancez l'application : `npm start`

## Exemple d'Utilisation

Pour ajouter un livre à la bibliothèque :

```typescript
import { Library, Book } from './Library';

const library = new Library();

const newBook = new Book('Titre du Livre', '2023', 'Auteur');
library.addBook(newBook);

console.log('Livre ajouté avec succès !');
```

##Auteur
Réalisé par AMETEPE C.A Malthus
