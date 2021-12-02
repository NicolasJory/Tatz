import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, StatusBar, Image, Dimensions} from 'react-native';
import { Ionicons}  from '@expo/vector-icons'; 

const width = Dimensions.get('window').width;
const height = width * 0.2;


export default class MessageTopBar extends React.Component {
    render() {
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.topStyle} >
                        <TextInput onContentSizeChange={ this._onTextContentSizeChange }numberOfLines={3} multiline={true} style={styles.textStyle} placeholder="Type text here"/>
                    </View>
                    <View style={styles.icons}>
                        <Ionicons  style={styles.iconStyle} color = {global.contrastColor} size={(width/20)} name="send"/>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
     _onTextContentSizeChange = (event) => {
            
    }
}

const styles = StyleSheet.create({
    container:{
        width,
        height: height,
        backgroundColor: global.color,
        borderTopWidth: 1,
        borderColor: global.contrastColor,
        justifyContent: 'center',
    },
        header:{
            justifyContent: 'center',
            height: (width/7),
        },
            topStyle:{
                margin:(width/30),   
                flexWrap: 'wrap', 
                alignItems: 'flex-start',
                flexDirection:'row', 
            },
                textStyle:{
                    paddingLeft: (width/25),
                    paddingRight: (width/12),
                    paddingVertical:(width/100),
                    fontSize: (width/25),
                    marginLeft: (width/50),
                    color: 'black',
                    width: (width/1.25),
                    backgroundColor: "white",
                    borderRadius: 15,
                    borderColor: global.middleColor,
                    borderWidth: 1,
                    textAlignVertical: "top",
                    
                },
            icons:{
                flexDirection:'row',
                right:0,
                position: 'absolute',
                alignItems:'center',
            },
                iconStyle:{
                    marginRight: (width/20),
                },
});