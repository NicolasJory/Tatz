import React, { useState } from 'react';
import { StyleSheet,TouchableHighlight, View, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const TabArr = [
  { type: "MaterialIcons", activeIcon: 'grid-on'},
  { type: "antdesign", activeIcon: 'tagso'},
  { type: "antdesign", activeIcon: 'profile'},
];

export default function profilsBar () {
  const [isPress, setIsPress] = useState(0);
  return(
      <View style={styles.tabNav}>
        {TabArr.map((item,index) => {
          return (
              <TouchableHighlight
                  key={index} 
                  activeOpacity={1}
                  underlayColor= {global.contrastColor}
                  style={isPress===index ? styles.containerPress : styles.container} 
                  onPress={() => {setIsPress(index)}}
              >
                        <Icon  color={isPress===index ? 'white' : 'rgb(100, 100, 100)'} size={width/14} type={item.type} name={item.activeIcon}/>
              </TouchableHighlight>
          )
        })}
      </View>
    )   
}

const styles = StyleSheet.create ({
  tabNav:{
      height: height*0.05,
      flexWrap: 'wrap', 
      flexDirection:"row",
      justifyContent:'space-around', 
      
    },
    containerPress: {
      flex: 1,
      justifyContent: 'center',
      height: height*0.05,    
      width:(width/5),
      backgroundColor: global.color,
      borderBottomColor: global.contrastColor,
      borderBottomWidth:4,
    },
    container:{
      flex: 1,
      justifyContent: 'center',
      height: height*0.05,    
      width:(width/5),
      backgroundColor: global.color, 
      borderBottomColor:global.contrastColor,
      borderBottomWidth:1, 
    }
  });
