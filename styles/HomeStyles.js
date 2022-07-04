import { StyleSheet } from 'react-native';
import _default from '../themes/default';

export default StyleSheet.create({
    firstContainer: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 50
    },
    regaloButton: {
        marginTop: 10,
        width: "100%"
    },
    title: {
        color: _default.secondary,
        textAlign: 'center',
    },
    text: {
        marginTop: 15,
        color: _default.secondary,
        textAlign: 'center',
    },
    viewOr:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
    viewOrSpan: {
        flex: 1,
        height: 2,
        backgroundColor: _default.bgPrimary
    },
    viewOrText:{
        fontSize: 20,
        color: _default.secondary,
        marginLeft: 20,
        marginRight: 20,
        fontFamily: _default.bold,
    },
    viewForm:{
        width: '100%'
    },
    forgottenPassword: {
        color: _default.secondary,
        textDecorationLine: 'underline',
        textDecorationColor: _default.secondary,
        textAlign: 'center',
        marginTop: 5
    },
    switchAuthMethod: {
        marginBottom: 20
    },
    switchAuthMethodText: {
        color: _default.secondary,
        marginBottom: 20,
        fontSize: 16,
    },
    stockContainer: {
        marginBottom: 15,
        marginTop: 15
    },
    stockImages:{
        width: '100%',
        borderRadius: 10,
        height: 250
    },
    stockOrangeTitle:{
        color: _default.orange,
        marginTop: 15,
        marginBottom: 10,
    },
    whiteTopRadius:{
        height: 70,
        backgroundColor: _default.bgPrimary,
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        transform: [
            { translateY: -35 },
            { scaleX: 1.1},
        ],
    },
    whiteBottomRadius:{
        height: 70,
        backgroundColor: _default.bgPrimary,
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        transform: [
            { translateY: -35 },
            { scaleX: 1.1},
        ],
    }
});