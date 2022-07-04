import { useState } from "react";
import { Modal, Share, StyleSheet, View } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";
import _default from "../../themes/default";
import CustomText from "../customText";
import UserCard from "./UserCard";
import AddFriendPopup from "./AddFriendPopup";
import styled, { useTheme } from "styled-components/native";
import ExternalSvg from "../ExternalSvg";

const onShare = async () => {
    try {
      const result = await Share.share({
        url: 'Viens sur Regalo fréro',
        message: 'Viens sur Regalo fréro',
      }, {dialogTitle: "Invitez des amis sur Regalo !"});
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
};

export default function InvitesList(){

  const theme = useTheme();

  const [invites, setInvites] = useState([
    {
        photo: null,
        name: 'John Doe',
    },{
        photo: null,
        name: 'John Doe',
    },{
        photo: null,
        name: 'John Doe',
    },{
        photo: null,
        name: 'John Doe',
    }
  ])

  const [modalOpened, setModalOpened] = useState(false);

  const onDeleteSuggestion = (i) => {
    setInvites(invites.filter((invite, index) => index !== i))
  }

  const onAddFriend = () => {
    setModalOpened(!modalOpened);
  }


  return (
      <ListWrapper>
        <AddFriendModal visible={modalOpened} transparent>
          <AddFriendPopup opened={modalOpened} onPressClose={() => setModalOpened(false)}/>
        </AddFriendModal>
          {invites.length == 0 ?
            <CustomText style={styles.emptyList}>Pas de suggestions d'amis... 😔</CustomText> : 
            invites.map((user, index) => <UserCard key={index} onAddFriend={onAddFriend} onDeleteSuggestion={() => onDeleteSuggestion(index)} user={user}/>)
          }
        <FooterWrapper underlayColor={theme.THEME_COLOR_DARK} onPress={onShare}>
          <ElementsWrapper>
            <ExternalSvg icon={{name: "add", width: 30, height: 30, fill: 'white'}}/>
            <FooterText>Inviter des amis</FooterText>
          </ElementsWrapper>
        </FooterWrapper>
      </ListWrapper>
  )
}

const AddFriendModal = styled.Modal`
`

const ListWrapper = styled.View`
  paddingVertical: 20px;
`

const FooterWrapper = styled.TouchableHighlight`
  backgroundColor: ${props => props.theme.THEME_COLOR};
  width: 100%;
  borderRadius: 10px;
  marginTop: 10px;
  padding: 20px;
  backgroundColor: ${props => props.theme.THEME_COLOR_LIGHT}
`
const ElementsWrapper = styled.View`
  display: flex;
  flexDirection: row;
  alignItems: center;
  justifyContent: center;
`

const FooterText = styled(CustomText)`
  color: ${props => props.theme.SECONDARY_TEXT_COLOR};
  fontFamily: ${_default.bold};
  marginLeft: 10px;
`

const styles = StyleSheet.create({
    footer: {
    backgroundColor: _default.orangeLightHome,
    width: '100%',
    borderRadius: 10,
    marginTop: 10
  },
  footerText: {
      fontFamily: _default.bold
  },
  emptyList: {
    ...GlobalStyles.textCenter
  }
})


