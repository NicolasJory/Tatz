import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import ProfilTopBar from './ProfilTopBar';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



const Profil = ({navigation}) => {
    return (
      <View style={styles.container}>
        <ProfilTopBar navigation={navigation}/>
      </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex:1,
    }
  });
  
export default Profil;
