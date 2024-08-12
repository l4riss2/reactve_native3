import React from 'react';
import {View,Text,TextInput} from 'react-native';
import {SignIn} from './src/screens/index';
import {useFonts} from 'expo-font';
import {Inter_400Regular,Inter_500Medium} from '@expo-google-fonts/inter';
import {Rajdhani_500Medium, Rajdhani_700ld} from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';
export default function App(){
 const [fontsLoaded] = useFonts({
  Inter_400Regular,
  Inter_500Medium,
  Rajdhani_500Medium, 
  Rajdhani_700ld
 });
 
 if (!fontsLoaded){
  return<AppLoading/>
 }
 
  return(
    <>
     <StatusBar barStyle='light-content'backgroundColor = {"transparent"} translucent/>
    <SignIn/>
    </>
  );

  const flex = {} => {
   return(
    <View style={[styles.container,{flexDirection:'column',},]}>
      <View style={{flex:1,backgroundColor:'gray'}}/>
      <View style={{flex:1,backgroundColor:'gray'}}/>
      <View style={{flex:1,backgroundColor:'gray'}}/>
    </View>
   )
   
   const style= StyleSheet.create({
   container:{
    flex:1,
    padding:20,
   }
   })
  }
} 