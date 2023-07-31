
export const Todo = ({todo}) => {

    const { title, completed } = todo

    return (
        <div className="flex items-center justify-between p-4 bg-[#fef6e4] border-b border-solid border-[#001858]">
            <div className="flex items-center">
                {
                    completed ? (
                        <div className="bg-[#f582ae] p-1 rounded-full cursor-pointer">
                            <img className="h-4 w-4" src="/public/check-icon.svg" alt="check icon"/>
                        </div>
                    ) : (
                        <span className="border border-[#001858] border-solid p-3 rounded-full cursor-pointer"></span>
                    )
                }
                
                <p className={"pl-3 text-[#001858]" + (completed && "line-through")}>
                    {title}
                </p>
            </div>
            <img className="h-5 w-5 cursor-pointer transition-all duration-300" src="/close-icon.svg" alt="close icon" />
        </div>
    )
}