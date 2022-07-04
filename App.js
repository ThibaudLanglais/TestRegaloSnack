import { StyleSheet, SafeAreaView, StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import GlobalStyles from './styles/GlobalStyles';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './redux/themeReducer';
// import * as NavigationBar from 'expo-navigation-bar';
import HomeSignedIn from './screens/HomeSignedIn';
import Lists from './screens/Lists';
import Friends from './screens/Friends';
import Profile from './screens/Profile';
import Account from './screens/Account';
import ThemedContainer from './components/Theming/ThemedContainer';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { 
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic, 
  useFonts
} from '@expo-google-fonts/poppins'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
const store = configureStore({reducer: combineReducers({ themeReducer })}, null, applyMiddleware(thunk));
const theme = store.getState().themeReducer.theme;

export default function App() {

  const [fontsLoaded, error] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic, 
  })

  if(!fontsLoaded) return error ? <Text>{error}</Text> : <Text>App loading</Text>
  return (
    <GestureHandlerRootView style={styles.container}>
      <Provider store={store}>
        <ThemedContainer>
          <StatusBar barStyle={theme.STATUS_BAR_STYLE}  backgroundColor={theme.PRIMARY_BACKGROUND_COLOR} translucent={false}/>
          <SafeAreaView style={GlobalStyles.safeArea}>
            <NavigationContainer>
              <Stack.Navigator initialRouteName='Account' screenOptions={{headerShown: false, animation: 'fade'}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="HomeSignedIn" component={HomeSignedIn} />
                <Stack.Screen name="Lists" component={Lists} />
                <Stack.Screen name="Friends" component={Friends} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Account" component={Account} />
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaView>
        </ThemedContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
