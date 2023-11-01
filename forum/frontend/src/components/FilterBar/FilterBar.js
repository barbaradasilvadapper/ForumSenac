import { FilterBarContainer, FilterContainer, FilterIcons, FixedFilter, SearchBar, SearchContainer, SearchIcons } from "./StyledFilterBar"
import { Input, Stack, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import React, { useState } from 'react';

function FilterBar({ buttons }){
    const [activeButtonIndex, setActiveButtonIndex] = useState(null);

    const handleButtonClick = buttonIndex => {
        setActiveButtonIndex(buttonIndex);
    };

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
                <Stack spacing={2}>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'
                        style={{
                            padding: "8px",
                            paddingLeft: "2vh"
                        }}>
                        <Search2Icon color='gray.500'/>
                        </InputLeftElement>
                        <Input
                            type="text"
                            placeholder="Pesquise por palavras-chave"
                            style={{
                                padding: "8px",
                                paddingLeft: "6vh",
                                boxSizing: "border-box",
                                width: "200px",
                                height: "100%",
                                backgroundColor: "#262D34",
                                border: "1px solid #262D34",
                                borderRadius: "25px",
                                fontSize: "10px",
                                color: "#808080",
                            }}
                        />
                    </InputGroup>
                </Stack>
            </SearchContainer>            
        </FilterContainer>
        </>
    )
}

export default FilterBar;