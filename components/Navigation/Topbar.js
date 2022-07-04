import { useNavigation, useRoute } from "@react-navigation/native";
import { Platform, StatusBar, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import styled, { useTheme } from "styled-components";
import GlobalStyles from "../../styles/GlobalStyles";
import _default from "../../themes/default";
import CustomText from "../customText";
import ExternalSvg from "../ExternalSvg";
export default function Topbar(){

    const navigation = useNavigation();

    return (
    <Wrapper>
        <TouchableOpacity onPress={() => navigation.navigate('HomeSignedIn')}>
            <ExternalSvg icon={{name: 'logo-color', width: 50, height: 50}}/>
        </TouchableOpacity>
        <Account>
            <Username>Thibaud Langlais</Username>
            <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <ExternalSvg icon={{name: 'account', width: 50, height: 50}}/>
            </TouchableOpacity>
        </Account>
    </Wrapper>
    )
}

const Username = styled(CustomText)`
    fontFamily: ${_default.bold};
    fontSize: 16px;
    marginRight: 5px;
    color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`
const Wrapper = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
    paddingHorizontal: 15px;
    paddingVertical: 10px;
    backgroundColor: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    zIndex: 999;
`
const Account = styled.View`
    display: flex;
    flexDirection: row;
    alignItems: center;
`