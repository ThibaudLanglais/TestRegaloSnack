import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import GlobalStyles from "../../styles/GlobalStyles";
import _default from "../../themes/default";
import CustomText from "../customText";
import { ImagePicker } from "../../utils/FilePicking";
import styled, { css, useTheme } from "styled-components";
import { buttonMixin, popupTitleMixin, softShadow } from "../../styles/styledMixins";

export default function AddListPopup({menuOpened}){

    const [selectedFileUri, setSelectedFileUri] = useState('');
    const [fileSizeError, setFileSizeError] = useState('');
    const [dateOpened, setDateOpened] = useState(false);
    const [date, setDate] = useState(new Date());
    const theme = useTheme();

    useEffect(
        () => {
            offsetY.value = menuOpened ? 0 : 110;
        }, [menuOpened]
    );

    const offsetY = useSharedValue(100);
    const animatedViewStyles = useAnimatedStyle(() => {
        return {
            top: withSpring(offsetY.value+'%', {
                    mass: 0.5,
                    damping: 8
            }),
        }
    });

    function onDateChange(event, date){
        setDateOpened(false)
        if(event.nativeEvent.timestamp) setDate(new Date(event.nativeEvent.timestamp))
    }

    async function pickFile(){
        let result, fileInfo;
        result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
        });
        if(!result) return;

        fileInfo = await getFileInfo(result.uri).catch((err=> console.log(err)));
        
        if(!fileInfo) return;
        if(!isLessThanMb(fileInfo.size, 5)) {
            setSelectedFileUri('');
            setFileSizeError("Le fichier dépasse 5Mo");
            return;
        }
        setFileSizeError('');
        setSelectedFileUri(fileInfo.uri);
    }

    return(
        <AnimatedView style={animatedViewStyles}>
            <PopupTitle style={GlobalStyles.h3}>Ajouter une idée</PopupTitle>
            <View style={styles.inputGroup}>
                <CustomText>Le nom de votre liste</CustomText>
                <TextInput style={[styles.textInput]}/>
            </View>
            <View style={styles.inputGroup}>
                <CustomText>Une description de votre liste</CustomText>
                <TextInput style={[styles.textInput, {height: 100}]}/>
            </View>
            <View style={styles.inputGroup}>
                <CustomText>Image de votre liste</CustomText>
                {fileSizeError !== '' && <CustomText style={styles.fileSizeErrorMessage}>{fileSizeError}</CustomText>}
                <ImageButton activeOpacity={0.7} onPress={pickFile}>
                    <CustomText style={styles.selectFileText}>Sélectionner une image</CustomText>
                    {selectedFileUri !== '' && <Image 
                        style={styles.selectedFileImage}
                        source={{uri: selectedFileUri}}
                    />}
                </ImageButton>
            </View>
            <View style={styles.inputGroup}>
                <CustomText>La date de fin de votre liste</CustomText>
                <ImageButton activeOpacity={0.7} onPress={() => setDateOpened(true)}>
                    <CustomText style={styles.selectFileText}>Sélectionner la date ({date.toLocaleDateString()})</CustomText>
                </ImageButton>
                {dateOpened && <DateTimePickerAndroid
                    value={date}
                    mode={"date"}
                    is24Hour
                    onChange={onDateChange}
                    onError={() => setDateOpened(false)}
                    minimumDate={new Date()}
                />}
            </View>
            <ConfirmButton onPress={() => null} underlayColor={theme.THEME_COLOR_DARK}>
                    <CustomText style={styles.confirmButtonText}>Ajouter</CustomText>
            </ConfirmButton>
        </AnimatedView>
    )
}

const PopupTitle = styled(CustomText)`
    ${popupTitleMixin};
`

const ImageButton = styled.TouchableOpacity`
    ${buttonMixin};
    backgroundColor: ${props => props.theme.THEME_COLOR_LIGHT};
`

const ConfirmButton = styled.TouchableHighlight`
    ${buttonMixin};
    backgroundColor: ${props => props.theme.THEME_COLOR};
    marginTop: 20px;
    padding: 15px;
`
const AnimatedView = styled(Animated.View)`
    ${softShadow};
    position: absolute;
    backgroundColor: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
    left: 14px;
    right: 14px;
    bottom: 0;
    borderRadius: 10px;
    padding: 15px;
    borderBottomLeftRadius: 0;
    borderBottomRightRadius: 0;
    height: 110%;
`
const styles = StyleSheet.create({
    overlayTitle: {
        ...GlobalStyles.h3,
        fontFamily: _default.regular,
        color: _default.orangeDark
    },
    textInput: {
        ...GlobalStyles.textInput,
        ...GlobalStyles.softShadow,
        height: 40,
        marginTop: 5,
        elevation: 4
    },
    selectFileText: {
        ...GlobalStyles.textCenter,
        ...GlobalStyles.whiteText,
    },
    selectedFileImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginLeft: 15
    },
    fileSizeErrorMessage: {
        ...GlobalStyles.textCenter,
        color: _default.error,
        fontSize: 11,
        marginTop: 10
    },
    confirmButton: {
        backgroundColor: _default.orange,
        marginTop: 20
    },
    confirmButtonText: {
        ...GlobalStyles.whiteText,
        fontFamily: _default.bold,
    },
    inputGroup: {
        marginBottom: 15,
    }
})