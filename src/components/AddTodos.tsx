"use client"
import React, { FormEventHandler, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { Plus } from 'lucide-react'
import { postTodo } from '@/utils/apiCalling'

const AddTodos = ({setTodu,todos}:any) => {
    const [newTodo, setNewTodo] = useState("")
   
    const handleTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await postTodo( 
            {
                note: {
                    task: newTodo,
                    is_completed: false
                }
            }
        )

        setNewTodo("")
        setTodu((prevTodos: any) => [
            ...prevTodos,
            {
              task: newTodo,
              is_completed: false
            }
          ]);
    
    }
 

    return (
        <div className='flex flex-col md:flex-grow  bg-[#B380DA] border border-black  rounded-sm py-1.5 justify-center items-stretch'>
            <form onSubmit={handleTodo}>
                <div className='flex flex-col md:flex-row md:justify-between items-center'>
                    <div >
                        <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className='bg-red-300 ml-1.5 md:h-12 w-96  md:w-[483px]  ' type='text' placeholder='Enter note here' />
                    </div>

                    <div  className='py-2'>
                        <Button type="submit" size={"sm"} className=' mx-2 h-10 w-32'>
                            Add Note <Plus size={18} />
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddTodos