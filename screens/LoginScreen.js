import { Alert, Button, Image, SafeAreaView, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, useWindowDimensions, TouchableOpacity } from 'react-native'
import f3 from '../assets/f3.png'
import 'react-native-url-polyfill/auto'
// import { supabase } from '../lib/supabase'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage';


const supabase = createClient(
  "https://vrxcmwinewvdehiebuyd.supabase.co", 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyeGNtd2luZXd2ZGVoaWVidXlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIwMDE1NDQsImV4cCI6MjAwNzU3NzU0NH0.ewReMBvhVref62Zdc5bdMSThD-0JkcqpNCdpphc85-w")

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function signInWithEmail() {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    
  };

//   async function signInWithEmail(){
    
// const { data, error } = await supabase.auth.signInWithPassword({
//   email: 'example@email.com',
//   password: 'example-password',
// })
//   if (error) {
//     alert(error.message)
//   } else {
//     null
//   }

//   }

  const {height} = useWindowDimensions();

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Image source={f3} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain' /> 
      </View>  
      <Text style={styles.title_text}>Fresh From Farm</Text>
      <KeyboardAvoidingView style={styles.inputs}>
        <TextInput
        InputLeftElement =<MaterialIcons name="email" size={24} color="black" />
        placeholder='Enter Email'
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input_text} />

        <TextInput
        placeholder='Enter Password'
        value={password}
        onChangeText={ text => setPassword(text)}
        secureTextEntry
        style={styles.input_text} />

        <TouchableOpacity style={{flexDirection: 'row', marginLeft: '6%', }}>
          <Text style={styles.links}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', margin: '5%', }}>
                <Text style={styles.account}>No Account?     </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.links}>Register</Text>
              </TouchableOpacity>
            </View>
        <Button title="Login" onPress={signInWithEmail} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
// {navigation}

export default LoginScreen

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    paddingTop: 50,
    paddingLeft: 50,
    paddingRight: 50,
  },
  logo:{
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
    borderRadius: 20,
  },
  title_text:{
    color: "#22BB1F",
    letterSpacing: 5,
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: "italic",
    paddingTop: -10,
    paddingLeft: 25,
    paddingBottom: 20
  },
  input_text:{
    borderRadius: 10,
    border: 2,
    backgroundColor: "#ffffff",
    width: '95%',
    margin: 10,
    padding: 15,
    height: "13%"
  },
  links:{
    color: 'blue',
    fontSize: 17
  },
  account:{
    fontSize: 17,
    marginLeft: "2%"
  }
})