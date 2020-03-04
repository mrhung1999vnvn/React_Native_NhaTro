import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { ColorScheme } from './theme';

const InputTextComponent = props => {
    return (
        <View style={style.container}>
            <View style={style.icon}>
                <Ionicons name={props.icon} size={30}></Ionicons>
            </View>
            <View style={style.input}>
                <View style={style.inputFill}>
                    <TextInput blurOnSubmit={true} autoCompleteType={props.type} style={style.inputText}  placeholder={'Enter here'} />
                </View>
            </View>
        </View>

    );
};


const style = StyleSheet.create({
    container: {
        marginVertical:5,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        borderColor:ColorScheme.light.border,
        borderWidth:1,
        padding:5,

    },
    //Icon
    icon: {
        width: '15%',
        borderRadius: 14,
        justifyContent:'center',
        alignItems:'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },


    //Text input
    input: {
        width: '80%',
        flexDirection: 'column',
    },
    inputTitle: {
        fontSize: 15,
        width: '100%',
        backgroundColor: '#fff'
    },
    inputFill: {
        width: '100%',
    },
    inputText: {
        borderBottomColor: '#e7e7e7',
        borderBottomWidth: 1,
        marginVertical: 10,
        zIndex: 999,
        fontSize: 16
    }
});

export default InputTextComponent;