import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TouchableOpacityProps, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { Appearance, useColorScheme, } from 'react-native-appearance';
import { ColorScheme } from './theme';

declare type ButtonProps = TouchableOpacityProps & {
    children?: any,
    styles?:StyleProp<ViewStyle>,
}



export function Button({ children, onPress, disabled,styles }: ButtonProps): JSX.Element {
    const colorScheme = useColorScheme();
    return (

        //OLD
        // <TouchableOpacity onPress={onPress} disabled={disabled} style={{ backgroundColor: ColorScheme[colorScheme].primary, padding: 6, borderRadius: 14, height: 32, justifyContent: 'center', alignItems: 'center', marginHorizontal: 1 }}>
        //     <Text style={{ color: "white" }}> {children}</Text>
        // </TouchableOpacity>
        

        //NEW
        <TouchableOpacity onPress={onPress} disabled={disabled} style={[style.button,styles]}>
            <Text style={{ color:"black"}}> {children}</Text>
        </TouchableOpacity>
    );
}

export function ButtonFlat({ children, onPress, disabled }: ButtonProps): JSX.Element {
    const colorScheme = useColorScheme();
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style={{ backgroundColor: ColorScheme[colorScheme].primary, padding: 6, height: 32, margin: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: "white" }}> {children}</Text>
        </TouchableOpacity>
    );
}



export function ButtonSocial({children,onPress,disabled,styles}:ButtonProps):JSX.Element {
    return(
        <TouchableOpacity onPress={onPress} disabled={disabled} style={[style.button,styles]}>
            {children}
        </TouchableOpacity>
    );
}


const style=StyleSheet.create({
    button:{
        padding: 6, 
        borderRadius: 20, 
        height: 45, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginHorizontal: 1,
        color:'black'
    }
})