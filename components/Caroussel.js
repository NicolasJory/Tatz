import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, Dimensions } from 'react-native';
import React from 'react';
import { render } from 'react-dom';

const width = Dimensions.get('window').width;
const height = width * 0.6;


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
        return (
            <View style={styles.container}>
                <ScrollView 
                    pagingEnabled 
                    horizontal 
                    onScroll={this.change}
                    showsHorizontalScrollIndicator={false} 
                    style={styles.scroll}>
                    {
                        this.props.images.map((item,index) =>{
                            return (
                                <Image key={index} source={item.img} style={styles.image}></Image>
                            )
                        })
                    }
                </ScrollView>
                <View style={styles.pagination}>
                    {
                        this.props.images.map((i, index) => (
                            <Text key={index} style={index==this.state.active ? styles.pagingActiveText : styles.pagingText}>●</Text>
                        ))
                    }
                    
                </View>
            </View>
            )
        }
    }

const styles = StyleSheet.create({
    container:{
        width,
        height
    },
    scroll:{
        width,
        height
    },
    image: {
        width,
        height: height*0.9,
        resizeMode: 'cover'
    },
    pagingText:{
        color: '#888',
        margin: 3,
        fontSize: (width/30),
    },
    pagingActiveText:{
        color: 'rgb(204, 179, 255)',
        margin: 3,
        fontSize: (width/30),
    },
    pagination:{
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        alignSelf:'center'
    },
})

