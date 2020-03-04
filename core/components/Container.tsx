import React, { Children } from 'react';
import { StyleSheet, Text, View } from 'react-native';


const ContainerComponent=props=>{
    return(
        <View style={{...styles.grid,...props.style}}>
            {props.children}
        </View>
    );
}

const styles=StyleSheet.create({
    grid:{
        paddingHorizontal:5,
        width:'100%'
    }
});

export default ContainerComponent;