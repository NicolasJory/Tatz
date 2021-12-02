import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';
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
        return (
            <View style={styles(this.props.size).container}>
                <ScrollView 
                    pagingEnabled 
                    horizontal 
                    onScroll={this.change}
                    showsHorizontalScrollIndicator={false} 
                    style={styles().scroll}>
                    {
                        this.props.images.map((item,index) =>{
                            return (
                                <Image key={index} source={item.img} style={styles(this.props.size).image}></Image>
                            )
                        })
                    }
                </ScrollView>
                <View style={styles().pagination}>
                    {
                        this.props.images.map((i, index) => (
                            <Text key={index} style={index==this.state.active ? styles().pagingActiveText : styles().pagingText}>●</Text>
                        ))
                    }
                    
                </View>
            </View>
            )
        }
    }

const styles = (props) => StyleSheet.create({
    container:{
        width,
        height: props*1.1,
    },
    scroll:{
        width,
    },
    image: {
        width,
        height: props,
        resizeMode: 'cover'
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
        position:'absolute',
        bottom:0,
        alignSelf:'center'
    },
});

