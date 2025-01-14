# Notes



### CRA -> Create React App
        It is a Bundler having all things needed to create react app but it is very bulky.
        it had so many things which we may not used in project and it had testing 
        dependencies installed.

### Vite -> vite@latest
        It is a modern build tool (Bundler) that is faster and more flexible than Create React App.   
        It is a modern build tool and it is not as bulky as Create React App.   
        It has built-in support for JSX, TypeScript, CSS Modules, CSS-in-JS, and more.
 
## Points to remember
     - Inside js or jsx file function name should start with capital letter.
     - In vite main js file is linked in index.html document directly
     - In CRA have some "react-scripts" dependency that will link main js file to index.html file.

## Virtual DOM , Reconcilation and Fiber-Architecture
 [Click Here for Notes](https://github.com/acdlite/react-fiber-architecture)


 ## Props
 ```javascript	
 const App = () => {
    return (
        <div>
            <Greet name="John" age = 23/> // props = {name: 'John', age:23}
            <Greet name="Jane"  />
        </div>
    );
};




 const Greet = ({ name ,age=20 }) => { //destructured or we can receive as props (object) or any name given in param 
        //age = 20 is the default value if we dont pas while calling
    return (
        <div>
            Hello, {name}!
        </div>
    );
};       


```

# React Hooks
## useState()
        state is nothing but a data it is used in our UI at various parts and when we update the state,
        In Our UI will be updated accordingly at all the places immediately.
        This is the main advantage of the react that it will react faster on state changes

        It is a Hook in react which is used to manage state in functional component. 
        useState() returns a pair of values: the current state and a function to update it in the form 
        of array and we will destrucure it and use it.

```javascript
const [state, setState] = useState(initialState)

```

## useEffect()
        useEffect hook is used to perform side effects in functional components.
        It is called after every render.

```javascript	
 useEffect(Cb,[dependency]);

 Cb will be executed when component is mounted and also when dependencies are changed


 ```

 ## useCallback()
       useCallback hook is used for optmizations and caching,
       useCallback lets you cache a function definition between re-renders.

       Caching a function in React refers to memoizing a function so that it is not 
       re-created unnecessarily during re-renders of a component. This can improve 
       performance by preventing redundant computations or avoiding the re-creation of 
       function instances unless their dependencies change.

```javascript	
const myFun =  usecallback(Cb,[dependency]);

 Cb will be executed when myFun is called and also when dependencies are changed

 ```

 ## useRef()

        useRef can be used to directly reference a DOM element in a React functional component.
```javascript
const myRef = useRef(null)

null is the initial value of reference
```
## Link vs NavLink
    NavLink will have isActive attribute.
    Link is same as anchor tag but the whole page is lot reloading.

