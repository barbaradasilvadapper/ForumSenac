import { Link } from "react-router-dom";
import { TabContainer } from "./StyledTab";

function Tab(props) {
    return(
    <>
    <Link to={props.Path}>
    <TabContainer>
            {<img src={props.TabIcon} backgroundColor="#262D34"/>}
            {props.TabText}
    </TabContainer>
    </Link>
    </>
    )
};

export default Tab;