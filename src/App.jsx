import { Title } from "./components/Title";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="bg-[#f3d2c1] min-h-screen h-full text-gray-100 flex items-center justify-center py-28 px-5">
        <div className="container flex-col max-w-xl">
            <Title/>
            <TodoInput/>
            <TodoList>
                <h2>Todo List</h2>
            </TodoList>
        </div>

    </div>
  )
}

export default App;
