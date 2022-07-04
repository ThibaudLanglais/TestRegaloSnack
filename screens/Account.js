import { View } from "react-native";
import { useTheme } from "styled-components";
import styled from "styled-components/native";
import CustomText from "../components/customText";
import ExternalSvg from "../components/ExternalSvg";
import TopbarLayout from "../components/Layouts/TopBarLayout";
import GlobalStyles from "../styles/GlobalStyles";
import { buttonMixin, softShadow } from "../styles/styledMixins";
import _default from "../themes/default";
import ThemePicker from "../components/Account/ThemePicker";
import { useRef } from "react";
import { Lock, Settings, User, Trash, LogOut } from "react-native-feather";

export default function Account(){
    const theme = useTheme();
    const themePicker = useRef(null);

    return (
        <TopbarLayout>
            <Wrapper contentContainerStyle={[{
                flexGrow: 1,
                justifyContent: 'space-between',
                padding: 15
            }]}>
                <View>
                    <Section>
                        <TitleWrapper>
                            <Settings color={theme.PRIMARY_TEXT_COLOR}/>
                            {/* <ExternalSvg style={{marginBottom: 10}} icon={{name: "settings", width: 30, height: 30, fill:theme.PRIMARY_TEXT_COLOR}}/> */}
                            <TitleText style={GlobalStyles.h3}>Général</TitleText>
                        </TitleWrapper>
                        <GeneralInputWrapper>
                            <CustomText style={{fontFamily: _default.bold}}>Thème</CustomText>
                            <GeneralButton onPress={() => themePicker.current?.show()}>
                                <GeneralButtonView>
                                    <CustomText>{theme.name}</CustomText>
                                    <ExternalSvg style={{marginBottom: 2, marginLeft: 5}} icon={{name: "chevron-right", width: 15, height: 12, fill: theme.PRIMARY_TEXT_COLOR}} />
                                </GeneralButtonView>
                            </GeneralButton>
                        </GeneralInputWrapper>
                    </Section>
                    <Section>
                        <TitleWrapper>
                            <User color={theme.PRIMARY_TEXT_COLOR}/>
                            {/* <ExternalSvg style={{marginBottom: 10}} icon={{name: "user", width: 30, height: 30, fill:theme.PRIMARY_TEXT_COLOR}}/> */}
                            <TitleText style={GlobalStyles.h3}>Mes informations</TitleText>
                        </TitleWrapper>
                        <FormWrapper>
                            <InputGroup>
                                <Label>Adresse e-mail</Label>
                                <StyledInput value="oui"/>
                            </InputGroup>
                            <InputGroup>
                                <Label>Nom d'utilisateur</Label>
                                <StyledInput value="non"/>
                            </InputGroup>
                            <InputGroup>
                                <Label>Adresse</Label>
                                <StyledInput value="peut-être"/>
                            </InputGroup>
                        </FormWrapper>
                        <ConfirmFormButton underlayColor={theme.THEME_COLOR_DARK}>
                            <DeleteAccountText>Modifier le profil</DeleteAccountText>
                        </ConfirmFormButton>
                    </Section>
                    <Section>
                        <TitleWrapper>
                            <Lock color={theme.PRIMARY_TEXT_COLOR}/>
                            {/* <ExternalSvg style={{marginBottom: 10}} icon={{name: "lock", width: 30, height: 30, fill:theme.PRIMARY_TEXT_COLOR}}/> */}
                            <TitleText style={GlobalStyles.h3}>Mot de passe</TitleText>
                        </TitleWrapper>
                        <FormWrapper>
                            <InputGroup>
                                <StyledInput contextMenuHidden secureTextEntry placeholder="Nouveau mot de passe" />
                            </InputGroup>
                            <InputGroup>
                                <StyledInput contextMenuHidden secureTextEntry placeholder="Confirmer le mot de passe" />
                            </InputGroup>
                        </FormWrapper>
                        <ConfirmFormButton underlayColor={theme.THEME_COLOR_DARK}>
                            <DeleteAccountText>Modifier le mot de passe</DeleteAccountText>
                        </ConfirmFormButton>
                    </Section>
                </View>
                <View>
                    <Section>
                        <TitleWrapper>
                            <LogOut color={theme.PRIMARY_TEXT_COLOR}/>
                            {/* <ExternalSvg style={{marginBottom: 10}} icon={{name: "signout", width: 30, height: 30, fill: theme.PRIMARY_TEXT_COLOR}}/> */}
                            <TitleText style={GlobalStyles.h3}>Se déconnecter</TitleText>
                        </TitleWrapper>
                        <SignOutButton onPress={() => null} underlayColor={theme.SECONDARY_BACKGROUND_COLOR}>
                            <SignOutText>Déconnexion</SignOutText>
                        </SignOutButton>
                    </Section>
                    <TitleWrapper>
                        <Trash color={theme.THEME_COLOR_DARK}/>
                        {/* <ExternalSvg style={{marginBottom: 10}} icon={{name: "trash", width: 30, height: 30, fill: theme.THEME_COLOR_DARK}}/> */}
                        <DeleteTitle style={GlobalStyles.h3}>Supprimer mon compte</DeleteTitle>
                    </TitleWrapper>
                    <DeleteAccount onPress={() => null} underlayColor={theme.THEME_COLOR_DARK}>
                        <DeleteAccountText>Supprimer le compte</DeleteAccountText>
                    </DeleteAccount>
                </View>
            </Wrapper>
            <ThemePicker ref={themePicker}/>
        </TopbarLayout>
    )
}

const Section = styled.View`
    marginBottom: 20px;
`
const TitleWrapper = styled.View`
    display: flex;
    flexDirection: row;
    marginBottom: 10px;
    alignItems: center;
`
const Wrapper = styled.ScrollView`
`
const TitleText = styled(CustomText)`
    marginLeft: 10px;
    marginTop: 5px;
`
const DeleteTitle = styled(CustomText)`
    color: ${props => props.theme.THEME_COLOR_DARK};
    marginTop: 5px;
    marginLeft: 10px; 
`
const DeleteAccount = styled.TouchableHighlight`
    ${buttonMixin};
    backgroundColor: ${props => props.theme.THEME_COLOR_DARK};
`
const DeleteAccountText = styled(CustomText)`
    fontFamily: ${_default.bold};
    color: ${props => props.theme.SECONDARY_TEXT_COLOR};
`

const SignOutButton = styled.TouchableHighlight`
    ${buttonMixin};
    backgroundColor: ${props => props.theme.SECONDARY_BACKGROUND_COLOR};
`
const SignOutText = styled(CustomText)`
    fontFamily: ${_default.bold};
    color: ${props => props.theme.SECONDARY_TEXT_COLOR};
`

const FormWrapper = styled.View`
    ${softShadow};
    padding: 15px;
    backgroundColor: ${props => props.theme.SECONDARY_BACKGROUND_COLOR}40;
    shadowColor: ${props => props.theme.SECONDARY_BACKGROUND_COLOR}10;
    borderRadius: 7px;
`
const InputGroup = styled.View`
    marginBottom: 10px;
`
const StyledInput = styled.TextInput`
    backgroundColor: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
    padding: 5px;
    borderRadius: 5px;
    marginTop: 3px;
`
const Label = styled(CustomText)`
    fontSize: 12px;
`
const ConfirmFormButton = styled.View`
    ${buttonMixin};
    backgroundColor: ${props => props.theme.THEME_COLOR};
    marginTop: 10px;
`

const GeneralInputWrapper = styled.View`
    display: flex;
    justifyContent: space-between;
    alignItems: center;
    flexDirection: row;
`
const GeneralButton = styled.TouchableOpacity`
    ${buttonMixin};
`
const GeneralButtonView = styled.View`
    display: flex;
    alignItems: center;
    flexDirection: row;
`