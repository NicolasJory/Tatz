import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions} from 'react-native';
import { Icon } from 'react-native-elements'

const width = Dimensions.get('window').width;
const height = width * 0.13;


const ProfilTopBar = ({navigation}) => {
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor={global.color} barStyle={'dark-content'}/>
                <View style={styles.header}>
                    <View styl={styles.titleStyle}>
                        <Text style={styles.textStyle}>Your Username</Text>
                    </View>
                    <View style={styles.icons}>
                        <Icon style={styles.iconStyle} color = {global.contrastColor} size={(width/20)} type="feather" name="settings" onPress={() => navigation.navigate('Settings')}/>
                    </View>
                </View>
            </SafeAreaView>
        )
    
}

const styles = StyleSheet.create({
    container:{
        width,
        height, 
        backgroundColor: global.color,
        borderBottomWidth: 1,
        borderBottomColor: global.contrastColor,
        justifyContent: 'center',
    },
        header:{
            justifyContent: 'center',
        },
            titleStyle:{
                flexDirection:'row',
                position: 'absolute',
                margin:(width/50),
            },
                textStyle:{
                    fontSize: (width/15),
                    marginLeft: (width/15),
                    color: global.contrastColor,
                    fontFamily: 'rooters',
                },
            icons:{
                flexDirection:'row',
                right:10,
                position: 'absolute',
            },
                iconStyle:{
                    marginRight: (width/30),
                }
                
});

export default ProfilTopBar;