import { softShadow } from "../../styles/styledMixins"
import styled from "styled-components/native";
import CustomText from "../customText";
import _default from "../../themes/default";
import { StyleSheet } from "react-native";

export default function EventCard() {
  return (
    <CardWrapper>
        <EventTitleWrapper>
            <BoldColoredText style={styles.eventTitleText}>Jimmy Pierrat</BoldColoredText>
            <CustomText style={styles.eventTitleText}>a ajouté</CustomText>
            <BoldColoredText style={styles.eventTitleText}>idea.fr - noms de domaine...</BoldColoredText>
            <CustomText style={styles.eventTitleText}>a sa liste</CustomText>
            <BoldColoredText style={styles.eventTitleText}>Noël</BoldColoredText>
        </EventTitleWrapper>
        <Description>description de l'evenement</Description>
        <EventImage 
            source={{uri: `https://source.unsplash.com/random`}}
        />
    </CardWrapper>
  )
}

const CardWrapper = styled.View`
    ${softShadow};
    shadowColor: ${props => props.theme.SECONDARY_BACKGROUND_COLOR};
    width: 100%;
    padding: 10px;
    backgroundColor: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
    borderRadius: 7px;
`

const EventTitleWrapper = styled.View`
    display: flex;
    flexDirection: row;
    flexWrap: wrap;
    alignItems: center;
`

const BoldColoredText = styled(CustomText)`
    fontFamily: ${_default.bold};
    color: ${props => props.theme.THEME_COLOR_DARK};
`

const Description = styled(CustomText)`
    marginTop: 5px;
    marginBottom: 20px;
`

const EventImage = styled.Image`
    width: 100%;
    height: 150px;
    resizeMode: cover;
    borderRadius: 7px;
`

const styles = StyleSheet.create({
    eventTitleText: {
        marginHorizontal: 2,
    }
})