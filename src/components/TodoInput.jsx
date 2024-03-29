import { useState } from "react"

export const TodoInput = ({addTodo}) => {

    const [title, setTitle] = useState('');

    const handleTodo = (e) => {
        if (e.key.toLowerCase() === 'enter'){
            addTodo(title);
            setTitle('');
        }
    }

    return (
        <div className="mt-6 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="border border-[#001858] border-solid p-3 rounded-full"></span>
            </div>
            <input 
            type="text" 
            className="focus:shadow-lg font-Inter focus:shadow-[#f582ae] pl-12 w-full py-4 bg-[#fef6e4] rounded-xl outline-none transition-all duration-300 ease-in-out text-[#001858]" value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => handleTodo(e)} 
            placeholder="What's next..."></input>
        </div>
    )
}