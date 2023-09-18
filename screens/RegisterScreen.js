import { Alert, Button, Image, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import f3 from '../assets/f3.png'
import 'react-native-url-polyfill/auto'
// import { supabase } from '../lib/supabase'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js'


const supabase = createClient(
  "https://vrxcmwinewvdehiebuyd.supabase.co", 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyeGNtd2luZXd2ZGVoaWVidXlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIwMDE1NDQsImV4cCI6MjAwNzU3NzU0NH0.ewReMBvhVref62Zdc5bdMSThD-0JkcqpNCdpphc85-w")

const RegisterScreen = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  async function signUpWithEmail() {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
  }

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
        <Text style={styles.title_text}>Sign Up</Text>
          <KeyboardAvoidingView style={styles.inputs}>
            {/* <TextInput
            InputLeftElement =<MaterialIcons name="name" size={24} color="black" />
            placeholder='Enter Name'
            value={name}
            onChangeText={text => setName(text)}
            style={styles.input_text} /> */}

            <TextInput
            InputLeftElement =<MaterialIcons name="email" size={24} color="black" />
            placeholder='Enter Email'
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input_text} />
            {/* <TextInput
            InputLeftElement =<MaterialIcons name="phone_number" size={24} color="black" />
            placeholder='Enter Phone Number'
            value={number}
            onChangeText={text => setNumber(text)}
            style={styles.input_text} /> */}

            <TextInput
            placeholder='Enter Password'
            value={password}
            onChangeText={ text => setPassword(text)}
            secureTextEntry
            style={styles.input_text} />
            {/* <TextInput
            placeholder='Confirm Password'
            value={password}
            onChangeText={ text => setPassword(text)}
            secureTextEntry
            style={styles.input_text} /> */}

            <View style={styles.in_texts}>
              <Text style={styles.account}>Have an account?</Text>
              <TouchableOpacity style={styles.texts}>
                <Text style={styles.links}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            
            <Button title="Register" onPress={() => signUpWithEmail()} />
          </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  title_text:{
    color: "#22BB1F",
    letterSpacing: 5,
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: "italic",
    paddingTop: -10,
    paddingLeft: 25,
    marginTop : '10%'
  },
  input_text:{
    borderRadius: 10,
    border: 2,
    backgroundColor: "#ffffff",
    width: '95%',
    margin: 10,
    padding: 15,
    height: "16%"
  },
  in_texts:{
    justifyContent: "space-evenly",
    margin: '1.5%'
  },
  texts:{
    margin: '1.5%'
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