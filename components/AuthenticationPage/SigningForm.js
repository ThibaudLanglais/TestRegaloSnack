import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";
import HomeStyles from "../../styles/HomeStyles";
import _default from "../../themes/default";
import CustomText from "../customText";
import RoundedButton from "../RoundedButton";

export default function SigningForm(){

    const navigation = useNavigation();
    const [isSigningUp, setSigningUp] = useState(false);

    return (
            <View style={styles.formWrapper}>
                <View style={{flex: 1}}>
                    {isSigningUp &&
                        <>
                            <TextInput style={GlobalStyles.textInput} placeholder="Nom" />
                            <TextInput style={GlobalStyles.textInput} placeholder="Prénom" />
                        </>
                    }
                    <TextInput style={GlobalStyles.textInput} placeholder="Adresse e-mail" />
                    <TextInput contextMenuHidden secureTextEntry style={GlobalStyles.textInput} placeholder="Mot de passe" />
                    {/* Bouton se connecter */}
                    {!isSigningUp && 
                    <TouchableOpacity>
                        <CustomText style={HomeStyles.forgottenPassword}>Mot de passe oublié</CustomText>
                    </TouchableOpacity>
                    }
                    {/* Boutons de connexion via Facebook et Google */}
                    <View style={styles.socialWrapper}>
                        <RoundedButton 
                            buttonStyle={[styles.socialButton, styles.facebookButton]}
                            logoStyle={styles.facebookLogo}
                            underlayColor={_default.facebookDarkBlue} 
                            icon={{name: "facebook", fill: "white", height: 30, width: 30}} 
                            color={_default.secondary}
                            />
                        <RoundedButton 
                            buttonStyle={[styles.socialButton, styles.googleButton]}
                            logoStyle={styles.facebookLogo}
                            color={_default.primary} 
                            focusColor={'white'} 
                            underlayColor={_default.googleDark} 
                            icon={{name: "google", fill: "white", height: 30, width: 30}} 
                        />
                    </View>
                </View>
                <RoundedButton 
                    onPressFunction={()=> navigation.navigate("HomeSignedIn")} 
                    underlayColor={'white'} 
                    text={isSigningUp ? "S'inscrire" : "Se connecter"}
                    buttonStyle={styles.authenticationButton}
                    textStyle={styles.authenticationText}
                />
                <View style={styles.switchWrapper}>  
                    <CustomText style={[styles.switchAuthText]}>
                        {isSigningUp ? "Déjà membre ?" : "Pas encore de compte ?"}
                    </CustomText>
                    <TouchableOpacity onPress={() => setSigningUp(!isSigningUp)} style={styles.switchButton} activeOpacity={1}>
                        <CustomText style={[styles.switchAuthText, styles.switchButtonText]}>{isSigningUp ? "Se connecter" : "S'inscrire"}</CustomText>
                    </TouchableOpacity>
                </View>
            </View>
            /* les deux barres blanches avec le 'ou' au milieu */
            /* <View style={HomeStyles.viewOr}>
                <View style={HomeStyles.viewOrSpan}></View>
                <CustomText style={HomeStyles.viewOrText}>ou</CustomText>
                <View style={HomeStyles.viewOrSpan}></View>
            </View> */
    )
}

const styles = StyleSheet.create({
    formWrapper: {
        width: '100%',
        marginTop: 20,
        flex: 1
    },
    authenticationButton: {
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 10,
    },
    authenticationText: {
        fontFamily: _default.bold,
    },
    switchAuthText: {
        fontSize: 12,
        textAlign: 'center',
        color: 'white',
    },
    switchButton: {
        marginLeft: 3,
    },
    switchButtonText: {
        textDecorationLine: 'underline',
        textDecorationColor: 'white'
    },
    switchWrapper: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    socialButton: {
        width: 50,
        height: 50,
        paddingVertical: 0,
        paddingHorizontal: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    facebookButton: {
        backgroundColor: _default.facebookBlue,
    },
    googleButton: {
        backgroundColor: 'white',
        marginLeft: 10
    },
    socialWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    }
})