import { HeaderContainer, Avatar, Icon, IconsContainer, AvatarContainer } from "./StyledHeader.jsx"
import { ChevronDownIcon } from '@chakra-ui/icons'
import 'material-symbols';

function Header(){
    return(
        <>
        <HeaderContainer>
            <IconsContainer>
                <Icon>
                    <span class="material-symbols-outlined" backgroundColor="#262D34">add_box</span>
                </Icon>
                <Icon>
                    <span class="material-symbols-outlined" backgroundColor="#262D34">notifications</span>
                </Icon>
                <AvatarContainer>
                    <Avatar src='https://bit.ly/dan-abramov'/>
                    <ChevronDownIcon color='#808080' backgroundColor="#262D34"/>
                </AvatarContainer>
            </IconsContainer>
        </HeaderContainer>
        </>
    )
}

export default Header