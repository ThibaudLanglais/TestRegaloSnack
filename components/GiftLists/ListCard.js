import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { useTheme } from "styled-components";
import GlobalStyles from "../../styles/GlobalStyles";
import _default from "../../themes/default";
import CustomText from "../customText";
import ExternalSvg from "../ExternalSvg";


export default function ListCard({item}){
    
    const theme = useTheme();

    const defaultColors = [theme.THEME_COLOR_LIGHT, theme.THEME_COLOR, theme.THEME_COLOR_DARK];

    const styles = StyleSheet.create({
        wrapper: {
            width: '100%',
            marginBottom: 20,
        },
        listBackground: {
            borderRadius: 10,
            height: 200,
            display: 'flex',
            backgroundColor: defaultColors[Math.floor(Math.random()*defaultColors.length)],
            overflow: 'hidden'
        },
        listTitle:{
            ...GlobalStyles.textCenter,
            ...GlobalStyles.h3,
            marginTop: 10
        },
        removeButton:{
            position: 'absolute',
            right: 10,
            top: 10,
        },
        backgroundImage: {
            width: '100%',
            height: '100%',
            resizeMode: 'cover'
        }
    })

    return (
        <View style={styles.wrapper}>
            <View style={styles.listBackground}>
                <Image 
                    style={styles.backgroundImage}
                    source={{uri: 'https://www.regalo.gift/build/images/list-default/anniversaire.ae352b72.gif'}}
                    onError={() => {
                        console.log("Erreur lors du chargement de l'image");
                    }}
                />
                <TouchableOpacity style={styles.removeButton}>
                    <ExternalSvg icon={{name: "cross", height: 20, width: 20, fill: "black"}}/>
                </TouchableOpacity>
            </View>
            <CustomText style={styles.listTitle}>{item}</CustomText>
        </View>
    )
}