import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions} from 'react-native';
import { Icon } from 'react-native-elements'

const width = Dimensions.get('window').width;
const height = width * 0.13;


const IdeaTopBar = ({navigation}) => {
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor='rgb(204, 179, 255)' barStyle={'dark-content'}/>
                <View style={styles.header}>
                    <View styl={styles.titleStyle}>
                        <Text style={styles.textStyle}>TATZ</Text>
                    </View>
                    <View style={styles.icons}>
                        <Icon style={styles.iconStyle} color = 'rgba(96, 44, 201, 1)' size={(width/20)} type="entypo" name="squared-plus" onPress={() => navigation.navigate('Add')}/>
                        <Icon style={styles.iconStyle} color = 'rgba(96, 44, 201, 1)' size={(width/20)} type="feather" name="settings" onPress={() => navigation.navigate('Settings')}/>
                    </View>
                </View>
            </SafeAreaView>
        )
    
}

const styles = StyleSheet.create({
    container:{
        width,
        height, 
        backgroundColor: 'rgb(204, 179, 255)',
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(96, 44, 201, 1)',
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
                    color: 'rgba(96, 44, 201, 1)',
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

export default IdeaTopBar;