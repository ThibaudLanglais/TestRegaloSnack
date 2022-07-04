import LogoWhite from '../assets/Logo-white.svg';
import Facebook from '../assets/Facebook.svg';
import Google from '../assets/Google.svg';
import IconFaq from '../assets/Icon-faq.svg';
import IconFaqSelect from '../assets/Icon-faq-select.svg';
import Account from '../assets/account.svg';
import Cross from '../assets/cross.svg';
import Add from '../assets/add.svg';
import User from '../assets/user.svg';
import Lock from '../assets/lock.svg';
import Trash from '../assets/trash.svg';
import SignOut from '../assets/signout.svg';
import Settings from '../assets/settings.svg';
import ChevronRight from '../assets/chevron-right.svg';
import { Image, StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';


export default function ExternalSvg({style, icon}){
    const width = icon.width ? icon.width : "100%";
    const height = icon.height ? icon.height : "100%";
    const fill = icon.fill ? icon.fill : 'black';
    const imgStyle = {
      width: width, 
      height: height,
      resizeMode: 'contain',
    }

    function renderSwitch(param) {
        switch(param) {
          case 'logo-white':
            return <LogoWhit width={width} height={height} fill={fill}/>;
          case 'facebook':
            return <Facebook width={width} height={height} fill={fill}/>;
          case 'google':
            return <Google width={width} height={height} fill={fill}/>;
          case 'faq':
            return <IconFaq width={width} height={height} fill={fill}/>;
          case 'faq-select':
            return <IconFaqSelect width={width} height={height} fill={fill}/>;
          case 'cross':
            return <Cross width={width} height={height} fill={fill}/>;
          case 'account':
            return <Account width={width} height={height} fill={fill}/>;
          case 'add':
            return <Add width={width} height={height} fill={fill}/>;
          case 'user':
            return <User width={width} height={height} fill={fill}/>;
          case 'lock':
            return <Lock width={width} height={height} fill={fill}/>;
          case 'trash':
            return <Trash width={width} height={height} fill={fill}/>;
          case 'signout':
            return <SignOut width={width} height={height} fill={fill}/>;
          case 'settings':
            return <Settings width={width} height={height} fill={fill}/>;
          case 'chevron-right':
            return <ChevronRight width={width} height={height} fill={fill}/>;
          case 'logo-color':
            return <Image style={imgStyle} source={require('../assets/logo-color.png')}/>;
          default:
            return <Text>Erreur chargement image</Text>;
        }
    }
    return <Animated.View style={[styles.wrapper, style]}>
      {renderSwitch(icon.name)}
    </Animated.View>
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  }
})