import { INotes } from "./todoTypes";

export const getData = async () => {
    
    
    try {
        const res = await fetch("https://fastapi-notesapp.onrender.com/notes", {cache: "no-cache"})
        const result = await res.json()

        if(result.detail === "notes not found"){
            return "NotFound"
        }

        return result
    } catch (error) {
        return "Errors"
    }




   

}

export const postTodo = async (todo:any):Promise<any> => {
   // console.log("gajar ka ha;wla",todo);
    
    const res = await fetch("https://fastapi-notesapp.onrender.com/notes/", {
        method: 'POST',
        headers : { 'Content-Type' : 'application/json'},
        body: JSON.stringify({task : todo.note.task})
    })
    const newUpdatedTodo = res.json()
    return newUpdatedTodo

}

export const updateTodo = async() =>{
    
}


export const deleteTodo = async (todo_id: Number):Promise<void> => {
    const res = await fetch(`https://fastapi-notesapp.onrender.com/notes/${todo_id}`,{ 
    method: 'DELETE',
})
return 
}