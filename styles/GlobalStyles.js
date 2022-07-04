import { StyleSheet, Platform, StatusBar } from 'react-native';
import _default from '../themes/default';

const GlobalStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        position: 'relative',
        flex: 1,
    },
    topContainer: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    statusBarMargin: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    textInput: {
        height: 60,
        backgroundColor: _default.bgPrimary,
        color: _default.primary,
        width: '100%',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        fontFamily: _default.regular 
    },
    h1:{
        fontSize: 38,
        fontFamily: _default.bold,
    },
    h2: {
        fontSize: 30,
        fontFamily: _default.bold,
    },
    h3: {
        fontSize: 20,
        fontFamily: _default.bold,
    },
    p: {
        color: _default.primary,
        fontSize: 14,
        lineHeight: 24
    },
    textCenter: {
        textAlign: 'center',
    },
    whiteText: {
        color: _default.secondary,
    },
    bgPrimary: {
        backgroundColor: _default.bgPrimary,
    },
})

export default GlobalStyles;