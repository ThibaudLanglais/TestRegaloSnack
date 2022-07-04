import { useState } from "react";
import { TouchableHighlight, View, StyleSheet } from "react-native";
import _default from "../themes/default";
import CustomText from "./customText";
import ExternalSvg from "./ExternalSvg";

export default function RoundedButton({onPressFunction, style, logoStyle, textStyle, buttonStyle, focusColor, icon, text, underlayColor, color}){
    
    const [fontColor, setFontColor] = useState(color ? color : _default.primary);
    const styles = StyleSheet.create({
        touchable:{
            borderRadius: 30,
            paddingVertical: 15,
            paddingHorizontal: 25,
            alignSelf: 'center'
        },
        roundedButtonText: {
            fontSize: 16,
            textAlignVertical: 'center',
            marginLeft: text && icon?.name ? 10 : undefined,
        },
        view:{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        }
    })
    
    return (
        <TouchableHighlight
            onPress={() => onPressFunction && onPressFunction()}
            onPressIn={()=>{
                focusColor && setFontColor(focusColor)
            }}
            onPressOut={()=>{
                focusColor && setFontColor(color ? color : _default.primary)
            }}
            style={[styles.touchable, buttonStyle, style]} 
            underlayColor={underlayColor}>
            <View style={styles.view}>
                {icon ? <ExternalSvg style={logoStyle} icon={icon}/> : null}
                {text ? <CustomText style={[styles.roundedButtonText, textStyle, {color: fontColor}]}>{text}</CustomText> : null}
            </View>
        </TouchableHighlight>
    ) 
}
