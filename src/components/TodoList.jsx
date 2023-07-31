import { Todo } from "./Todo"
import { TodoFilters } from "./TodoFilters"

export const TodoList = ({ todo }) => {
    return (
        <div className="flex flex-col mt-7 rounder-lg overflow-hidden shadow-2xl">
            {todo.map(todo => {
                return (
                    <Todo key={todo.id} todo={todo}/>
                )
            })}
            <TodoFilters/>
        </div>
    )
}