
export const Todo = ({todo, handleSetComplete, handleDelete}) => {

    const { id, title, completed } = todo

    return (
        <div className="flex items-center justify-between p-4 bg-[#fef6e4] border-b border-solid border-[#001858]">
            <div className="flex items-center">
                {
                    completed ? (
                        <div onClick={() => handleSetComplete(id)} className="bg-[#f582ae] p-1 rounded-full cursor-pointer">
                            <img className="h-4 w-4" src="check-icon.svg" alt="check icon"/>
                        </div>
                    ) : (
                        <span onClick={() => handleSetComplete(id)} className="border border-[#001858] border-solid p-3 rounded-full cursor-pointer"></span>
                    )
                }
                
                <p className={"pl-3 " + (completed ? "line-through" : "")} style={{ color: "#001858" }}>{title}</p>
            </div>
            <img onClick={() => handleDelete(id)} className="h-5 w-5 cursor-pointer transition-all duration-300 border-solid" src="close-icon.svg" alt="close icon" />
        </div>
    )
}