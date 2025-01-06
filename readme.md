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
//