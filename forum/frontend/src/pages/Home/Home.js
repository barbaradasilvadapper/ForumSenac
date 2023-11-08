import { Link, useNavigate } from "react-router-dom"

import { Grid } from "../../StyledGlobal";
import FilterBar from "../../components/FilterBar/FilterBar"
import PageIntro from "../../components/PageIntroduction/PageIntro"
import PostCard from "../../components/PostCard/PostCard"
import { DisabledStatus, HomeContainer, HomeGrid, PostContainer } from "./StyledHome"
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";

import RecentesIcon from "../assets/Recente.png"
import TopIcon from "../assets/Top.png"
import ResolvidosIcon from "../assets/Resolvidos.png"
import MonsterReport from "../../components/MonsterReport/MonterReport";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

function Home( props ){

    const buttons = [
        { label: 'Recente', icon: RecentesIcon},
        // { label: 'Top', icon: TopIcon },
        // { label: 'Respondidos', icon: ResolvidosIcon },
    ];

    const [posts, setPosts] = useState([]);
    const [searched, setSearched] = useState('');

    const handleSearchChange = (value) => {
        setSearched(value);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/post/post');
                const postList = response.data.data;
                setPosts(postList);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);


    return(
        <>
        <Grid>
        <Header />
        <Menu />
        <HomeContainer>
            <HomeGrid>
                <PageIntro PageTitle="Desafios" PageSubtitle="Seja a voz da mudança e participe ativamente dos debates, sugerindo possíveis intervenções. O poder da transformação está em suas mãos!"/>
                <MonsterReport 
                    PostTitle="Continue assim!"
                    Percentage={65}
                />
                <FilterBar buttons={buttons} onSearchChange={handleSearchChange}/>
                <DisabledStatus/>
                {searched !== '' ? (
                <PostContainer>
                    {posts
                    .filter((post) => post.PostName.toLowerCase().includes(searched.toLowerCase()))
                    .map((post) => (
                        <PostCard
                            key={post.PostID}
                            PostID={post.PostID}
                            UserPhoto={post.UserPhoto}
                            Username={post.UserName}
                            TimePosted={`Há ${post.PublishedTime}`}
                            PostTitle={post.PostName}
                            PostContent={post.PostDescription}
                            PostTag1={post.TagName1}
                            PostTag2={post.TagName2}
                            PostTag3={post.TagName3}
                        />
                    ))}
                </PostContainer>
                ) : (
                <PostContainer>
                    {posts.map((post) => (
                        <PostCard 
                            key={post.PostID}
                            PostID={post.PostID}
                            UserPhoto={post.UserPhoto}
                            Username={post.UserName}
                            TimePosted={`Há ${post.PublishedTime}`}
                            PostTitle={post.PostName}
                            PostContent={post.PostDescription}
                            PostTag1={post.TagName1}
                            PostTag2={post.TagName2}
                            PostTag3={post.TagName3}
                        />
                    ))}
                </PostContainer>
                )}
                <DisabledStatus/>
            </HomeGrid>
        </HomeContainer>
        </Grid>
        </>
    )
}

export default Home