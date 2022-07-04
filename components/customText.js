import { StyleSheet, Text } from "react-native";
import styled from "styled-components";
import _default from "../themes/default";

export default function CustomText(props){
    return <StyledText onPress={props.onPress ? props.onPress : null} style={props.style}>{props.children}</StyledText>
}

const StyledText = styled.Text`
    fontFamily: ${_default.regular};
    color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`