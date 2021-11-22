import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-ionicons';
export default class Caroussel extends React.Component {
    render(){
        return (
          <View>
          <Text>{this.props.route.params.params.artist}</Text>
          <Text>{this.props.route.params.params.studio}</Text>
          <Image source={this.props.route.params.params.pp}/>
          </View>
          )
    }

 
}

const styles = StyleSheet.create({

  });
