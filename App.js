import React, {useState} from 'react';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Navigator from './navigation/Navigator';

const getFonts = () => {
 return Font.loadAsync({
     'rooters' : require('./assets/font/rooters/Rooters.ttf'),
     'rooters-italic' : require('./assets/font/rooters/RootersItalic.ttf'),
 })
};

export default function App({navigation}) {
    const [fontsLoadead, setFontsLoaded] = useState(false);

    if (fontsLoadead){
        return(
            <Navigator navigation={navigation}/>
        )
    }else{
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={()=>setFontsLoaded(true)}
                onError={console.warn}
            />
        );
        
    }
    
}