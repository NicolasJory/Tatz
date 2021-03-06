import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, Dimensions } from 'react-native';


const width = Dimensions.get('window').width;
const height = width * 1.3;
const pp= require('../../assets/publications/pp.jpg')

const Message = [
    {user:'test',time:'12:05',content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper"},
    {user:'test',time:'12:06',content:"orci sed risus dapibus bibendum. Quisque sagittis mi quis sapien rhoncus"},
    {user:'test2',time:'12:15',content:"vitae ullamcorper enim maximus. Nullam nec auctor elit."},
    {user:'test',time:'13:20',content:"Phasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollis"},
    {user:'test2',time:'13:35',content:"sed mattis nisl iaculis. Vivamus maximus leo in leo scelerisque luctus."},
    {user:'test2',time:'13:37',content:"Aenean lobortis ac est vitae volutpat. Fusce dui augue, ultricies eu ante id,"},
    {user:'test',time:'13:46',content:"tincidunt vulputate ligula. Nulla a porta lectus. In in ligula lacus."},
    {user:'test2',time:'13:58',content:"Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit.Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit.Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit.Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit."},
    {user:'test',time:'14:00',content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper"},
    {user:'test',time:'12:05',content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper"},
    {user:'test',time:'12:06',content:"orci sed risus dapibus bibendum. Quisque sagittis mi quis sapien rhoncus"},
    {user:'test2',time:'12:15',content:"vitae ullamcorper enim maximus. Nullam nec auctor elit."},
    {user:'test',time:'13:20',content:"Phasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollis"},
    {user:'test2',time:'13:35',content:"sed mattis nisl iaculis. Vivamus maximus leo in leo scelerisque luctus."},
    {user:'test2',time:'13:37',content:"Aenean lobortis ac est vitae volutpat. Fusce dui augue, ultricies eu ante id,"},
    {user:'test',time:'13:46',content:"tincidunt vulputate ligula. Nulla a porta lectus. In in ligula lacus."},
    {user:'test2',time:'13:58',content:"Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit.Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit.Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit.Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit."},
    {user:'test',time:'14:00',content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper"},
    {user:'test',time:'12:05',content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper"},
    {user:'test',time:'12:06',content:"orci sed risus dapibus bibendum. Quisque sagittis mi quis sapien rhoncus"},
    {user:'test2',time:'12:15',content:"vitae ullamcorper enim maximus. Nullam nec auctor elit."},
    {user:'test',time:'13:20',content:"Phasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollisPhasellus et pulvinar elit. Fusce pellentesque augue in elit mollis"},
    {user:'test2',time:'13:35',content:"sed mattis nisl iaculis. Vivamus maximus leo in leo scelerisque luctus."},
    {user:'test2',time:'13:37',content:"Aenean lobortis ac est vitae volutpat. Fusce dui augue, ultricies eu ante id,"},
    {user:'test',time:'13:46',content:"tincidunt vulputate ligula. Nulla a porta lectus. In in ligula lacus."},
    {user:'test2',time:'13:58',content:"Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit.Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit.Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit.Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit."},
    {user:'test',time:'14:00',content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper"},
];

export default class MessageBody extends React.Component {
    render() {
        return (
                    Message.map((item,index)=>{
                        if(item.user == "test"){
                            return (
                            <View key={index}>
                                <Text style={styles.timeStyle}>
                                        {item.time}
                                </Text>
                                <View key={index} style={styles.container}>
                                    <Image style={styles.pp} source={pp}/>
                                    <Text style={styles.textStyle}>
                                        {item.content}
                                    </Text>
                                </View>
                            </View>
                            );
                        }else{
                            return (
                                <View key={index}>
                                    <Text style={styles.timeStyle}>
                                        {item.time}
                                    </Text>
                                    <View style={styles.yourContainer}>
                                        <Text style={styles.yourTextStyle}>
                                            {item.content}
                                        </Text>
                                    </View>
                                </View>  
                            );
                        }
                    })
                )
    };
}

const styles = StyleSheet.create({
    
    container: {
        marginVertical: (width/80),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
    },
    timeStyle:{
        alignSelf: 'center',
        fontSize:(width/50),
        color: global.contrastColorOpacity,
    },
    yourContainer: {
        marginVertical: (width/80),
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    textStyle:{
        marginLeft: (width/50),
        fontSize:(width/30),
        width: (width/1.4),
        padding:(width/50),
        borderRadius: 15,
        backgroundColor: global.contrastColor,
        },
    yourTextStyle:{
        marginRight: (width/50),
        fontSize:(width/30),
        width: (width/1.4),
        padding:(width/50),
        borderRadius: 15,
        backgroundColor: "blue",
        color: "white",
    },
            pp: {
                margin: (width/50),
                borderRadius: 25,
                height: (width/15),
                width: (width/15),
                borderColor: global.middleColor,
                borderWidth: 1,
            }  
})
