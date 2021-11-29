import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native';
import Caroussel from '../../components/Caroussel';
import { Icon } from 'react-native-elements';


const width = Dimensions.get('window').width;
const height = width * 0.75;

const Filter = [
    {type: "New School"},
    {type: "B & W"},
    {type: "Dot-work"},
    {type: "Japanese"},
    {type: "Old School"},
    {type: "New School"},
    {type: "B & W"},
]

const images = [
    {img: require('../../assets/publications/pub1.jpeg')},
    {img: require('../../assets/publications/pub2.jpg')},
    {img: require('../../assets/publications/pub3.jpg')},
    {img: require('../../assets/publications/pub4.jpg')},
    {img: require('../../assets/publications/pub5.jpg')},
    {img: require('../../assets/publications/pub6.jpg')},
    {img: require('../../assets/publications/pub7.jpg')},
]
const FetchResults = [
    {route: 'Home',like:350, artist:'Rooler & Malice',studio: 'BTP',title: "Klapen", img: require('../../assets/publications/pub1.jpeg'), pp: require('../../assets/publications/pp.jpg'),desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper orci sed risus dapibus bibendum. Quisque sagittis mi quis sapien rhoncus, vitae ullamcorper enim maximus. Nullam nec auctor elit. Phasellus et pulvinar elit. Fusce pellentesque augue in elit mollis, sed mattis nisl iaculis. Vivamus maximus leo in leo scelerisque luctus. Aenean lobortis ac est vitae volutpat. Fusce dui augue, ultricies eu ante id, tincidunt vulputate ligula. Nulla a porta lectus. In in ligula lacus. Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit."},
    {route: 'Home',like:7000, artist:'Marcel',studio: 'end of the world',title: "le mange-mort", img: require('../../assets/publications/pub2.jpg'), pp: require('../../assets/publications/pp.jpg'),desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper orci sed risus dapibus bibendum. Quisque sagittis mi quis sapien rhoncus, vitae ullamcorper enim maximus. Nullam nec auctor elit. Phasellus et pulvinar elit. Fusce pellentesque augue in elit mollis, sed mattis nisl iaculis. Vivamus maximus leo in leo scelerisque luctus. Aenean lobortis ac est vitae volutpat. Fusce dui augue, ultricies eu ante id, tincidunt vulputate ligula. Nulla a porta lectus. In in ligula lacus. Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit."},
    {route: 'Home',like:2500000, artist:'Le singe Tattoo',studio: 'back to back',title: "Yosh", img: require('../../assets/publications/pub3.jpg'), pp: require('../../assets/publications/pp.jpg'),desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper orci sed risus dapibus bibendum. Quisque sagittis mi quis sapien rhoncus, vitae ullamcorper enim maximus. Nullam nec auctor elit. Phasellus et pulvinar elit. Fusce pellentesque augue in elit mollis, sed mattis nisl iaculis. Vivamus maximus leo in leo scelerisque luctus. Aenean lobortis ac est vitae volutpat. Fusce dui augue, ultricies eu ante id, tincidunt vulputate ligula. Nulla a porta lectus. In in ligula lacus. Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit."},
    {route: 'Home',like:5, artist:'DarkSaskue_12',studio: 'le bistouri',title: "noroto uzomoki", img: require('../../assets/publications/pub4.jpg'), pp: require('../../assets/publications/pp.jpg'),desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper orci sed risus dapibus bibendum. Quisque sagittis mi quis sapien rhoncus, vitae ullamcorper enim maximus. Nullam nec auctor elit. Phasellus et pulvinar elit. Fusce pellentesque augue in elit mollis, sed mattis nisl iaculis. Vivamus maximus leo in leo scelerisque luctus. Aenean lobortis ac est vitae volutpat. Fusce dui augue, ultricies eu ante id, tincidunt vulputate ligula. Nulla a porta lectus. In in ligula lacus. Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit."},
    {route: 'Home',like:56, artist:'Georges Brassens',studio: "toi l'auvergnat",title: "Trompette de la vérité", img: require('../../assets/publications/pub1.jpeg'), pp: require('../../assets/publications/pp.jpg'),desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper orci sed risus dapibus bibendum. Quisque sagittis mi quis sapien rhoncus, vitae ullamcorper enim maximus. Nullam nec auctor elit. Phasellus et pulvinar elit. Fusce pellentesque augue in elit mollis, sed mattis nisl iaculis. Vivamus maximus leo in leo scelerisque luctus. Aenean lobortis ac est vitae volutpat. Fusce dui augue, ultricies eu ante id, tincidunt vulputate ligula. Nulla a porta lectus. In in ligula lacus. Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit."},
    {route: 'Home',like:78, artist:'Gojira',studio: 'my favourite human',title: "Glados", img: require('../../assets/publications/pub2.jpg'), pp: require('../../assets/publications/pp.jpg'),desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper orci sed risus dapibus bibendum. Quisque sagittis mi quis sapien rhoncus, vitae ullamcorper enim maximus. Nullam nec auctor elit. Phasellus et pulvinar elit. Fusce pellentesque augue in elit mollis, sed mattis nisl iaculis. Vivamus maximus leo in leo scelerisque luctus. Aenean lobortis ac est vitae volutpat. Fusce dui augue, ultricies eu ante id, tincidunt vulputate ligula. Nulla a porta lectus. In in ligula lacus. Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit."},
    {route: 'Home',like:650, artist:'System of a down',studio: 'Nini',title: "Don't starve", img: require('../../assets/publications/pub3.jpg'), pp: require('../../assets/publications/pp.jpg'),desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper orci sed risus dapibus bibendum. Quisque sagittis mi quis sapien rhoncus, vitae ullamcorper enim maximus. Nullam nec auctor elit. Phasellus et pulvinar elit. Fusce pellentesque augue in elit mollis, sed mattis nisl iaculis. Vivamus maximus leo in leo scelerisque luctus. Aenean lobortis ac est vitae volutpat. Fusce dui augue, ultricies eu ante id, tincidunt vulputate ligula. Nulla a porta lectus. In in ligula lacus. Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit."},
    {route: 'Home',like:1545, artist:'Jinjer',studio: 'el copsos',title: "Isaac lived alone", img: require('../../assets/publications/pub4.jpg'), pp: require('../../assets/publications/pp.jpg'),desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper orci sed risus dapibus bibendum. Quisque sagittis mi quis sapien rhoncus, vitae ullamcorper enim maximus. Nullam nec auctor elit. Phasellus et pulvinar elit. Fusce pellentesque augue in elit mollis, sed mattis nisl iaculis. Vivamus maximus leo in leo scelerisque luctus. Aenean lobortis ac est vitae volutpat. Fusce dui augue, ultricies eu ante id, tincidunt vulputate ligula. Nulla a porta lectus. In in ligula lacus. Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit."},
];

const SearchResults = ({navigation}) => {

    return (
        FetchResults.map((item, index) => {
            return(
                <View key={index} style={styles.resultStyle}>
                    <View style={styles.resutlItemStyle}>
                        <View style={styles.imageStyle}>
                            <Caroussel  images={images}/>   
                        </View>   
                        <View style={styles.footer}>
                                <Image  style={styles.pp} source={item.pp}/>
                                <View>
                                    <TouchableOpacity 
                                        activeOpacity={0.5}
                                        onPress={() => navigation.navigate('ProfilsNav', {pp: item.pp, studio: item.studio, artist: item.artist})}
                                        style={styles.TouchableOpacity}
                                    >
                                        <Text style={styles.artist}>
                                            {item.artist}
                                        </Text>
                                        <Icon  style={styles.icon} color={'rgba(0,0,0,0.7)'} size={width/26} type= "antdesign" name= 'arrowright'/>
                                    </TouchableOpacity> 
                                    <Text style={styles.studio}> - {item.studio}</Text>
                                </View> 
                                {/* <View style={styles.test}>
                                    {Filter.map((item, index) => {
                                        if (index == 3) {
                                            return(
                                                <View key={index} style={styles.filterStyle}>
                                                    <Text style={styles.filterTextStyle}>
                                                            ...  
                                                    </Text>    
                                                </View>
                                            )
                                        }else if(index < 3){
                                            return (
                                                <View key={index} style={styles.filterStyle}>
                                                    <Text style={styles.filterTextStyle}>
                                                        {item.type}  
                                                    </Text>       
                                                </View>
                                                )
                                            }    
                                        }    
                                    )}
                                </View> */}
                        </View>
                    </View> 
                </View>
            )
        })  
    )
};

const styles = StyleSheet.create({
    
    resultStyle: {
        height: height,
        width: width,
        backgroundColor: 'rgb(204, 179, 255)',
        borderBottomColor: 'rgba(96, 44, 201, 1)',
        borderBottomWidth: 5,
    },
    resutlItemStyle:{
        justifyContent: 'center',
        alignContent:'center',
    },
    imageStyle:{
        backgroundColor: 'black',      
    },
        footer:{
            borderTopColor: 'rgba(96, 44, 201, 1)',
            borderTopWidth: 5,
            backgroundColor: 'rgb(204, 179, 255)',
            flexWrap: 'wrap', 
            alignItems: 'flex-start',
            flexDirection:'row',
            padding: (width/50),
        },   
            pp: {
                borderRadius: 25,
                height: (width/15),
                width: (width/15),
                borderColor: 'rgba(96, 44, 201, 1)',
                borderWidth: 1,
            },
            TouchableOpacity:{
                alignItems: 'center',
                flexDirection:'row',
                justifyContent:'center',
            },
            artist: {
                alignSelf: 'flex-start',
                fontSize: (width/20),
                marginLeft: (width/25),
                color: 'black',
                fontFamily: 'rooters',
            },
            
            icon:{
                marginLeft: (width/60),
                alignSelf: 'center',
            },
            studio: {
                alignSelf: 'center',
                marginLeft: (width/20),
                fontSize: (width/30),
                color: 'black',
                opacity: 0.7,
            },
                filterStyle: {
                    position: 'absolute',
                    right: (width/50),
                    top: (width/50),
                    backgroundColor: 'rgba(96, 44, 201, 1)',
                    borderRadius: 25,
                    paddingHorizontal: (width / 50),
                    flexDirection:'row',
                },
                filterTextStyle: {
                    fontSize: (width / 30),
                    color: 'white',
                },
                test:{
                    position: 'absolute',
                    right: (width/50),
                    top: (width/50),
                }

})

export default SearchResults;