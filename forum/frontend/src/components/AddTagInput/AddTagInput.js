import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, Button, InputRightElement, position } from '@chakra-ui/react'
import { Input, Stack, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Search2Icon, CloseIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { PostCardContainer, PostTag, PostTagContainer } from './StyledAddInput';

function AddTagInput( props ){
    const [tags, setTags] = useState([]);
    const [field, setField] = useState('');
    localStorage.setItem(`${props.TagNumber}`, field);

    const handleTagClick = (tagName) => {
        setField(tagName);
    };

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await api.get('/tag/tag');
              const tagList = response.data.data;
              setTags(tagList);
          } catch (err) {
              console.error(err);
          }
      };
      fetchData();
    }, []);

    return(
    <>
    <Popover placement='top-start'>
    <PopoverTrigger>
        <Button
        style={{
            height: "6vh",
            width: "fit-content",
            gap: "1vh",
            marginTop: "1vh",
            marginBottom: "6vh",
            paddingLeft: "2vh",
            paddingRight: "2vh",
            backgroundColor: "#262D34",
            border: "1px solid #262D34",
            boxShadow: "5px 5px 20px 0px rgba(0, 0, 0, 0.192)",
            borderRadius: "10px",
            color: "#A1A4A7",
            fontWeight: "300",
            fontSize: "small"
        }}>
            {field === '' ? 'Adicionar aqui' : field}
            <span color="#A1A4A7" class="material-symbols-outlined">add</span>
        </Button>
    </PopoverTrigger>
    <PopoverContent
        style={{
            backgroundColor: "#262d34eb",
            border: "1px solid #262d34eb",
            borderRadius: "10px",
            padding: "3vh",
            gap: "3vh",
            width: "55vh",
            position: 'absolute',
            zIndex: '10',
        }}
    >
        <PopoverArrow />
        <PopoverHeader
            style={{
                border: "none",
            }}
        >
        <Stack>
            <InputGroup>
                <InputLeftElement pointerEvents='none'
                style={{
                    padding: "4px",
                    paddingLeft: "2vh"
                }}>
                <Search2Icon color='gray.500'/>
                </InputLeftElement>
                <Input
                    type="search"
                    placeholder="Pesquise por palavras-chave"
                    style={{
                        padding: "8px",
                        paddingLeft: "6vh",
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#1E252B",
                        border: "1px solid #1E252B",
                        borderRadius: "25px",
                        fontSize: "10px",
                        color: "white",
                    }}
                />
            </InputGroup>
        </Stack>
        </PopoverHeader>
        <PopoverBody
            style={{
                overflow: "auto",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                height: "15vh"
            }}
        >
        {tags.map((tag) => (
            <PostCardContainer key={tag.TagID}>
                <PostTagContainer>
                <PostTag onClick={() => handleTagClick(tag.TagName)}>{tag.TagName}</PostTag>
                </PostTagContainer>
            </PostCardContainer>
        ))}
        </PopoverBody>
    </PopoverContent>
    </Popover>
    </>
    )
};

export default AddTagInput;