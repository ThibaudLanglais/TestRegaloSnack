import { Image, StyleSheet, View, TouchableHighlight } from "react-native";
import _default from "../../themes/default";
import CustomText from "../customText";
import ExternalSvg from "../ExternalSvg";
import RoundedButton from '../../components/RoundedButton';
import styled, { css } from "styled-components/native";
import { useTheme } from "styled-components";
import { useState } from "react";
export default function UserCard({user, onDeleteSuggestion, onAddFriend}){

    const theme = useTheme();
    const [addButtonPressed, setAddButtonPressed] = useState(false);

    return (
        <CardWrapper>
            <View style={styles.userPhotoWrapper}>
                {user.photo ? 
                    <Image source={{uri: user.photo}}/> :
                    <ExternalSvg icon={{name: "account", width: styles.userPhoto.width, height: styles.userPhoto.width}}/>    
                }
            </View>
            <View>
                <Username>{user.name}</Username>
                <View style={styles.buttonsWrapper}>
                    <AddButton 
                        onPressIn={() => setAddButtonPressed(true)} 
                        onPressOut={() => setAddButtonPressed(false)} 
                        onPress={onAddFriend} 
                        underlayColor={theme.THEME_COLOR}
                    >
                        <CustomText style={[{color: addButtonPressed ? theme.SECONDARY_TEXT_COLOR : theme.THEME_COLOR}]}>Ajouter</CustomText>
                    </AddButton>
                    <DeleteButton onPress={onDeleteSuggestion} underlayColor={theme.THEME_COLOR_DARK}>
                        <CustomText style={[{color: theme.SECONDARY_TEXT_COLOR}]}>Supprimer</CustomText>
                    </DeleteButton>
                </View>
            </View>
        </CardWrapper>
    )
}

const styledButtons = css`
    borderWidth: 1px;
    borderColor: ${props => props.theme.SECONDARY_TEXT_COLOR};
    padding: 5px;
    borderRadius: 10px;
    paddingHorizontal: 15px;
    paddingVertical: 7px;
`

const AddButton = styled.TouchableHighlight`
    ${styledButtons}
    backgroundColor: white;
    marginRight: 10px;
`
const DeleteButton = styled.TouchableHighlight`
    ${styledButtons}
    backgroundColor: transparent;
`

const CardWrapper = styled.View`
    display: flex;
    flexDirection: row;
    alignItems: center;
    backgroundColor: ${props => props.theme.THEME_COLOR};
    borderRadius: 10px;
    padding: 10px;
    marginBottom: 10px;
`

const Username = styled(CustomText)`
    marginBottom: 5px;
    fontFamily: ${_default.bold};
    color: ${props => props.theme.SECONDARY_TEXT_COLOR}
`

const styles = StyleSheet.create({
    userPhotoWrapper: {
        marginRight: 10,
        borderRadius: 100,
    },
    userPhoto: {
        width: 50,
    },
    buttonsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'   
    },
})