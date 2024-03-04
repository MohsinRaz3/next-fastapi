"use client"
import React, { FormEventHandler, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { Plus } from 'lucide-react'
import { postTodo } from '@/utils/apiCalling'
import { useRouter } from 'next/navigation'

const AddTodos = () => {
    const [newTodo, setNewTodo] = useState("")
    const router = useRouter()

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
        router.refresh()

    
    }
 

    return (
        <div>
            <form onSubmit={handleTodo}>
                <div className='flex justify-between'>
                    <div >
                        <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className='bg-red-300 ' type='text' placeholder='Enter note here' />
                    </div>

                    <div className='pt-1'>
                        <Button type="submit" size={"sm"} className='gap-x-1  '>
                            Add Note <Plus size={18} />
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddTodos