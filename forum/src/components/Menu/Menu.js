import { useNavigate } from "react-router-dom"

import { MenuContainer, TabTitle } from "./Menu.jsx"
import Tab from "./Tab/Tab.js"
import DesafioIcon from "../assets/Desafios.png"
import TagIcon from "../assets/Tag.png"
import RankingIcon from "../assets/Ranking.png"
import SeusDesafiosIcon from "../assets/SeusDesafios.png"
import SuasRespostasIcon from "../assets/SuasRespostas.png"
import LikesIcon from "../assets/Likes.png"
import DashboardIcon from "../assets/Dashboard.png"

function Menu(){
    // const navigate = useNavigate()

    // const goToChallenges = () => {
    //     navigate('/home')
    // }
    // const goToTags = () => {
    //     navigate('/tags')
    // }
    // const goToMyChallenges = () => {
    //     navigate('/seus-desafios')
    // }
    // const goToMyProposals = () => {
    //     navigate('/suas-propostas')
    // }
    // const goToLikes = () => {
    //     navigate('/likes')
    // }
    // const goToDashboard = () => {
    //     navigate('/dashboard')
    // }

    return(
        <>
            <MenuContainer>
                <TabTitle>MENU</TabTitle>
                <Tab TabIcon={DesafioIcon} TabText="Desafios"></Tab>
                <Tab TabIcon={TagIcon} TabText="Tags"></Tab>
                <Tab TabIcon={RankingIcon} TabText="Ranking"></Tab>
                
                <TabTitle>NAVEGADOR PESSOAL</TabTitle>
                <Tab TabIcon={SeusDesafiosIcon} TabText="Seus desafios"></Tab>
                <Tab TabIcon={SuasRespostasIcon} TabText="Suas propostas"></Tab>
                <Tab TabIcon={LikesIcon} TabText="Likes"></Tab>
                <Tab TabIcon={DashboardIcon} TabText="Dashboard"></Tab>
            </MenuContainer>
        </>
    )
}


export default Menu