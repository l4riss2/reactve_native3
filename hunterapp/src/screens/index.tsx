import React ,{useState} from 'react';
import {View,Text,TextInput,Image} from 'react-native';
import {styles} from './styles';
import IllustrationImg from '../../src/assets/illustrationImg.png'

export function SignIn(){
  const [text,setText] = useState ("Vc não digitou nada ainda");
  return(
    <View style={styles.container}>
       <Image source={} />
    </View>
  );
}
