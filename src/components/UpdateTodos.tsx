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
  import {FilePenLine } from 'lucide-react'
  import { Input } from "@/components/ui/input"
  import { Plus } from 'lucide-react'


  
  export function AlertDialogDemo() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild className="bg-[#B380DA]">
          <Button className="hover:bg-none"><FilePenLine cursor={"Pointer"} className="hover:bg-none text-black" /></Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
        <AlertDialogCancel className="flex items-center  justify-start   w-8 h-8 p-2 text-xl mb-3">X</AlertDialogCancel>

          <AlertDialogHeader>
            <AlertDialogTitle className="pl-2 py-2" >Update Note</AlertDialogTitle>
            <AlertDialogDescription>
                <div className='flex flex-col md:flex-row md:justify-between items-center'>
                    <div >
                        <Input className=' ml-1.5 md:h-8 w-48  md:w-[283px]  ' type='text' placeholder='Enter note here' />
                    </div>

                    <div className='py-2'>
                       checkbox
                    </div>

                    </div>

            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>
            <Button type="submit" 
            size={"sm"} >
            Update Note <Plus size={18} />
            </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  