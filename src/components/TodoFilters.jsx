import { FilterButton, FilterButtonContainer, FilterContainer, ItemsLeft } from "./TodoFilters.components"

export const TodoFilters = ({total, activeFilter, showAllTodo,  showActiveTodo, showCompletedTodo, handleClearComplete}) => {
    return (
       <FilterContainer>
        <ItemsLeft/>
        <FilterButtonContainer>
            <FilterButton action={() => showAllTodo()} active={activeFilter} filter='All'/>
            <FilterButton action={() => showActiveTodo()} active={activeFilter} filter='Active'/>
            <FilterButton action={() => showCompletedTodo()} active={activeFilter} filter='Completed'/>
        </FilterButtonContainer>
        <button onClick={handleClearComplete} className="text-[#001858] hover:text-[#8bd3dd] cursor-pointer transition-all duration-300 ease-in">
            Clear Complete
        </button>
       </FilterContainer>
    )
}