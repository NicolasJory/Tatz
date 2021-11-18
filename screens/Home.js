import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import Publication from '../components/Publication';

import HomeTopBar from '../components/HomeTopBar';

const width = Dimensions.get('window').width;
const height = width * 0.125;

const Home = ({navigation}) => {
    return (
      <View style={styles.container}>
        <HomeTopBar navigation={navigation}/>
        <ScrollView style={{borderBottomColor:'rgba(96, 44, 201, 1)',borderBottomWidth:2}}>      
            <Publication/>
        </ScrollView>
      </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex:1,
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
  
export default Home;
