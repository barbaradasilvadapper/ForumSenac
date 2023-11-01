import { DateSelectorContainer, Select } from "./StyledDateSelector";

function DateSelector(){
    return(
    <>
    <DateSelectorContainer>
        <Select>
            <option value='hoje'>Hoje</option>
            <option value='ontem'>Ontem</option>
            <option value='semana'>Esta semana</option>
            <option value='15d'>Últimos 15 dias</option>
            <option selected value='30d'>Últimos 30 dias</option>
            <option value='60d'>Últimos 60 dias</option>
            <option value='ano'>Este ano</option>
        </Select>
    </DateSelectorContainer>
    </>
    )
};

export default DateSelector;