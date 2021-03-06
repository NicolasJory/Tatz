import React, {useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, FlatList  } from 'react-native';

import MessageTopBar from './MessageTopBar';
import MessageBody from './MessageBody';
import MessageBottomBar from './MessageBottomBar';

const width = Dimensions.get('window').width;
const height = width * 0.125;



export default class Message extends React.Component {

  render() {
    return (
      <View style={styles.container}> 
        <MessageTopBar/>
          <ScrollView 
            ref="scroll"
            style={{
              backgroundColor: global.color,
              }}
              showsVerticalScrollIndicator={false}
          >  
            <MessageBody/>
          </ScrollView>
        <MessageBottomBar />  
      </View>
    )
            }
};



const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingBottom: height,
    }
  });
