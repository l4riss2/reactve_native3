import { StyleSheet} from "react-native";
import {theme} from '../global/styles/theme';
export const styles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: theme.colors.backgorung
   },
   
   image : {
    width:'100%',
    height : 360
   },
   content :{
      marginTop: -40
   },
   title:{
      color:theme.colors.header,
      fontSize:40,
      marginBottom:16,
      textAlign:'center',
      fontFamily:theme.fonts.title700,
      lineHeight:25,
   },
   subtitle:{
      color: theme.colors.header,
      fontSize:15,
      marginBottom:64,
      textAlign:'center',
      marginBottom:64,
      lineHeight:25
   },
});