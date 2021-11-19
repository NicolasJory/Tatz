import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import ProfilTopBar from './ProfilTopBar';

const width = Dimensions.get('window').width;
const height = width * 0.125;



const Profil = ({navigation}) => {
    return (
      <View style={styles.container}>
        <ProfilTopBar navigation={navigation}/>
      </View>
    )
};

const styles = StyleSheet.create({
    container: {
      paddingBottom: height,
      borderBottomWidth: 2,
      backgroundColor: 'rgba(96, 44, 201, 1)',
    }
  });
  
export default Profil;
