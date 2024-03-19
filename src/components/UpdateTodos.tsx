"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { FilePenLine } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Plus } from 'lucide-react'
import { FormEventHandler, useState } from "react"
import { updateTodo } from "@/utils/apiCalling"



export function AlertDialogDemo({ editTodo, setTodu }: any) {

  const [todoId, setTodoId] = useState(editTodo.id)
  const [todoToEdit, setTodoToEdit] = useState(editTodo.task)
  const [checkboxValue, setCheckboxValue] = useState(editTodo.is_completed)
  const handleCheckbox = () => {
    setCheckboxValue(!editTodo.is_completed)
  }

  // console.log("id ", todoId);
  // console.log("task ", todoToEdit.task);
   console.log("is completed ", checkboxValue);



  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await updateTodo(
      {
        note: {
          id: todoId,
          task: todoToEdit,
          is_completed: checkboxValue
        }
      }
    )

    setTodu((prevTodos: any) => [
      ...prevTodos,
      {
        id: todoId,
        task: todoToEdit,
        is_completed: checkboxValue
      }
    ]);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="bg-[#B380DA]">
        <Button variant={"link"} className="hover:bg-none"><FilePenLine cursor={"Pointer"} className="hover:bg-none text-blue-800" /></Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
      <AlertDialogFooter>
          <AlertDialogAction>
            X
          </AlertDialogAction>
        </AlertDialogFooter>
        <AlertDialogHeader>
          <AlertDialogTitle className="pl-2 px-7" >Update Note</AlertDialogTitle>
          <AlertDialogDescription>
            <form onSubmit={handleSubmitEditTodo}>


              {/* INPUTS UPDATE FUNCTION STARTS HERE  */}
              <div className='flex flex-col flex-wrap md:flex-row gap-3 justify-center mx-auto px-6 items-center'>
                <div >
                  <Input value={todoToEdit} onChange={(e) => setTodoToEdit(e.target.value)} type='text' className=' ml-1.5 md:h-8 w-48  md:w-[283px]' placeholder='Enter note here' />
                </div>

                {/* CHECKBOX TRUE/FALSE HERE */}
                <div className='py-2 flex gap-2'>
                  <input type="checkbox" value={checkboxValue} onChange={(e) => handleCheckbox} className=" bg-blue-500 default:ring-2 w-6 h-6 items-center text-center" />
                  <h6>Completed </h6>
                  </div>
             
             <div className="flex">
               {/* UPDATE ONCLICK HERE BUTTON HERE */}
               <Button type="submit" variant={"link"} className="px-2 py-2 bg-green-600 text-white items-end"
                size={"sm"} >
                Update Note <Plus size={18} />
              </Button>
             </div>
              </div>

                  
            </form>

          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
        </AlertDialogFooter>
      </AlertDialogContent>

    </AlertDialog>
  )
}
