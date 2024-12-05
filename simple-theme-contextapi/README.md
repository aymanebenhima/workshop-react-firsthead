# Context API en React

> Context API es un mecanismo de React para compartir información entre componentes sin tener que pasar propiedades a través de la cadena de componentes

## Concept du Context API

## Créer un context

- On crée un 'context' en un fichier 'context.js' avec **React.createContext()**
- Génèrer un objet avec deux composants : **Provider** et **Consumer**.

 - **Provider** : Enveloppe les composants qui doivent avoir accès aux données.
 - **Consumer** : Enveloppe les composants qui doivent utiliser les données. (bien que souvent remplacé par le hook **useContext()**)

## Provider

- Il contient la valeur à partager dans l'arbre des composants.
- Tous les composants enfants peuvent accéder à cette valeur.

## useContext Hook

- Il simplifie l'accès au contexte dans les composants fonctionnels.
- Le hook **useContext()** permet de lire la valeur du contexte.
- Il peut seulement lire la valeur du contexte, il ne peut pas la modifier.