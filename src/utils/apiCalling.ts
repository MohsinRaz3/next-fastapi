import { INotes } from "./todoTypes";

export const getData = async () => {
    const res = await fetch("https://fastapi-notesapp.onrender.com/notes", {cache : "no-store"})
    
    const result = await res.json()
 //   console.log(result);
    
    return result
}

export const postTodo = async (todo:any):Promise<any> => {
    const res = await fetch("https://fastapi-notesapp.onrender.com/notes", {
        method: 'POST',
        headers : { 'Content-Type' : 'application/json'},
        body: JSON.stringify(todo)
    })
    const newUpdatedTodo = res.json()
    return newUpdatedTodo

}

export const updateTodo = async() =>{
    
}


export const deleteTodo = async (todo_id: Number):Promise<void> => {
    const res = await fetch(`https://fastapi-notesapp.onrender.com/notes/?note_id=${todo_id}`,{ 
    method: 'DELETE',
})
return 
}