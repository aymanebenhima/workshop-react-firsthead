# Todo App Project in React

## Objectives:
- Create a class-based component.
- Manage and manipulate state.
- Work with lifecycle methods in React.
- Build a functional To-Do application using stateful components.

## Project Overview:
In this workshop, we will build a To-Do application using React. The project structure consists of:

- **Todo Component**  
  Handles the rendering of individual to-do items.
  
- **TodoList Component**  
  Receives and displays a list of to-do items passed down as props.
  
- **AddTask Component**  
  Manages adding new tasks and updates the state accordingly in the parent component.

The state will be managed in `App.js` and passed down to child components as needed.

## Prerequisites:
- Basic understanding of React.
- Familiarity with JavaScript ES6.
- Node.js installed.

## Setup Instructions:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/aymanebenhima/workshop-react-firsthead.git
    ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Start the application:**
    ```bash
    npm start
    ```

## Implementation Steps:

1. **Create the stateful `App.js` component**  
   - Manage the state for the list of to-do items.
   - Pass the state as props to `TodoList` and `AddTask` components.

2. **Create the `Todo` component**  
   - Display individual to-do items.
   - Handle any actions related to individual items.

3. **Create the `TodoList` component**  
   - Render a list of `Todo` components using data passed down as props.

4. **Create the `AddTask` component**  
   - Include an input form to add new tasks.
   - Update the state in `App.js` by passing back data via function props.

5. **State Management and Lifecycle Methods**  
   - Use React lifecycle methods (such as `componentDidMount` or `componentDidUpdate` if needed).
   - Ensure proper state management and updates.

6. **Styling the Application**  
   - Use CSS and inline styles for custom styling.
   - Optionally, use a library like Bootstrap for layout and styling enhancements.

## Usage:
- Add tasks using the input form in the `AddTask` component.
- View tasks in the `TodoList` component.
- Interact with individual tasks in the `Todo` component.

## Best Practices Followed:
- Class-based components used for state management.
- Prop drilling and passing functions as props to manage data flow.
- Clean, readable code with comments explaining key logic.
