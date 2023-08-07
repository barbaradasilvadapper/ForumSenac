import { FilterBarContainer, FilterIcons, FixedFilter, SearchBar, SearchIcons } from "./StyledFilterBar"
import RecentesIcon from "../assets/Recente.png"
import TopIcon from "../assets/Top.png"
import ResolvidosIcon from "../assets/Resolvidos.png"
import SearchIcon from "../assets/Search.png"

function FilterBar(){
    return(
        <>
            <FilterBarContainer>
                <FixedFilter>
                    <FilterIcons src={RecentesIcon}/>
                    Recente
                </FixedFilter>
                <FixedFilter>
                    <FilterIcons src={TopIcon}/>
                    Top
                </FixedFilter>
                <FixedFilter>
                    <FilterIcons src={ResolvidosIcon}/>
                    Resolvidos
                </FixedFilter>
                <SearchBar>
                    <SearchIcons src={SearchIcon}/>
                    Pesquise por palavras-chave
                </SearchBar>
            </FilterBarContainer>
        </>
    )
}

export default FilterBar