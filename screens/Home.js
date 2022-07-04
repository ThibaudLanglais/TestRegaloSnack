import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GlobalStyles from "../styles/GlobalStyles";
import _default from "../themes/default";
import SigningForm from "../components/AuthenticationPage/SigningForm";
import RegaloLogo from '../assets/Logo-white.svg';
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { useTheme } from "styled-components";

export default function Home(){
    const theme = useTheme();
    return (
        <>
            <StatusBar translucent backgroundColor="transparent"/>
            <Wrapper colors={[theme.HOME_GRADIENT_START, theme.HOME_GRADIENT_END]}>
                {/* Logo du site */}
                <RegaloLogo fill={'white'} style={{marginVertical: 30}}/>
                <SigningForm/>
            </Wrapper>
        </>
    )
}

const Wrapper = styled(LinearGradient)`
    flex: 1;
    alignItems: center;
    padding: 15px;
    position: relative;
`