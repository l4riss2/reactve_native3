import React ,{useState} from 'react';
import {View,Text,TextInput} from 'react-native';
import {styles} from './styles';


export function SignIn(){
  const [text,setText] = useState ("Vc não digitou nasa ainda");
  return(
    <View style={styles.container}>
     <Text>Hello World</Text>
     <TextInput style={styles.input}
     onChangeText={setText}/>
      <Text>
        Você digitou:{text}
      </Text>
    </View>
  );
}
