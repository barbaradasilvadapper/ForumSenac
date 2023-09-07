import { HeaderContainer, Avatar, Icon, IconsContainer, AvatarContainer } from "./StyledHeader.jsx"
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react'
import 'material-symbols';
import { Link } from 'react-router-dom'

function Header(){
    return(
        <>
        <HeaderContainer>
            <IconsContainer>
                <Link to="/CreatePost">
                    <Icon>
                        <span class="material-symbols-outlined" backgroundColor="#262D34">add_box</span>
                    </Icon>
                </Link>
                <Icon>
                    <span class="material-symbols-outlined" backgroundColor="#262D34">notifications</span>
                </Icon>
                <AvatarContainer>
                    <Avatar src='https://bit.ly/dan-abramov'/>
                    <Menu>
                        <MenuButton>
                            <ChevronDownIcon color='#808080' backgroundColor="#262D34"/>
                        </MenuButton>
                        <MenuList backgroundColor="#343a41" border="0">
                            <MenuItem backgroundColor="#343a41" fontSize="small">
                            Editar perfil
                            </MenuItem>
                            <Link to="/Like">
                                <MenuItem backgroundColor="#343a41" fontSize="small">
                                Curtidos
                                </MenuItem>
                            </Link>
                            <MenuItem backgroundColor="#343a41" fontSize="small" color="red.500">
                            Log-out
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </AvatarContainer>
            </IconsContainer>
        </HeaderContainer>
        </>
    )
}

export default Header