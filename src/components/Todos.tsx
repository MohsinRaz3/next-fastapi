'use client'
import { deleteTodo, getData, postTodo } from '@/utils/apiCalling'
import React, { useEffect, useState } from 'react'
import AddTodos from './AddTodos'
import { INotes } from '@/utils/todoTypes'
import { Check, FilePenLine, Trash, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Checkbox } from "@/components/ui/checkbox"


const Todos = () => {
  const [todo, setTodos] = useState<INotes[]>()
  const router = useRouter()
  useEffect(() => {
    const getData1 = async ():Promise<INotes[]> =>  {
      const todos = await getData()
    //  console.log(todos);
      setTodos(todos)
      return todos
    }
    getData1()
router.refresh()
      
  }, [])

  const deleteHandler = async(id: number) => {
    await deleteTodo(id)
  }

  const handleUpdateCheck = async(isComplete:any)=>{
    await postTodo(isComplete)
  }

  return (
    <>  
        <AddTodos />
        <div className='h-[80vh] overflow-y-scroll text-black px-24 py-12 rounded-br-2xl rounded-b-2xl justify-center items-center border-black border-[1px] bg-[#60C0BF]'>
    <hr className="w-96 h-0.5 mx-auto bg-gray-900 border-0 rounded my-3 dark:bg-gray-900" />
    <div className="scrollbar-container">
      <div className="scrollbar-content">
        {todo?.map((item: any,index:number) =>
          (
            <div className="flex bg-[#B380DA] my-4 p-2 rounded-lg gap-x-5 mx-2 justify-between" key={item.id}>
             <div className='flex items-center justify-center gap-x-2 '>
             <p className='bg-[#FCA5A5] border flex items-center justify-center border-[#FCA5A5] w-6 h-6 rounded-full'>{index +1}</p>
              <div>{item.task}</div>
             </div>

             <div className='flex justify-evenly items-center gap-x-2'>
             <div className='pr-2 my-1'>{item.is_completed === true ? <X/> :  <Checkbox onClick={()=>{handleUpdateCheck}} className='pointer'/>} </div>
              <div><FilePenLine cursor={"Pointer"}/></div>
              <div ><Trash cursor={"Pointer"} onClick={()=> deleteHandler(item.id)} /></div>
             </div>

            </div>
          )
        )}
      </div>
    </div>
  </div>

    </>
  
  )
}

export default Todos