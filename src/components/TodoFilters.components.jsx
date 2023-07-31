
export const FilterContainer = ({ children }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-[#fef6e4] botder-b border-solid border-[#001858]">
            {children}
        </div>
    );
}

export const ItemsLeft = ({total = 0}) => {
    return (
        <p className="text-[#001858] text-sm">
            {total} items left
        </p>
    )
}

export const FilterButtonContainer = ({ children }) =>{
    return (
        <div className="flex items-center space-x-2">
            {children}
        </div>

        )
}

export const FilterButton = ({ action, active, filter }) => {
    return (
        <button className={` hover:text-[#8bd3dd] cursor-pointer transition-all duration-300 ease-in-out `
        + (active.toLowerCase().includes(filter.toLowerCase()) ? 'text-[#f582ae]' : 'text-[#001858]')}>
            {filter}
        </button>
    )
}
