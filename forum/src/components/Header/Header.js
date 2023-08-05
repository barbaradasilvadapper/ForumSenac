import { HeaderContainer, Avatar, Icon, IconsContainer, AvatarContainer } from "./Header.jsx"
import { ChevronDownIcon } from '@chakra-ui/icons'
import 'material-symbols';

function Header(){
    return(
        <>
        <HeaderContainer>
            <IconsContainer>
                <Icon>
                    <span class="material-symbols-outlined">add_box</span>
                </Icon>
                <Icon>
                    <span class="material-symbols-outlined">notifications</span>
                </Icon>
                <AvatarContainer>
                    <Avatar src='https://bit.ly/dan-abramov'/>
                    <ChevronDownIcon color='#808080'/>
                </AvatarContainer>
            </IconsContainer>
        </HeaderContainer>
        </>
    )
}

export default Header