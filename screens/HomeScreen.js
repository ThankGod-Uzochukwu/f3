import { StyleSheet, Text, View , Image} from 'react-native'
import {apple} from '../assets/apple.jpg'
import {beans} from '../assets/beans.webp'
import {cocoa} from '../assets/cocoa.webp'
import {rice} from '../assets/rice.jpg'
import {vegetables} from '../assets/vegetables.png'
import {yam} from '../assets/yam.webp'
import React from 'react'

const HomeScreen = () => {
  return (
    <View>
      <View>
        <Text>What we Offer!</Text>
      </View>
      <View style={styles.root}>
        <Image source={meat} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain' /> 
      </View>  
      <View style={styles.root}>
        <Image source={yam} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain' /> 
        <Image source={vegetables} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain' /> 
      </View>  
      <View style={styles.root}>
        <Image source={beans} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain' /> 
        <Image source={cocoa} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain' /> 
      </View>  
      <View style={styles.root}>
        <Image source={rice} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain' /> 
        <Image source={apple} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain' /> 
      </View>  
      <Text> Your Body Will Thank You.</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})