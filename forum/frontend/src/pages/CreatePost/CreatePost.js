import { BackButton, CreatePostContainer, BackIcon, Inline, TitleInput, DetailedInput, TagInput, ScrollContainer, ImageInput } from "./StyledCreatePost";
import BackArrowIcon from "../assets/BackArrow.png"
import PageIntro from "../../components/PageIntroduction/PageIntro";
import NewPostFiled from "../../components/NewPostFiled/NewPostFiled";
import AddTagInput from '../../components/AddTagInput/AddTagInput';

import { Grid } from "../../StyledGlobal";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";

import { Link } from "react-router-dom";

function CreatePost(){
    return(
    <>
    <Grid>
    <Header />
    <Menu />
    <CreatePostContainer>
        <Inline>
        <Link to="/Home">
            <BackButton>
                <BackIcon src={BackArrowIcon}/>
            </BackButton>
        </Link>
        <PageIntro
            PageTitle="Crie um desafio" 
            PageSubtitle="Seja a voz da mudança e crie novos debates. O poder da transformação da sua realidade ou da sua comunidade está em suas mãos!"
        />
        </Inline>
        <ScrollContainer>
            <NewPostFiled
                FieldTitle="Título" 
                FieldSubtitle="Crie um título que chame atenção de todos os usuários para resolver seu desafio pessoal ou da sua comunidade"
                Input={<TitleInput placeholder="Digite aqui o título..."/>}
            />
            <NewPostFiled
                FieldTitle="Detalhes" 
                FieldSubtitle="Explique seu desafio com detalhes para garantir que os outros usuários possam propor soluções que de fato solucionem seu problema"
                Input={<DetailedInput placeholder="Digite aqui a especificação do seu desafio..."/>}
            />
            <NewPostFiled
                FieldTitle="Tag" 
                FieldSubtitle="Adicione Tags para ajudar que as pessoas certas encontrem e respondam sua pergunta"
                Input = {<TagInput> 
                            <AddTagInput/>
                            <AddTagInput/>
                            <AddTagInput/>
                        </TagInput>}
            />
            <NewPostFiled
                FieldTitle="Adicione uma imagem" 
                FieldSubtitle="Complemente seu desafio com uma imagem ilustrativa"
                Input={<ImageInput type="file" id="imagemInput" accept="image/*"/>}
            />
        </ScrollContainer>
    </CreatePostContainer>
    </Grid>
    </>
    )
}

export default CreatePost;