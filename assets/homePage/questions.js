import { StyleSheet, View } from "react-native";
import CustomText from "../../components/customText";
import ExternalSvg from "../../components/ExternalSvg";
import Strong from "../../components/Strong";
import GlobalStyles from "../../styles/GlobalStyles";
import _default from "../../themes/default";
import CollaspedQuestionsContext from "../../contexts/CollaspedQuestionsContext";

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontFamily: _default.regular,
        marginLeft: 10,
    },
    content: {
        ...GlobalStyles.p,
        marginTop: 10,
        paddingLeft: 30,
    },
})

const questions = [
    {
        "title": <CollaspedQuestionsContext.Consumer>
            {(context) => 
                <CustomText style={[styles.title, {color: context.collapsed ? _default.orangeLightHome : _default.orangeDark}]}>Qui est derrière Régalo ?</CustomText>
            }
        </CollaspedQuestionsContext.Consumer>,
        "content": <CustomText style={styles.content}>
            Regalo est un site créé en 2021 d'<Strong>une équipe de 5 personnes</Strong> ! Après de nombreuses réflexions (et complications) sur les cadeaux à offrir aux anniversaires, à Noël ou en soirée, nous avons développé une solution sur-mesure pour connaître <Strong>les préférences de nos proches</Strong>. Notre volonté : faire profiter à tous d’un réseau social fun qui permet de faire plaisir à tous les coups !
        </CustomText>
    },
    {
        "title": <CollaspedQuestionsContext.Consumer>
        {(context) => 
        <CustomText style={[styles.title, {color: context.collapsed ? _default.orangeLightHome : _default.orangeDark}]}>Régalo est-il payant ?</CustomText>
        }
        </CollaspedQuestionsContext.Consumer>,
        "content": <CustomText style={styles.content}>
            Non, <Strong>le site est totalement gratuit</Strong> ! Vous pourrez profiter de notre solution sans avoir à dépenser le moindre centime, ni à vous abonner. Notre modèle de rémunération est pensé autour des partenariats avec les marques.
        </CustomText>
    },
    {
        "title": <CollaspedQuestionsContext.Consumer>
        {(context) => 
        <CustomText style={[styles.title, {color: context.collapsed ? _default.orangeLightHome : _default.orangeDark}]}>Comment inviter mes amis ?</CustomText>
        }
        </CollaspedQuestionsContext.Consumer>,
        "content": <CustomText style={styles.content}>
            Il n’y a rien de plus simple pour <Strong>inviter ses amis</Strong> : Dans l'onglet Amis il suffit d'ajouter leurs mails ou de les contacter via votre compte Facebook ! Ils recevront ainsi une notification sur cette demande, et n’auront plus qu’à créer un compte sur Regalo lorsqu’ils arriveront sur notre site. Vous pouvez aussi directement partager l'url du site https://www.regalo.gift/
        </CustomText>
    },
    {
        "title": <CollaspedQuestionsContext.Consumer>
        {(context) => 
        <CustomText style={[styles.title, {color: context.collapsed ? _default.orangeLightHome : _default.orangeDark}]}>Mes données sont-elles protégées ?</CustomText>
        }
        </CollaspedQuestionsContext.Consumer>,
        "content": <CustomText style={styles.content}>
        En développant cette solution, il nous était primordial de <Strong>protéger les données</Strong> qui y sont diffusées. Ainsi, vous disposerez de <Strong>3 niveaux de confidentialité</Strong> pour les idées cadeaux inscrites sur le site : le cercle large, le cercle proche et le cercle intime ! De plus, ces données sont stockées sur un serveur sécurisé, situé en France.</CustomText>
    }
]

export default questions;