# What is Hook in react ?

> Hook are the special function which allow to react or other use state function component to render the element
> Hook allow react features or lifecycle method
> Hook resolve the problem to don't write the class components
> it introduced in version 16.8
> in other words hook are the function which make functional components work like class

## Most commanly used 'Hook' ?

- useState
- useEffect
- useRef
- UseCallback
- useContex
- useMemo
- useReducer
- useLayoutEffect
- custom hook

## Note point :-

> Hook Rules

- There are 3 rules for hooks:
  - Hooks can only be called inside React function components.
  - Hooks can only be called at the top level of a component.
  - Hooks cannot be conditional
  - Hooks will not work in React class components.

## UseState hook ?

- useState is a react hook , which help to create state varible which help to track in components & update the user interface when sate changes

- The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

<!-- check the example given file path D:\4acivers_work file\react work\youtube\React pratice\pratice-app\src\App.js -->

## UseEffect Hook ?

- UseEffect hook alow to side effect to a components like , fetch api data , DOM updation
  and more

- UseEffect hook accept two argument which passes through { function, dependecy }

> note point :-

- useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.

- This is not what we want. There are several ways to control when side effects run.

- We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.

## useRef hook ?

- UseRef hook is used for access the dom element
- The UseRef hook is alow to persit values the renders
- it can be used to store mutable value that does not couse a re render when updated
