import { deleteTodo, getData, postTodo } from '@/utils/apiCalling';
import React, { useEffect, useState } from 'react';
import AddTodos from './AddTodos';
import { INotes } from '@/utils/todoTypes';
import { Check, FilePenLine, Trash, X } from 'lucide-react';

const Todos = () => {
  const [todo, setTodos] = useState<INotes[]>([]);
  const [isLoadingMap, setIsLoadingMap] = useState<{ [id: number]: boolean }>({});

  useEffect(() => {
    const fetchData = async () => {
      const todos = await getData();
      setTodos(todos);
    };
    fetchData();
  }, [todo]);

  const deleteHandler = async (id: number) => {
    try {
      setIsLoadingMap(prevLoadingMap => ({ ...prevLoadingMap, [id]: true }));
      await deleteTodo(id);
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    } finally {
      setIsLoadingMap(prevLoadingMap => ({ ...prevLoadingMap, [id]: false }));
    }
  };

  return (
    <>
      <AddTodos setTodu={setTodos} todos={todo} />
      <div className='h-[80vh] overflow-y-scroll text-black px-24 py-12 rounded-br-2xl rounded-b-2xl justify-center items-center border-black border-[1px] bg-[#60C0BF]'>
        <hr className="w-96 h-0.5 mx-auto bg-gray-900 border-0 rounded my-3 dark:bg-gray-900" />
        <div className="scrollbar-container">
          <div className="scrollbar-content">
            {todo.length === 0 ? "No not found": todo.map((item, index) => (
              <div className="flex bg-[#B380DA] my-4 p-2 rounded-lg gap-x-5 mx-2 justify-between" key={item.id}>
                <div className='flex items-center justify-center gap-x-2'>
                  <p className='bg-[#FCA5A5] border flex items-center justify-center border-[#FCA5A5] w-6 h-6 rounded-full'>{index+1}</p>
                  <div>{item.task}</div>
                </div>
                <div className='flex justify-evenly items-center gap-x-2'>
                  <div className='pr-2 my-1'>{item.is_completed === false ? <X /> : <Check />}</div>
                  <div><FilePenLine cursor={"Pointer"} /></div>
                  <div>
                    {isLoadingMap[item.id] ? (
                      "loading.."
                    ) : (
                      <Trash cursor={"Pointer"} onClick={() => deleteHandler(item.id)} />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todos;
