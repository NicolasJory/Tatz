import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import Publications from '../../components/Publications';

import HomeTopBar from './HomeTopBar';

const width = Dimensions.get('window').width;
const height = width * 0.125;

const Home = ({navigation}) => {
    return (
      <View style={styles.container}>
        <HomeTopBar navigation={navigation}/>
        <Publications navigation={navigation}/>
      </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      borderBottomWidth: 2,
      backgroundColor: 'rgba(96, 44, 201, 1)',
    }
  });
  
export default Home;
