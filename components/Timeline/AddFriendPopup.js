import Checkbox from "expo-checkbox";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming, } from "react-native-reanimated";
import styled, { useTheme } from "styled-components";
import GlobalStyles from "../../styles/GlobalStyles";
import { buttonMixin, popupTitleMixin, softShadow } from "../../styles/styledMixins";
import _default from "../../themes/default";
import CustomText from "../customText";

export default function AddFriendPopup({opened, onPressClose}){

    const scale = useSharedValue(0);
    const opacity = useSharedValue(0);
    const theme = useTheme();
    const [selectedConfidentiality, setSelectedConfidentiality] = useState(0);

    useEffect(()=>{
        scale.value = opened ? 1 : 0;
        opacity.value = opened ? 1 : 0;
    }, [opened])

    const animatedStyle = useAnimatedStyle(()=>{
        return {
            opacity: withDelay(opened ? 100 : 0, withTiming(opacity.value, {duration: 150})),
            transform: [
                {scale: withSpring(scale.value, {mass: 0.5, damping: 8})}
            ]
        }
    })

    return (
            <AnimatedView style={animatedStyle}>
            <PopupTitle style={GlobalStyles.h3}>Vous souhaitez inviter votre ami dans votre réseau ?</PopupTitle>
            <CustomText style={{textAlign: 'center'}}>Niveau de confidentialité de votre liste</CustomText>
            <View>
                {confidentialityLevels.map((level, index) =>
                    <View key={index} style={styles.checkboxWrapper}>
                        <StyledCheckbox 
                            color={theme.THEME_COLOR} 
                            value={selectedConfidentiality === index}
                            onValueChange={() => setSelectedConfidentiality(index)}
                        />
                        <CustomText onPress={() => setSelectedConfidentiality(index)}>{level.name}</CustomText>
                    </View>
                )}
            </View>
            <View style={styles.actions}>
                <AddButton onPress={() => null} underlayColor={theme.THEME_COLOR_LIGHT}>
                    <AddButtonText>Ajouter</AddButtonText>
                </AddButton>
                <CloseButton onPress={onPressClose} underlayColor={theme.THEME_COLOR_LIGHT}>
                    <CloseButtonText>Fermer</CloseButtonText>
                </CloseButton>
            </View>
        </AnimatedView>
    )
}

const confidentialityLevels = [
    {name: "Cercle large", value: "large"},
    {name: "Cercle proche", value: "medium"},
    {name: "Cercle restreint", value: "small"},
]

const PopupTitle = styled(CustomText)`
    ${popupTitleMixin};
`

const AnimatedView = styled(Animated.View)`
    ${softShadow};
    borderRadius: 10px;
    padding: 20px;
    position: absolute;
    left: 14px;
    right: 14px;
    top: 200px;
    backgroundColor: ${_default.bgPrimary};
    zIndex: 1;
    display: flex;
    justifyContent: space-between;
`

const AddButton = styled.TouchableHighlight`
    ${buttonMixin};
    padding: 7px 15px;
    backgroundColor: ${props => props.theme.THEME_COLOR};
    marginRight: 15px;
`
    
const CloseButton = styled.TouchableHighlight`
    ${buttonMixin};
    padding: 7px 15px;
    borderWidth: 1px;
    borderColor: ${props => props.theme.PRIMARY};
`

const AddButtonText = styled(CustomText)`
    color: ${props => props.theme.SECONDARY_TEXT_COLOR};
`
const CloseButtonText = styled(CustomText)`
    color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`
const StyledCheckbox = styled(Checkbox)`
    borderRadius: 100px;
    marginRight: 5px;
`

const styles = StyleSheet.create({
    actions: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    checkboxWrapper:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        alignSelf: 'center'
    }
})