

export const getData = async () => {
    const res = await fetch("https://fastapi-sqlmodel.onrender.com/heroes")
    const result = await res.json()
    return result
}