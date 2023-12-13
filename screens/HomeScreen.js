import { StyleSheet, Text, View , Image, SafeAreaView} from 'react-native'
import apple from '../assets/apple.jpg'
import beans from '../assets/beans.webp'
import cocoa from '../assets/cocoa.webp'
import rice from '../assets/rice.jpg'
import vegetables from '../assets/vegetables.png'
import meat from '../assets/vegetables.png'
import yam from '../assets/yam.webp'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.texts}>What we Offer!</Text>
      </View>
<View style={styles.pics}>

<View>
  <View>
  <Image source={meat} style={styles.logo} resizeMode='contain' />
</View>
<View>
  <Image source={yam} style={[styles.logo]} resizeMode='contain' /> 
</View>
<View>
  <Image source={beans} style={[styles.logo]} resizeMode='contain' />
</View>
</View>


<View>
  <View>
  <Image source={cocoa} style={[styles.logo]} resizeMode='contain' />
</View>
<View>
  <Image source={rice} style={[styles.logo]} resizeMode='contain' />
</View>
<View>
  <Image source={apple} style={[styles.logo]} resizeMode='contain' /> 
</View>
</View>

       
</View>
      <Text style={styles.text}> Your Body Will Thank You.</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  logo:{
    width: 190,
    height: 150,
    borderRadius: 30,
    margin: 2
  },
  pics:{
    flexDirection:'row',
    marginTop: '20'
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },
  texts:{
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10
  },
})