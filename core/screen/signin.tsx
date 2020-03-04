import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ContainerComponent from './../components/Container';
import { ColorScheme } from './../components/theme';
import LogoComponent, { Icon } from '../components/Icon';
import InputTextComponent from './../components/TextInput';
import { Button, ButtonFlat, ButtonSocial } from '../components/Button';




const SignInScreen = props => {
    return (
        <View style={styles.container}>
            <ContainerComponent style={styles.header}>
                <LogoComponent></LogoComponent>
            </ContainerComponent>
            <ContainerComponent style={styles.content}>
                <InputTextComponent></InputTextComponent>
                <InputTextComponent></InputTextComponent>
            </ContainerComponent>
            <ContainerComponent style={styles.footer}>
                <View style={styles.containerButton}>
                    <Button styles={styles.buttonLogin}>Login</Button>
                </View>
                <View style={styles.containerButton}>
                    <View style={styles.buttonSocial}>
                        <ButtonSocial styles={styles.social}>
                            <Icon name={'googleplus'} size={20} color={'black'} type={'AntDesign'}></Icon>
                        </ButtonSocial>
                        <ButtonSocial>
                            <Icon name={'facebook-f'} size={20} color={'black'} type={'FontAwesome'}></Icon>
                        </ButtonSocial>
                        <ButtonSocial>
                            <Icon name={'twitter'} size={20} color={'black'} type={'AntDesign'}></Icon>
                        </ButtonSocial>
                    </View>

                </View>
            </ContainerComponent>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 20,
    },
    header: {
        flex: 1.5,
        marginTop: 5,

        padding: 10,
        width: '100%',
        backgroundColor: 'red'
    },
    content: {
        flex: 1,
        width: '100%',
        backgroundColor: 'blue',
        padding: 20,
    },

    // Footer
    footer: {
        flex: 1.5,
        justifyContent: 'flex-start',
    },
    containerButton: {
        width: '100%',
        marginVertical: 10,
        
    },
    buttonLogin:{
        backgroundColor:'#38d39f',
        shadowColor: "#38d39f",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    buttonSocial: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    social:{

    }
});


export default SignInScreen;

