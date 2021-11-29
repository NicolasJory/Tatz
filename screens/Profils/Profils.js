import * as React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ProfilsBar from '../../components/Profils/ProfilsBar';
import ProfilsPublication from '../../components/Profils/ProfilsPublication';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default class Profils extends React.Component {
    render(){
        return (
          <View style={styles.container}>
            <ScrollView stickyHeaderIndices={[1]} style={{borderBottomWidth: 1,borderBottomColor:"rgba(96, 44, 201, 1)"}}>
              <View style={styles.header}>
                <View style={styles.title}>
                  <Image style={styles.pp} source={this.props.pp}/>
                  <View style={styles.titleText}>
                    <Text style={styles.artist}>{this.props.artist}</Text>
                    <Text style={styles.studio}>{this.props.studio}</Text>
                  </View> 
                  <View style={styles.button}>
                    <Button color= 'rgba(96, 44, 201, 1)' title="follow">Follow</Button> 
                  </View>
                </View>
                <View style={styles.description}>
                  <Text style={styles.descText}>Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une langue (conjugaisons, construction et association des phrases…). ... L'étude formelle des textes s'appuie sur la linguistique, qui est l'approche scientifique du langage</Text>
                </View>
              </View>
              <>
                <ProfilsBar/>
              </>
              <>
              
                <ProfilsPublication navigation={this.props.navigation}/>
              </>
            </ScrollView>
          </View>
          )
          
    }

 
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingBottom: (width*0.118),
      backgroundColor: 'rgb(204, 179, 255)',
      borderBottomWidth:1,
      borderBottomColor: 'rgba(96, 44, 201, 1)',
    },
    header:{
      height: height*0.33,
      borderBottomWidth:1,
      borderTopWidth:1,
      borderBottomColor: 'rgba(96, 44, 201, 1)',
      borderTopColor: 'rgba(96, 44, 201, 1)',
    },
    title:{
      flex:1,
      flexWrap: 'wrap', 
      flexDirection:'row',
    },
    pp:{
      height: width/5,
      width: width/5,
      borderRadius:width/5,
      resizeMode: 'cover',
      borderColor: 'rgba(96, 44, 201, 1)',
      borderWidth:2,
      margin: width/18,
    },
    titleText:{
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(96, 44, 201, 1)'
    },
    artist:{
      fontSize: width/20,
      fontFamily: 'rooters',
    },
    studio:{
      fontSize: width/25,
      marginTop: width/25,
    },
    button:{
      justifyContent: 'center',
      marginLeft: width/20,
    },
    description:{
      flex:1,
    },
    descText:{
      padding: width/30,
      fontSize: width/30,
    },
    tabNav:{
      height: height*0.05,
      backgroundColor:'red',
      flexWrap: 'wrap', 
      justifyContent:'space-around', 
    },
    
  });
