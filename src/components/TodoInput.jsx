
export const TodoInput = () => {
    return (
        <div className="mt-6 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="border border-[#001858] border-solid p-3 rounded-full"></span>
            </div>
            <input 
            type="text" 
            className="focus:shadow-lg font-Inter focus:shadow-[#f582ae] pl-12 w-full py-4 bg-[#fef6e4] rounded-xl outline-none transition-all duration-300 ease-in-out text-[#001858]" placeholder="What's next..."></input>
        </div>
    )
}