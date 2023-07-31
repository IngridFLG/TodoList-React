import { FilterButton, FilterButtonContainer, FilterContainer, ItemsLeft } from "./TodoFilters.components"

export const TodoFilters = () => {
    return (
       <FilterContainer>
        <ItemsLeft/>
        <FilterButtonContainer>
            <FilterButton action={() => {}} active="All" filter='All'/>
            <FilterButton action={() => {}} active="All" filter='Active'/>
            <FilterButton action={() => {}} active="All" filter='Completed'/>
        </FilterButtonContainer>
        <button className="text-[#001858] hover:text-[#8bd3dd] cursor-pointer transition-all duration-300 ease-in">
            Clear Complete
        </button>
       </FilterContainer>
    )
}