### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a javascript library used to build user interfaces, such as single-page apps.
- What is Babel?
    babel is a javascript complier that turns javascript code to different versions such as ES6+ to ES5.
- What is JSX?
    JSX is a syntax extension for javascript used in React.
- How is a Component created in React?
    Component can be created using a function or rendering the component in a class.
- What are some difference between state and props?
    states are used in components and are more dynamic because it can be updated using useState. props are passed from the parent component and cannot be modified.
- What does "downward data flow" refer to in React?
    downward data flow means the flow of data from parent to children components.
- What is a controlled component?
    controlled component such as input or textarea are form elements where the value is controlled by react state.
- What is an uncontrolled component?
    uncontrolled components manage its own state internally.
- What is the purpose of the `key` prop when rendering a list of components?
    key prop hels react identify which item in the list have been modified.
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    there can be issues if the array is sorted, added, or removed.
- Describe useEffect.  What use cases is it used for in React components?
    useEffect is a hook that lets you add side effects to components. It is commonly used for fetching data through api and updating the DOM. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    useRef creates mutable object that 

- When would you use a ref? When wouldn't you use one?
    I would use useRef to access DOM elements or store mutable values. I wouldn't use it for state that triggers any rerenders or updates.
- What is a custom hook in React? When would you want to write one?
custom hook is a reusable function that allows you to share logiv between components. you would use custom hooks to avoid repeating the same code such as repetitive side effects.