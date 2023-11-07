import { BackButton, CreatePostContainer, BackIcon, Inline, TitleInput, DetailedInput, TagInput, ScrollContainer, ImageInput, SubmitButton } from "./StyledCreatePost";
import BackArrowIcon from "../assets/BackArrow.png"
import PageIntro from "../../components/PageIntroduction/PageIntro";
import NewPostFiled from "../../components/NewPostFiled/NewPostFiled";
import AddTagInput from '../../components/AddTagInput/AddTagInput';

import { Grid } from "../../StyledGlobal";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

function CreatePost(){
    const [photo, setPhoto] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tag1, setTag1] = useState('');
    const [tag2, setTag2] = useState('');
    const [tag3, setTag3] = useState('');

    useEffect(() => {
        const Tag1 = localStorage.getItem('Tag1');
        const Tag2 = localStorage.getItem('Tag2');
        const Tag3 = localStorage.getItem('Tag3');
    
        if (Tag1) {
          setTag1(Tag1);
        }
        if (Tag2) {
          setTag2(Tag2);
        }
        if (Tag3) {
          setTag3(Tag3);
        }
      }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const userID = parseInt(localStorage.getItem('user'))
        const data = {
          UserID: userID,
          Photo: photo,
          PostName: title,
          PostDescription: content,
          Tag1: tag1,
          Tag2: tag2,
          Tag3: tag3
        }
        
        try {
            const response = await api.post('/post/post/create', data);
      
            console.log('Post criado com sucesso:', response.data);
          } catch (error) {
            console.error('Erro ao criar o post:', error);
          }
    };
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
                Input={<TitleInput value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Digite aqui o título..."/>}
            />
            <NewPostFiled
                FieldTitle="Detalhes" 
                FieldSubtitle="Explique seu desafio com detalhes para garantir que os outros usuários possam propor soluções que de fato solucionem seu problema"
                Input={<DetailedInput value={content} onChange={(e) => setContent(e.target.value)} placeholder="Digite aqui a especificação do seu desafio..."/>}
            />
            <NewPostFiled
                FieldTitle="Tag" 
                FieldSubtitle="Adicione Tags para ajudar que as pessoas certas encontrem e respondam sua pergunta"
                Input = {<TagInput> 
                            <AddTagInput TagNumber="Tag1"/>
                            <AddTagInput TagNumber="Tag2"/>
                            <AddTagInput TagNumber="Tag3"/>
                        </TagInput>}
            />
            <NewPostFiled
                FieldTitle="Adicione uma imagem" 
                FieldSubtitle="Complemente seu desafio com uma imagem ilustrativa"
                Input={<ImageInput type="file" id="imagemInput" accept="image/*"/>}
            />
            <SubmitButton type="submit"onClick={handleSubmit}>Publicar</SubmitButton>
        </ScrollContainer>
    </CreatePostContainer>
    </Grid>
    </>
    )
}

export default CreatePost;