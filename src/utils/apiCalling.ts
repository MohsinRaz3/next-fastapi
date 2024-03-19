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

export const updateTodo = async (todo: any): Promise<any> => {
    console.log("heresssssssss",todo);
    
    const res = await fetch(`https://fastapi-notesapp.onrender.com/notes/${todo.note.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id:todo.note.id, task: todo.note.task, is_completed: todo.note.is_completed == !todo.note.is_completed })
    });
    const updatedTodo = await res.json(); // Corrected line
    return updatedTodo;
}



export const deleteTodo = async (todo_id: Number):Promise<void> => {
    const res = await fetch(`https://fastapi-notesapp.onrender.com/notes/${todo_id}`,{ 
    method: 'DELETE',
})
return 
}