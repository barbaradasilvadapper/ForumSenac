import { FilterBarContainer, FilterContainer, FilterIcons, FixedFilter, SearchBar, SearchContainer, SearchIcons } from "./StyledFilterBar"
import RecentesIcon from "../assets/Recente.png"
import TopIcon from "../assets/Top.png"
import ResolvidosIcon from "../assets/Resolvidos.png"
import SearchIcon from "../assets/Search.png"
import React, { useState } from 'react';


function FilterBar(){
    const [activeButtonIndex, setActiveButtonIndex] = useState(null);

    const handleButtonClick = buttonIndex => {
        setActiveButtonIndex(buttonIndex);
    };

    const buttons = [
        { label: 'Recente', icon: RecentesIcon},
        { label: 'Top', icon: TopIcon },
        { label: 'Respondidos', icon: ResolvidosIcon },
    ];

    return (
        <>
        <FilterContainer>
            <FilterBarContainer>
                {buttons.map((button, index) => (
                <FixedFilter
                    key={index}
                    label={button.label}
                    onClick={() => handleButtonClick(index)}
                    isActive={activeButtonIndex === index}
                >
                    <FilterIcons src={button.icon} />
                    {button.label}
                </FixedFilter>
                ))}
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