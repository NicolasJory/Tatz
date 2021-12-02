import React, { useState } from 'react';
import { ScrollView,StyleSheet,TouchableHighlight, View, Dimensions, Image } from 'react-native';

const width = Dimensions.get('window').width;

const images = [
    {img: require('../../assets/publications/pub1.jpeg')},
    {img: require('../../assets/publications/pub2.jpg')},
    {img: require('../../assets/publications/pub3.jpg')},
    {img: require('../../assets/publications/pub4.jpg')},
    {img: require('../../assets/publications/pub3.jpg')},
    {img: require('../../assets/publications/pub4.jpg')},
    {img: require('../../assets/publications/pub5.jpg')},
    {img: require('../../assets/publications/pub6.jpg')},
    {img: require('../../assets/publications/pub7.jpg')},
    {img: require('../../assets/publications/pub1.jpeg')},
    {img: require('../../assets/publications/pub2.jpg')},
    {img: require('../../assets/publications/pub3.jpg')},
    {img: require('../../assets/publications/pub4.jpg')},
    {img: require('../../assets/publications/pub5.jpg')},
    {img: require('../../assets/publications/pub6.jpg')},
    {img: require('../../assets/publications/pub7.jpg')},
    {img: require('../../assets/publications/pub1.jpeg')},
    {img: require('../../assets/publications/pub2.jpg')},
    {img: require('../../assets/publications/pub3.jpg')},
    {img: require('../../assets/publications/pub4.jpg')},
    {img: require('../../assets/publications/pub5.jpg')},
    {img: require('../../assets/publications/pub6.jpg')},
    {img: require('../../assets/publications/pub7.jpg')},
    {img: require('../../assets/publications/pub1.jpeg')},
    {img: require('../../assets/publications/pub2.jpg')},
    {img: require('../../assets/publications/pub3.jpg')},
    {img: require('../../assets/publications/pub4.jpg')},
    {img: require('../../assets/publications/pub5.jpg')},
    {img: require('../../assets/publications/pub6.jpg')},
    {img: require('../../assets/publications/pub7.jpg')},
    {img: require('../../assets/publications/pub1.jpeg')},
    {img: require('../../assets/publications/pub2.jpg')},
    {img: require('../../assets/publications/pub3.jpg')},
    {img: require('../../assets/publications/pub4.jpg')},
    {img: require('../../assets/publications/pub5.jpg')},
    {img: require('../../assets/publications/pub6.jpg')},
    {img: require('../../assets/publications/pub7.jpg')},
    {img: require('../../assets/publications/pub1.jpeg')},
    {img: require('../../assets/publications/pub2.jpg')},
    {img: require('../../assets/publications/pub3.jpg')},
    {img: require('../../assets/publications/pub4.jpg')},
    {img: require('../../assets/publications/pub5.jpg')},
    {img: require('../../assets/publications/pub6.jpg')},
    {img: require('../../assets/publications/pub7.jpg')},
    {img: require('../../assets/publications/pub1.jpeg')},
    {img: require('../../assets/publications/pub2.jpg')},
    {img: require('../../assets/publications/pub3.jpg')},
    {img: require('../../assets/publications/pub4.jpg')},
    {img: require('../../assets/publications/pub5.jpg')},
    {img: require('../../assets/publications/pub6.jpg')},
    {img: require('../../assets/publications/pub7.jpg')},
    {img: require('../../assets/publications/pub1.jpeg')},
    {img: require('../../assets/publications/pub2.jpg')},
    {img: require('../../assets/publications/pub3.jpg')},
    {img: require('../../assets/publications/pub4.jpg')},
    {img: require('../../assets/publications/pub5.jpg')},
    {img: require('../../assets/publications/pub6.jpg')},
    {img: require('../../assets/publications/pub7.jpg')},
    {img: require('../../assets/publications/pub1.jpeg')},
    {img: require('../../assets/publications/pub2.jpg')},
    {img: require('../../assets/publications/pub3.jpg')},
    {img: require('../../assets/publications/pub4.jpg')},
    {img: require('../../assets/publications/pub5.jpg')},
    {img: require('../../assets/publications/pub6.jpg')},
    {img: require('../../assets/publications/pub7.jpg')},
    {img: require('../../assets/publications/pub1.jpeg')},
    {img: require('../../assets/publications/pub2.jpg')},
    {img: require('../../assets/publications/pub3.jpg')},
    {img: require('../../assets/publications/pub4.jpg')},
    {img: require('../../assets/publications/pub5.jpg')},
    {img: require('../../assets/publications/pub6.jpg')},
    {img: require('../../assets/publications/pub7.jpg')},
    {img: require('../../assets/publications/pub1.jpeg')},
    {img: require('../../assets/publications/pub2.jpg')},
    {img: require('../../assets/publications/pub3.jpg')},
    {img: require('../../assets/publications/pub4.jpg')},
    {img: require('../../assets/publications/pub5.jpg')},
    {img: require('../../assets/publications/pub6.jpg')},
    {img: require('../../assets/publications/pub7.jpg')},
    {img: require('../../assets/publications/pub1.jpeg')},
    {img: require('../../assets/publications/pub2.jpg')},
    {img: require('../../assets/publications/pub3.jpg')},
    {img: require('../../assets/publications/pub4.jpg')},
    {img: require('../../assets/publications/pub5.jpg')},
    {img: require('../../assets/publications/pub6.jpg')},
    {img: require('../../assets/publications/pub7.jpg')},
]

export default function profilsPublication ({navigation}) {
     
    return(
        <View style={styles.container}>
        
          {images.map((item,index) => {
            return (
                <TouchableHighlight
                    key={index} 
                    activeOpacity={0.8}
                    underlayColor={global.contrastColor}
                    onPress={() => navigation.navigate('Publications')}
                >
                          <Image source={item.img} style={styles.image}></Image>
                </TouchableHighlight>
            )
          })}
        
        </View>
      )   
  }

  const styles = StyleSheet.create ({    
      container: {
            flex: 1,  
            width: width,
            backgroundColor:'black',
            borderBottomColor:'white',
            borderBottomWidth:3,
            flexWrap: 'wrap', 
            flexDirection:"row",
            justifyContent:'flex-start',
            },
        image:{
            borderColor:"black",
            padding: 1,
            borderWidth:1,
            height: (width/3),
            width: (width/3),
            resizeMode: "cover",
        },
            
    });