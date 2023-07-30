export const TodoList = ({ children }) => {
    return (
        <div className="flex flex-col mt-7 rounder-lg overflow-hidden shadow-2xl">
            {children}
        </div>
    )
}