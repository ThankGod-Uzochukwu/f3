import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <LoginScreen /> */}
    //   {/* <RegisterScreen /> */}
    //   {/* <HomeScreen /> */}
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name='Login' component= {LoginScreen}/>
        <Stack.Screen options={{headerShown: false}} name='Register' component= {RegisterScreen}/>
        <Stack.Screen options={{headerShown: false}} name='Home' component= {HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#93E476',
  },
});
