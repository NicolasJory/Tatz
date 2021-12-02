import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import Publications from '../../components/Publications';

import HomeTopBar from './HomeTopBar';

const width = Dimensions.get('window').width;

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
    }
  });
  
export default Home;
