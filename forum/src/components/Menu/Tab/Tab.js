import { TabContainer } from "./StyledTab";

function Tab(props) {
    return(
    <>
    <TabContainer>
        {<img src={props.TabIcon} backgroundColor="#262D34"/>}
        {props.TabText}
    </TabContainer>
    </>
    )
};

export default Tab;