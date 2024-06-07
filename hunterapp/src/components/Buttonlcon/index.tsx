import React from 'react';
import {Text,Image,View,TouchableOpacity} from 'react-native';

import DiscordIMG from '../../assets/discord.png'
import {styles} from './styles'

export function ButtonIcon (){
    return(
        <TouchableOpacity>
            <View>
                <Image/>            
            </View>
            <Text>
                Entrar com discord
            </Text>
        </TouchableOpacity>
    )
}