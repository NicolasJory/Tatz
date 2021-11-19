import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import IdeaCaroussel from '../../components/IdeaCaroussel';
import IdeaTopBar from './IdeaTopBar';

const width = Dimensions.get('window').width;
const height = width * 0.125;

const ideas = [
  {image: require('../../assets/publications/pub1.jpeg'), title:"oui",description: "Phasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusclvinar elit. Fusce pellentesque augue in elit moll. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar eusce pellentesque augueet pulvinar elit. Fusce pellentesque augue in elit mollis"},
  {image: require('../../assets/publications/pub2.jpg'), title:"oui",description: "Phasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque a elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollis"},
  {image: require('../../assets/publications/pub3.jpg'), title:"oui",description: "Phasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollis"},
  {image: require('../../assets/publications/pub4.jpg'), title:"oui",description: "Phasellus et pulvinar elit. Fusce pellentesque augue in lvinar elit. Fusce pellentesque augue in elit mollis"},
  {image: require('../../assets/publications/pub5.jpg'), title:"oui",description: "Phasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollis"},
  {image: require('../../assets/publications/pub6.jpg'), title:"oui",description: "Phasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollis"},
  {image: require('../../assets/publications/pub7.jpg'), title:"oui",description: "lvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollis"},
]

const Idea = ({navigation}) => {
    return (
      <View style={styles.container}>
        <IdeaTopBar navigation={navigation}/>
        <View style={{borderBottomColor:'rgba(96, 44, 201, 1)',borderBottomWidth:2}}>      
            <IdeaCaroussel navigation={navigation} ideas={ideas}/>
        </View>
      </View>
    )
};

const styles = StyleSheet.create({
    container: {
      paddingBottom: height,
      borderBottomWidth: 2,
      backgroundColor: 'rgba(96, 44, 201, 1)',
        // position:'absolute',
        // left:0,
        // top:0,
        // flex:1,
        // paddingTop: '7%',
        // paddingBottom: '3%',
        // marginVertical:0,
        // marginHorizontal:0,
        // // flexGrow: 1,
        // // justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: 'white',
        // height:'200%',
        // width:'100%',
    }
  });
  
export default Idea;
