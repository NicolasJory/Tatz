import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, StatusBar, Image, Dimensions} from 'react-native';
import { Ionicons}  from '@expo/vector-icons'; 

const width = Dimensions.get('window').width;
const height = width * 0.16;


export default class MessageTopBar extends React.Component {
    render() {
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor='rgb(204, 179, 255)' barStyle={'dark-content'}/>
                <View style={styles.header}>
                    <View style={styles.topStyle} >
                        <TextInput onContentSizeChange={ this._onTextContentSizeChange }numberOfLines={3} multiline={true} style={styles.textStyle} placeholder="Type text here"/>
                    </View>
                    <View style={styles.icons}>
                        <Ionicons  style={styles.iconStyle} color = 'rgba(96, 44, 201, 1)' size={(width/20)} name="send"/>
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
        backgroundColor: 'rgb(204, 179, 255)',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: 'rgba(96, 44, 201, 1)',
        justifyContent: 'center',
    },
        header:{
            justifyContent: 'center',
            height: (width/8),
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
                    borderRadius: 25,
                    borderColor: 'rgba(96, 44, 201, 1)',
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