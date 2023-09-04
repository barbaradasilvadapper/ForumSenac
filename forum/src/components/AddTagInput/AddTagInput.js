import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, Button, InputRightElement, position } from '@chakra-ui/react'
import { Input, Stack, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Search2Icon, CloseIcon } from '@chakra-ui/icons'
import TagSearch from '../../components/TagSearch/TagSearch';

function AddTagInput(){
    const TagList = [
        {
          PostTag: "#RelatosSãoLeopoldo",
          PostContent:
            "Histórias inspiradoras de profissionais de diferentes origens sociais, a importância da representatividade e seus benefícios",
        },
        {
          PostTag: "#RelatosSãoLeopoldo",
          PostContent:
            "Histórias inspiradoras de profissionais de diferentes origens sociais, a importância da representatividade e seus benefícios",
        },
        {
          PostTag: "#RelatosSãoLeopoldo",
          PostContent:
            "Histórias inspiradoras de profissionais de diferentes origens sociais, a importância da representatividade e seus benefícios",
        },
    ];
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
        }}>
            Adicionar aqui
            <span color="#A1A4A7" class="material-symbols-outlined">add</span>
        </Button>
    </PopoverTrigger>
    <PopoverContent
        style={{
            backgroundColor: "#262d34eb",
            border: "1px solid #262d34eb",
            borderRadius: "10px",
            padding: "4vh",
            gap: "3vh",
            width: "50vh",
            position: 'absolute',
            zIndex: '10',
        }}
    >
        <PopoverArrow />
        <PopoverHeader>
        <Stack spacing={2}>
            <InputGroup>
                <InputLeftElement pointerEvents='none'
                style={{
                    padding: "8px",
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
                        width: "90%",
                        height: "100%",
                        backgroundColor: "#1E252B",
                        border: "1px solid #1E252B",
                        borderRadius: "25px",
                        fontSize: "10px",
                        color: "white",
                    }}
                />
                <PopoverCloseButton
                    style={{
                        backgroundColor: "#262d34be",
                        border: "0px solid #262d34be",
                    }}
                >
                    <InputRightElement>
                        <CloseIcon
                            style={{
                                paddingTop: "1.5vh",
                            }}
                        />
                    </InputRightElement>
                </PopoverCloseButton>
            </InputGroup>
        </Stack>
        </PopoverHeader>
        <PopoverBody
            style={{
                overflow: "auto",
                height: "20vh",
                display: "flex",
                flexWrap: "wrap",
            }}
        >
            <TagSearch posts={TagList}/>
        </PopoverBody>
    </PopoverContent>
    </Popover>
    </>
    )
};

export default AddTagInput;