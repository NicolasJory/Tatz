import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions} from 'react-native';
import { Icon } from 'react-native-elements'

const width = Dimensions.get('window').width;
const height = width * 0.13;


const HomeTopBar = ({navigation}) => {
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor={global.color} barStyle={'dark-content'}/>
                <View style={styles.header}>
                    <View style={{flex:5}}>
                        <Text style={styles.textStyle}>TATZ</Text>
                    </View>
                    <View style={{flex:1, flexDirection:'row', justifyContent:'space-around'}}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Add')}> 
                            <Icon color = {global.contrastColor} size={(width/18)} type="entypo" name="squared-plus" />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Settings')}> 
                            <Icon color = {global.contrastColor} size={(width/18)} type="ionicons" name="settings" />
                        </TouchableOpacity>
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
            alignItems: 'center',
            flexDirection:'row',
        },
        textStyle:{
            fontSize: (width/15),
            marginLeft: (width/15),
            color: global.contrastColor,
            fontFamily: 'rooters',
        },
                
});

export default HomeTopBar;