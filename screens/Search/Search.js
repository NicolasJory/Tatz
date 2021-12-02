import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import SearchTopBar from './SearchTopBar';
import SearchResults from './SearchResults';

const width = Dimensions.get('window').width;
const height = width * 0.125;

const Search = ({navigation}) => {
    return (
      <View style={styles.container}>
        <ScrollView>  
            <SearchTopBar navigation={navigation}/>
            <SearchResults navigation={navigation}/> 
        </ScrollView>
      </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingBottom: width*0.125,
      backgroundColor: global.color,
    }
  });
  
export default Search;
