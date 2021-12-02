import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { Icon } from 'react-native-elements'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default class IdeaCaroussel extends React.Component {
    state = {
        active : 0
    }
    change = ({nativeEvent}) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
        if(slide !== this.state.active){
            this.setState({active: slide});
        }
    }

    

    render() {
        return (
            <View style={styles.container}>
                <ScrollView 
                    pagingEnabled 
                    horizontal 
                    onScroll={this.change}
                    showsHorizontalScrollIndicator={false} 
                    style={styles.scroll}>
                    {
                        this.props.ideas.map((item,index) =>{
                            return (
                                <View key={index} style={styles.idea}>
                                    <View  style={styles.post}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Image style={styles.image} source={item.image}/>
                                        <Text style={styles.description}>{item.description}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                    <View style={styles.idea}>
                                    <View  style={styles.post}>
                                        <Text style={styles.title}>YES</Text>
                                        <Image style={styles.image}/>
                                        <Text style={styles.description}>Button vers création idea</Text>
                                        <Icon style={styles.iconStyle} color = {global.contrastColor} size={(width/20)} type="feather" name="settings" onPress={() => this.props.navigation.navigate('AddIdea')}/>
                                    </View>
                    </View>
                </ScrollView>
                
            </View>
            )
        }
    }

const styles = StyleSheet.create({
    container:{
        width,
    },
    scroll:{
        width,
    },
    idea: {
        width,
        height,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignSelf: 'center',
        paddingTop: height*0.06,
    },
    post:{
        width: width*0.9,
        height: height*0.7,
        backgroundColor: global.color,
        borderRadius: 25,
        justifyContent: 'center',
    },
    title:{
        flex:1,
        fontSize: (width/13),
        marginTop: (width/30),
        alignSelf: 'center',
        color: global.contrastColor,
        fontFamily: 'rooters',
    },
    image:{
        alignSelf: 'center',
        borderRadius: 25,
        flex:6,
        maxWidth: "80%",
        resizeMode: 'contain',
      },
    description:{
        flex:6,
        fontSize: (width/30),
        marginHorizontal: (width/15),
        color: global.contrastColor,
    },
    // pagingText:{
    //     color: '#888',
    //     margin: 3,
    //     fontSize: (width/30),
    // },
    // pagingActiveText:{
    //     color: 'rgb(204, 179, 255)',
    //     margin: 3,
    //     fontSize: (width/30),
    // },
    // pagination:{
    //     flexDirection:'row',
    //     position:'absolute',
    //     bottom:0,
    //     alignSelf:'center'
    // },
})

