import { INotes } from "./todoTypes";


export const getData = async () => {
    const res = await fetch("https://fastapi-sqlmodel-1.onrender.com/notes", {cache : "no-store"})
    const result = await res.json()
    console.log(result);
    
    return result
}

export const postTodo = async (todo:INotes):Promise<any> => {
    const res = await fetch("https://fastapi-sqlmodel-1.onrender.com/notes", {
        method: 'POST',
        headers : { 'Content-Type' : 'application/json'},
        body: JSON.stringify(todo)
    })

    const newUpdatedTodo = res.json()
    return newUpdatedTodo

}