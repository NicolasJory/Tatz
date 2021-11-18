import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, TextInput, Dimensions} from 'react-native';
import { Icon } from 'react-native-elements';
import { Ionicons}  from '@expo/vector-icons'; 
import { Button } from 'react-native-elements/dist/buttons/Button';

const width = Dimensions.get('window').width;
const height = width * 0.20;

const Delete = () => (
    alert("Delete de la liste des filtres actifs !!! a faire !!!")
  );

  const Filter = [
    {type: "New School"},
    {type: "B & W"},
    {type: "Dot-work"},
    {type: "Japanese"},
    {type: "Old School"},
    {type: "New School"},
    {type: "B & W"},
]

export default class SearchTopBar extends React.Component {
    navigation;
    render() {
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor='rgb(204, 179, 255)' barStyle={'dark-content'}/>
                <View style={styles.header}>
                    <View style={styles.topStyle} >
                        <TextInput style={styles.searchStyle} placeholder="Search here ..."/>
                    </View>
                    <View style={styles.icons}>
                        <Icon style={styles.iconStyle, {marginRight:(width/11)}} color = 'rgba(96, 44, 201, 1)' size={(width/25)} type="entypo" name="map" onPress={() => this.props.navigation.navigate('Map')}/>
                        <Icon style={styles.iconStyle} color = 'rgba(96, 44, 201, 1)' size={(width/20)} type="feather" name="settings" onPress={() => this.props.navigation.navigate('Settings')}/>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.filterIconStyle}>
                        <Ionicons style={styles.iconStyle, {marginRight:(width/12)}} color = 'rgba(96, 44, 201, 1)' size={(width/14)} name="options-outline"/>
                    </View>
                    {Filter.map((item, index) => {
                        if (index == 3) {
                            return(
                                <View key={index} style={styles.filterStyle}>
                                    <Text style={styles.filterTextStyle}>
                                            ...  
                                    </Text>    
                                </View>
                            )
                        }else if(index < 3){
                            return (
                                <View key={index} style={styles.filterStyle}>
                                    <Text style={styles.filterTextStyle}>
                                        {item.type}  
                                    </Text>
                                    <Button
                                            onPress={Delete}
                                            title="✖"
                                        />         
                                </View>
                                )
                            }    
                        }
                              
                    )}
                    
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width,
        backgroundColor: 'rgb(204, 179, 255)',
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(96, 44, 201, 1)',
        justifyContent: 'center',
    },
        header:{
            justifyContent: 'center',
            height: (width/5.5),
        },
            
            topStyle:{
                margin:(width/50),    
            },

                searchStyle:{
                    paddingLeft: (width/25),
                    paddingRight: (width/12),
                    paddingVertical:(width/100),
                    fontSize: (width/25),
                    marginLeft: (width/50),
                    color: 'black',
                    fontFamily: "rooters",
                    width: (width/1.25),
                    backgroundColor: "white",
                    borderRadius: 25,
                    borderColor: 'rgba(96, 44, 201, 1)',
                    borderWidth: 1,
                },
            icons:{
                flexDirection:'row',
                right:25,
                position: 'absolute',
                alignItems:'center',
            },
                iconStyle:{
                    marginRight: (width/20),
                },
        body:{
            flexDirection: 'row'
        },
            filterIconStyle:{
                marginLeft:(width/20),
                marginBottom: (width/50),
                flexDirection:'row',
                alignItems:'center',
            },
            filterStyle:{
                marginBottom: (width/50),
                marginHorizontal: (width/300),
                flexDirection:'row',
                alignItems:'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(96, 44, 201, 1)',
                borderRadius: 25,
                paddingHorizontal: (width/50),
            },
                filterTextStyle:{
                    fontSize: (width/30),
                    color: 'white',
                },
                
});