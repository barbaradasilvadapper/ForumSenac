import { HeaderContainer } from "../../components/Header/StyledHeader";
import { AvatarContainer, CarouselContainer, IntroductionContainer, PageSubtitle, PageTitle } from "./StyledAvatar";

function Avatar(){
    return(
    <>
    <HeaderContainer>

    </HeaderContainer>
    <AvatarContainer>
        <IntroductionContainer>
            <PageTitle>Escolha seu avatar</PageTitle>
            <PageSubtitle>
            Nome da pessoa, gostaríamos de te convidar a participar de uma emocionante jornada pelo reino dos monstros! Neste mundo fantástico, existem criaturas de todas as formas, tamanhos e habilidades. Agora, é a sua vez de tomar uma decisão crucial: escolher o seu monstro! Queremos saber qual criatura lendária irá acompanhar você nessa aventura cheia de desafios.. 
            </PageSubtitle>
        </IntroductionContainer>
        <CarouselContainer>
        </CarouselContainer>
    </AvatarContainer>
    </>
    )
};

export default Avatar;