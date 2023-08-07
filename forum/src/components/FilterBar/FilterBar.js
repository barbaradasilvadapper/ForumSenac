import { FilterBarContainer, FilterContainer, FilterIcons, FixedFilter, SearchBar, SearchContainer, SearchIcons } from "./StyledFilterBar"
import RecentesIcon from "../assets/Recente.png"
import TopIcon from "../assets/Top.png"
import ResolvidosIcon from "../assets/Resolvidos.png"
import SearchIcon from "../assets/Search.png"

function FilterBar(){
    return(
        <>
        <FilterContainer>
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
            </FilterBarContainer>   
            <SearchContainer>
                    {/* <SearchIcons src={SearchIcon}/> */}
                    <input
                        type="text"
                        placeholder="Pesquise por palavras-chave"
                        style={{
                            border: "1px solid #262D34",
                            backgroundColor: "#262D34",
                            borderRadius: "25px",
                            padding: "8px",
                            width: "100%",
                            boxSizing: "border-box",
                            width: "175px",
                            height: "100%",
                            fontSize: "9px",
                            color: "#808080",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingLeft: "3vh",
                            paddingRight: "3vh",
                            gap: "1vh"
                        }}
                    />
            </SearchContainer>            
        </FilterContainer>
        </>
    )
}

export default FilterBar;