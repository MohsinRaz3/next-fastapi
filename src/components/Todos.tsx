import { getData } from '@/utils/apiCalling'
import React, { useEffect, useState } from 'react'

const Todos = () => {
    const [todo, setTodos] = useState<any>()

    useEffect(() => {
       const getData1 = async()=>{
        const todos = await getData()
       console.log(todos);
       setTodos(todos)

       }
       getData1()
    }, [])

    return (
        <div className='h-[80vh] overflow-hidden  text-black px-24 py-12 rounded-xl justify-center items-center border-black border-[1px]  bg-[#60C0BF]'>
            <div className='flex justify-between'>
                <div>
                    Add todos here
                </div>
                <div>
                    Add button
                </div>
            </div>
            <hr className=" w-96 h-0.5 mx-auto  bg-gray-900 border-0 rounded my-3 dark:bg-gray-900"/>                
            <div className="scrollbar-container">
      <div className="scrollbar-content">
        {todo?.map((item: any) =>
          (
            <div className="flex  bg-[#B380DA] my-4 p-2 rounded-lg gap-x-5 mx-2 justify-between" key={item.id}>
              <div>{item.id}</div>
              <div>{item.name}</div>
              <div>{item.secret_name}</div>
              <div>{item.age}</div>
            </div>
          )
        )}
      </div>
    </div>

        </div>
    )
}

export default Todos