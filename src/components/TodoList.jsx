import { Todo } from "./Todo"
import { TodoFilters } from "./TodoFilters"

export const TodoList = ({ todo, handleSetComplete, handleDelete, activeFilter, showAllTodo,  showActiveTodo, showCompletedTodo, handleClearComplete}) => {
    return (
        <div className="flex flex-col mt-7 rounder-lg overflow-hidden shadow-2xl">
            {todo.map(todo => {
                return (
                    <Todo key={todo.id} todo={todo} handleSetComplete={handleSetComplete} handleDelete={handleDelete}/>
                )
            })}
            <TodoFilters activeFilter={activeFilter} total={todo.length} showAllTodo={showAllTodo} showActiveTodo={showActiveTodo} showCompletedTodo={showCompletedTodo} handleClearComplete={handleClearComplete}/>
        </div>
    )
}