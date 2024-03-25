'use client'
import { deleteTodo, getData, postTodo } from '@/utils/apiCalling'
import React, { useEffect, useState } from 'react'
import AddTodos from './AddTodos'
import { INotes } from '@/utils/todoTypes'
import { Check, Divide, FilePenLine, Trash, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Checkbox } from "@/components/ui/checkbox"
import { AlertDialogDemo } from './UpdateTodos'


const Todos = () => {
  const [todo, setTodos] = useState<INotes[]>()
  
  
  
  useEffect(() => {
    const getData1 = async () =>  {
      const todos = await getData();      
      setTodos(prevTodos => {
        // Only update if the fetched todos are different from the current todos
        if (JSON.stringify(prevTodos) !== JSON.stringify(todos)) {
          return todos;
        }
        return prevTodos;
      });
    };
    getData1();
  }, [todo]);
  

  const deleteHandler = async (id: number) => {
    try {
      await deleteTodo(id);
      // Filter out the deleted todo from the current state
      setTodos(prevTodos => prevTodos?.filter(todo  => todo?.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };
  


  return (
    <>  
        <AddTodos setTodu={setTodos} />
        <div className='h-[80vh] overflow-y-scroll text-black px-24 py-12 rounded-br-2xl rounded-b-2xl justify-center items-center border-black border-[1px] bg-[#60C0BF]'>
    <div className="scrollbar-container">
      <div className="scrollbar-content">
        {todo?.map((item: any,index:number) =>
          (
           <div className="flex bg-[#B380DA] my-4 p-2 rounded-lg gap-x-5 mx-2 justify-between" key={item.id}>
             <div className='flex items-center justify-center gap-x-2 '>
             <p  className='bg-[#FCA5A5] border flex items-center justify-center border-[#FCA5A5] w-6 h-6 rounded-full'>{index +1}</p>
              <div>{item.task}</div>
             </div>

             <div className='flex justify-evenly items-center gap-x-2'>
             <div className='pr-2 my-1'>{item.is_completed === false ? <X className='text-red-800'/> : <Check className='text-green-700'/> } </div>
              <div> <AlertDialogDemo setTodu={setTodos} editTodo={item}/></div>
              <div ><Trash className='text-red-800' cursor={"Pointer"} onClick={()=> deleteHandler(item.id)} /></div>
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