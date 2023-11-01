import { PageSubtitle, PageTitle, TitleContainer } from "./StyledPageIntro";

function PageIntro(props) {
    return(
    <>
    <TitleContainer>
        <PageTitle>{props.PageTitle}</PageTitle>
        <PageSubtitle>{props.PageSubtitle}</PageSubtitle> 
    </TitleContainer>
    </>
    )
};

export default PageIntro;