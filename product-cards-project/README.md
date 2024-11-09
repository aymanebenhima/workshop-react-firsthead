# Product Cards Project in React

### Objectives:
1. Use styling (including CSS and inline styles).
2. Implement React components.
3. Use a layout library (example: Bootstrap).
4. Incorporate inline styles.

### Project Overview:
In this workshop, we will create a list of product cards using React. The project consists of:
- `Item` Component
- `ItemList` Component
- `Products` array of objects (each with an image, name, and price).
- Each product will be displayed using a `Cart` component.
- `Cart` will have default props if none are provided.
- Prop type checking will be added using `prop-types`.
- An `alertProduct` function will be passed as a prop to each `Cart` component, and clicking a card will alert the product name.

### Prerequisites:
- Basic knowledge of React.
- Node.js installed.
- Familiarity with Bootstrap.

### Setup Instructions:

1. Clone the repository:
   ```bash
   git clone https://github.com/aymanebenhima/workshop-react-firsthead.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```

### Implementation Steps:

1. Create an array of product objects.
2. Implement `Item` and `ItemList` components.
3. Use `Cart` component to display individual product details.
4. Use `propTypes` for type-checking props and set default props for `Cart`.
5. Implement inline styling and Bootstrap for layout.
6. Add an `alertProduct` function to each `Cart` component and pass it as a prop.