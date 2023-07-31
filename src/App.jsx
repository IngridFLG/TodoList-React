import { useState } from "react";
import { Title } from "./components/Title";
import { Todo } from "./components/Todo";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {

    const [todo, setTodo] = useState(
        [
            {
                id: 1,
                title: 'Watch the next Marvel Movie',
                completed: false,
              },
              {
                id: 2,
                title: 'Record the next Video',
               completed: false,
              },
              {
                id: 3,
                title: 'Wash the dishes',
                completed: false,
              },
              {
                id: 4,
                title: 'Study 2 hours',
                completed: false,
              }
        ]
    )

  return (
    <div className="bg-[#f3d2c1] min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-28 px-5">
        <div className="container flex-col max-w-xl">
            <Title/>
            <TodoInput/>
            <TodoList todo={todo}/>
        </div>

    </div>
  )
}

export default App;
