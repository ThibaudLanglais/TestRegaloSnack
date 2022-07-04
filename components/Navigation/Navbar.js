import { useNavigation, useRoute } from "@react-navigation/native";
import styled, { useTheme } from "styled-components";
import { softShadow } from "../../styles/styledMixins";
import _default from "../../themes/default";
import CustomText from "../customText";
export default function Navbar(){

    const navigation = useNavigation();
    const activeRoute = useRoute();
    const theme = useTheme();
    const routes = [
        {
            name: "HomeSignedIn",
            title: "Fil d'actualité"
        },
        {
            name: "Lists",
            title: "Listes"
        },
        {
            name: "Friends",
            title: "Amis"
        },
        {
            name: "Profile",
            title: "Profil"
        },
    ];

    return (
    <NavbarWrapper>
        {routes.map((route, i) => {
            return (
                <ButtonWrapper key={i}>
                    <NavButton style={activeRoute.name === route.name ? {backgroundColor: theme.THEME_COLOR_LIGHT} : null} onPress={() => navigation.navigate(route.name)}>
                        <ButtonText>{route.title}</ButtonText>
                    </NavButton>
                </ButtonWrapper>
            )
        })}
    </NavbarWrapper>
    )
}

const NavbarWrapper = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: center;
    // backgroundColor: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    zIndex: 999;
`
const ButtonWrapper = styled.View`
    ${softShadow};
    borderRadius: 100px;
`
const NavButton = styled.TouchableHighlight`
    padding: 15px;
    alignSelf: center;
    backgroundColor: ${props => props.theme.SECONDARY_BACKGROUND_COLOR};
    marginHorizontal: 5px;
    borderRadius: 100px;
`
const ButtonText = styled(CustomText)`
    color: ${props => props.theme.SECONDARY_TEXT_COLOR};
`
