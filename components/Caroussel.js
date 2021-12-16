import { StyleSheet, Text, View, ScrollView, Image,ImageBackground, Dimensions } from 'react-native';
import React from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default class Caroussel extends React.Component {
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
        var maxSize=0;
        this.props.images.forEach(element => {
            if (element.height>maxSize){maxSize=element.height}
        })
        return (

            <View style={styles().container}>
                <ScrollView 
                    pagingEnabled 
                    horizontal 
                    onScroll={this.change}
                    showsHorizontalScrollIndicator={false} 
                    style={styles().scroll}>

                    {
                        this.props.images.map((item,index) =>{
                            if ((maxSize>width) && (item.height!= maxSize)){
                                return(
                                    <ImageBackground 
                                        style={{width:width, height:maxSize, justifyContent:'center'}}
                                        resizeMode='cover'
                                        source={item.img} 
                                        blurRadius={10}
                                    >
                                        <Image key={index} source={item.img} style={styles(item.height).image}></Image>
                                    </ImageBackground>
                                )
                            }else if((maxSize<width*0.6)){
                                return(
                                    <ImageBackground 
                                        style={{width:width, height:width, justifyContent:'center'}}
                                        resizeMode='cover'
                                        source={item.img} 
                                        blurRadius={10}
                                    >
                                        <Image key={index} source={item.img} style={styles(item.height).image}></Image>
                                    </ImageBackground>
                                )
                            }else if((maxSize<=width) && (maxSize>=width*0.6) && (item.height!=maxSize)){
                                return(
                                    <ImageBackground 
                                        style={{width:width, height:maxSize, justifyContent:'center'}}
                                        resizeMode='cover'
                                        source={item.img} 
                                        blurRadius={10}
                                    >
                                        <Image key={index} source={item.img} style={styles(item.height).image}></Image>
                                    </ImageBackground>
                                )
                            }else{
                                return (
                                    <Image key={index} source={item.img} style={styles(item.height).image}></Image>
                                )
                            }
                        })
                    }
                </ScrollView>
                <View style={styles().pagination}>
                    {
                        this.props.images.map((item, index) => {
                            return (
                            <Text key={index} style={index==this.state.active ? styles().pagingActiveText : styles().pagingText}>●</Text>
                            )
                        })
                    }
                    
                </View>
            </View>
            )
        }
    }

const styles = (props) => StyleSheet.create({
    container:{
        width,
    },
    scroll:{
        width,
    },
    image: {
        width,
        height: props,
        resizeMode: 'cover',
        alignSelf:'center',
    },
    pagingText:{
        color: '#888',
        margin: 3,
        fontSize: (width/30),
    },
    pagingActiveText:{
        color: global.contrastColor,
        margin: 3,
        fontSize: (width/30),
    },
    pagination:{
        flexDirection:'row',
        alignSelf:'center',
        marginTop: width/30,
    },
});

