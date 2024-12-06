# Redux en React

> Redux est une bibliothèque de gestion de flux de données pour React. Elle permet de partager des données entre composants en utilisant un flux central (store).

## Install Redux

- Install Redux with `npm install @reduxjs/toolkit react-redux`

## Ceoncepts de base utilisés dans Redux

### Store:
Le store Redux est conteneur global pour l'état de l'application
- C'est le coeur de Redux où l'état est contralisé
- Le **Store** est configuré via **configureStore()** de Redux Toolkit

Exemple:
```js
const store = configureStore({
    reducer: {
        tasks: tasksReducer, // Combine les reducers (ici, il n'y en a qu'un)
    }
})
```

Info:
- 'confiogureStore': simplifie la configuration et intègre automatiquement les outils de débogage comme Redux DevTools

---

### Actions:
Les actions sont des objets décrivant un événement dans l'application.
Chaque action a : 
 - Un type (exemple: `ADD_TASK`)
 - Une payload (ou bien les données transmises à l'état, comme titre exemple: letxte d'une task)

 Dans Redux Toolkit, les actions sont générées automatiquement par `createSlice()`.

 ```js
 export const { addTask, deleteTask, setFilter, toggleComplete } = tasksSlice.actions;
 ```

 **Quand et comment utiliser ?**
 - Une action est envoyée (dispatchée) pour indiquer au store du'un changement doit être effectué:

 ```js
 dispatch(addTask("New Task"))
 ```

 ---

### Reducers:

Les reducers définissent comment l'état est modifié en réponse à une action.
- Un rducer est une fonction pure qui reçoit l'état actuel et une action, puis retourne un nouvel état.

Dans Redux Toolkit, les reducers sont créés avec `createSlice()`, qui combine la logique des actions et des reducers,

```js
const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        list: [],
        filter: 'all'
    },
    reducers: {
        addTask: (state, action) => {
            state.list.push({
                id: Date.now(),
                text: action.payload,
                completed: false,
            })
        },
        toggleComplete: (state, action) => {
            const task = state.list.find((task) => task.id === action.payload)
            if (task) task.completed = !task.completed
        },
        deleteTask: (state, action) => {
            state.list = state.list.filter((task) => task.id !== action.payload)
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }
})
```

Info:
- Les reducers dans `createSlice()` modifient directement l'état grâce à Immer.js qui gère `l'immuabilité automatique`
- Inital State est défini pour garantir une structure cohérente.

---

### Selectors: 
Les selectors sont des fonctions qui permettent de lire des morceaux d'état depuis le store.
 - On doit utilisé des hooks comme `useSelector()` pour accéder aux données du store dans les composants React.

```js
const tasks = useSelector((state) => state.tasks.list)
const filter = useSelector((state) => state.tasks.filter)
```
**Quand et comment les utiliser?**
- Les selectors isolent la logique d'accés à state, ce qui rend le code plus réutilisable et testable.

--- 

### Dispatcher

Les dispatch est utilisé pour envoyer des actions au store
- (Cela déclenche les reducers correspondants pour mettre à jour le state).

```js
const dispatch = useDispatch()
dispatch(addTask("New Task"))
```

---

### Redux Toolkit:
Redux Toolkit simplifie les concepts classiques de Redux:
- createSlice(): combine les actions et reducers en un endroit.
- configureStore() configure automatiquement le store et les outils.
- Il réduit le boilerplate (code répétitif) par rapport à Redux Classique.