import React from 'react';
import { StyleSheet,TouchableOpacity, View, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const TabArr = [
  { type: "Ionicons", activeIcon: 'home'},
  { type: "Ionicons", activeIcon: 'home'},
  { type: "Ionicons", activeIcon: 'home'},
];



export default class Bar extends React.Component {

  TabButton(item, index) {
      return (
          <TouchableOpacity
              key={index} 
              activeOpacity={1}
              style={styles.container}
              // onPress={() => navigation.navigate("Publications")}
          >
                    <Icon size={width/14} type={item.type} name={item.activeIcon}/>
          </TouchableOpacity>
      )
    };

    render(){      
      console.log(this.props.navigation)
        return(
                <View style={styles.tabNav}>
                  {TabArr.map((item,index) => {
                        return (
                          this.TabButton(item, index)
                        )
                    })} 
                </View>  
        )
    }
    
};




const styles = StyleSheet.create ({
  tabNav:{
      height: height*0.05,
      flexWrap: 'wrap', 
      flexDirection:"row",
      justifyContent:'space-around', 
      borderBottomColor:'rgba(96, 44, 201, 0.5)',
      borderBottomWidth:1,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      height: height*0.05,
      // alignItems: 'center',     
      width:(width/5), 
    },
  });
