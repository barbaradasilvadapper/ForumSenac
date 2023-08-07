import { TabContainer } from "./StyledTab";

function Tab(props) {
    return(
    <>
    <TabContainer>
        {<img src={props.TabIcon}/>}
        {props.TabText}
    </TabContainer>
    </>
    )
};

export default Tab;