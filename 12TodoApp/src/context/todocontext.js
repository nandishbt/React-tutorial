import { createContext, useContext } from "react";


export const todoContext = createContext({
    todos:[
        {
            id:1,
            title:'Learn React',
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    editTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{},
  
})

export const  TodoProvider  = todoContext.Provider


export const useTodo = () =>{
    return useContext(todoContext)
}