import { FieldSubtitle, FieldTitle, NewPostFiledContainer } from "./StyledNewPostFiled";

function NewPostFiled(props) {
    return(
    <>
    <NewPostFiledContainer>
        <FieldTitle>{props.FieldTitle}</FieldTitle>
        <FieldSubtitle>{props.FieldSubtitle}</FieldSubtitle> 
        {props.Input}
    </NewPostFiledContainer>
    </>
    )
};

export default NewPostFiled;