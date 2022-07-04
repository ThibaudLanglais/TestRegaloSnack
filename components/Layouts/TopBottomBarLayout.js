import styled from "styled-components";
import Navbar from "../Navigation/Navbar";
import Topbar from "../Navigation/Topbar";

function TopBottomBarLayout(props){
    return (
        <>
            <Topbar/>
            <Container>
                {props.children}
            </Container >
            <Navbar/>
        </>
    )
}

export default TopBottomBarLayout;

const Container = styled.View`
    backgroundColor: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
    paddingTop: 80px;
    position: relative;
    flex: 1;
`
