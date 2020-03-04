import React from 'react';
import { StyleSheet, View, Image } from 'react-native';


const LogoComponent=props=>{
    return(
        <View>
            <Image resizeMode='contain' style={{width: '100%', height: 200}} source={{uri:'https://image.freepik.com/free-vector/flat-house-logo-design_128042-10.jpg'}}>
                {props.children}
            </Image>
        </View>
    );
}

import {
    SimpleLineIcons,
    Octicons,
    MaterialIcons,
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    Ionicons,
    Foundation,
    MaterialCommunityIcons,
    Zocial,
} from '@expo/vector-icons';
export type TypeIcon =
    | 'AntDesign'
    | 'Entypo'
    | 'EvilIcons'
    | 'Feather'
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'Foundation'
    | 'Ionicons'
    | 'MaterialCommunityIcons'
    | 'MaterialIcons'
    | 'Octicons'
    | 'SimpleLineIcons'
    | 'Zocial';

import { StyleProp, ViewStyle } from 'react-native';

import { Appearance, useColorScheme, } from 'react-native-appearance';
import { ColorScheme } from './theme';

interface IconProps {
    type?: TypeIcon;

    size?: number;
    name: string;

    color?: string;
    style?: StyleProp<ViewStyle>;
}



export function Icon({ name, color, size = 24, style, type }: IconProps): JSX.Element {
    const colorScheme = useColorScheme();

    let I = Ionicons;
    switch (type) {
        case 'AntDesign':
            I = AntDesign;
            break;
        case 'Entypo':
            I = Entypo;
            break;
        case 'EvilIcons':
            I = EvilIcons;
            break;
        case 'Feather':
            I = Feather;
            break;
        case 'FontAwesome':
            I = FontAwesome;
            break;
        case 'Foundation':
            I = Foundation;
            break;
        case 'Ionicons':
            I = Ionicons;
            break;
        case 'MaterialCommunityIcons':
            I = MaterialCommunityIcons;
            break;
        case 'MaterialIcons':
            I = MaterialIcons;
            break;
        case 'Octicons':
            I = Octicons;
            break;
        case 'SimpleLineIcons':
            I = SimpleLineIcons;
            break;
        case 'Zocial':
            I = Zocial;
            break;
        default:
            I = Ionicons;
    }

    return (
        <I color={color? color:ColorScheme[colorScheme].icon} size={size} name={name} style={style} />
    );
}


export default LogoComponent;