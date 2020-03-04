import React  from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import SignInScreen from './screen/signin';



export default function Core(){
    return(
        <SignInScreen></SignInScreen>
    // <AppearanceProvider>
    //   <Provider/>
    // </AppearanceProvider>
    );
}