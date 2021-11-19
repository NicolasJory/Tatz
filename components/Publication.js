import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, Dimensions } from 'react-native';
import Caroussel from './Caroussel';
import { Icon } from 'react-native-elements'
import { render } from 'react-dom';

const width = Dimensions.get('window').width;
const height = width * 1.3;

const images = [
    {img: require('../assets/publications/pub1.jpeg')},
    {img: require('../assets/publications/pub2.jpg')},
    {img: require('../assets/publications/pub3.jpg')},
    {img: require('../assets/publications/pub4.jpg')},
    {img: require('../assets/publications/pub5.jpg')},
    {img: require('../assets/publications/pub6.jpg')},
    {img: require('../assets/publications/pub7.jpg')},
]
const Publis = [
    {route: 'Home',like:350, artist:'Rooler & Malice',studio: 'BTP',title: "Klapen", img: require('../assets/publications/pub1.jpeg'), pp: require('../assets/publications/pp.jpg'),desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper orci sed risus dapibus bibendum. Quisque sagittis mi quis sapien rhoncus, vitae ullamcorper enim maximus. Nullam nec auctor elit. Phasellus et pulvinar elit. Fusce pellentesque augue in elit mollis, sed mattis nisl iaculis. Vivamus maximus leo in leo scelerisque luctus. Aenean lobortis ac est vitae volutpat. Fusce dui augue, ultricies eu ante id, tincidunt vulputate ligula. Nulla a porta lectus. In in ligula lacus. Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit."},
    {route: 'Home',like:7000, artist:'Marcel',studio: 'end of the world',title: "le mange-mort", img: require('../assets/publications/pub2.jpg'), pp: require('../assets/publications/pp.jpg'),desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper orci sed risus dapibus bibendum. Quisque sagittis mi quis sapien rhoncus, vitae ullamcorper enim maximus. Nullam nec auctor elit. Phasellus et pulvinar elit. Fusce pellentesque augue in elit mollis, sed mattis nisl iaculis. Vivamus maximus leo in leo scelerisque luctus. Aenean lobortis ac est vitae volutpat. Fusce dui augue, ultricies eu ante id, tincidunt vulputate ligula. Nulla a porta lectus. In in ligula lacus. Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit."},
    {route: 'Home',like:2500000, artist:'Le singe Tattoo',studio: 'back to back',title: "Yosh", img: require('../assets/publications/pub3.jpg'), pp: require('../assets/publications/pp.jpg'),desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper orci sed risus dapibus bibendum. Quisque sagittis mi quis sapien rhoncus, vitae ullamcorper enim maximus. Nullam nec auctor elit. Phasellus et pulvinar elit. Fusce pellentesque augue in elit mollis, sed mattis nisl iaculis. Vivamus maximus leo in leo scelerisque luctus. Aenean lobortis ac est vitae volutpat. Fusce dui augue, ultricies eu ante id, tincidunt vulputate ligula. Nulla a porta lectus. In in ligula lacus. Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit."},
    {route: 'Home',like:5, artist:'DarkSaskue_12',studio: 'le bistouri',title: "noroto uzomoki", img: require('../assets/publications/pub4.jpg'), pp: require('../assets/publications/pp.jpg'),desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper orci sed risus dapibus bibendum. Quisque sagittis mi quis sapien rhoncus, vitae ullamcorper enim maximus. Nullam nec auctor elit. Phasellus et pulvinar elit. Fusce pellentesque augue in elit mollis, sed mattis nisl iaculis. Vivamus maximus leo in leo scelerisque luctus. Aenean lobortis ac est vitae volutpat. Fusce dui augue, ultricies eu ante id, tincidunt vulputate ligula. Nulla a porta lectus. In in ligula lacus. Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit."},
    {route: 'Home',like:56, artist:'Georges Brassens',studio: "toi l'auvergnat",title: "Trompette de la vérité", img: require('../assets/publications/pub1.jpeg'), pp: require('../assets/publications/pp.jpg'),desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper orci sed risus dapibus bibendum. Quisque sagittis mi quis sapien rhoncus, vitae ullamcorper enim maximus. Nullam nec auctor elit. Phasellus et pulvinar elit. Fusce pellentesque augue in elit mollis, sed mattis nisl iaculis. Vivamus maximus leo in leo scelerisque luctus. Aenean lobortis ac est vitae volutpat. Fusce dui augue, ultricies eu ante id, tincidunt vulputate ligula. Nulla a porta lectus. In in ligula lacus. Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit."},
    {route: 'Home',like:78, artist:'Gojira',studio: 'my favourite human',title: "Glados", img: require('../assets/publications/pub2.jpg'), pp: require('../assets/publications/pp.jpg'),desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper orci sed risus dapibus bibendum. Quisque sagittis mi quis sapien rhoncus, vitae ullamcorper enim maximus. Nullam nec auctor elit. Phasellus et pulvinar elit. Fusce pellentesque augue in elit mollis, sed mattis nisl iaculis. Vivamus maximus leo in leo scelerisque luctus. Aenean lobortis ac est vitae volutpat. Fusce dui augue, ultricies eu ante id, tincidunt vulputate ligula. Nulla a porta lectus. In in ligula lacus. Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit."},
    {route: 'Home',like:650, artist:'System of a down',studio: 'Nini',title: "Don't starve", img: require('../assets/publications/pub3.jpg'), pp: require('../assets/publications/pp.jpg'),desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper orci sed risus dapibus bibendum. Quisque sagittis mi quis sapien rhoncus, vitae ullamcorper enim maximus. Nullam nec auctor elit. Phasellus et pulvinar elit. Fusce pellentesque augue in elit mollis, sed mattis nisl iaculis. Vivamus maximus leo in leo scelerisque luctus. Aenean lobortis ac est vitae volutpat. Fusce dui augue, ultricies eu ante id, tincidunt vulputate ligula. Nulla a porta lectus. In in ligula lacus. Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit."},
    {route: 'Home',like:1545, artist:'Jinjer',studio: 'el copsos',title: "Isaac lived alone", img: require('../assets/publications/pub4.jpg'), pp: require('../assets/publications/pp.jpg'),desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper orci sed risus dapibus bibendum. Quisque sagittis mi quis sapien rhoncus, vitae ullamcorper enim maximus. Nullam nec auctor elit. Phasellus et pulvinar elit. Fusce pellentesque augue in elit mollis, sed mattis nisl iaculis. Vivamus maximus leo in leo scelerisque luctus. Aenean lobortis ac est vitae volutpat. Fusce dui augue, ultricies eu ante id, tincidunt vulputate ligula. Nulla a porta lectus. In in ligula lacus. Suspendisse in augue imperdiet, placerat tellus sed, ultricies velit."},
];
const Icons = [
    {route: 'Favorite', label: 'Favorite', type:"entypo", icon:"star-outlined"},
    {route: 'Share', label: 'Share', type: "evilIcons ", icon: 'share'},
    {route: 'Comment', label: 'Comment', type: "AntDesign ", icon: "message"},
    {route: 'Like', label: 'Like', type: "MaterialIcons", icon: 'favorite-outline'},
];

const Publication = () => {

    const showMore=(text)=>{
        const text2 = text.toString();
        const [isTruncated, setIsTruncated ] = useState(true);
        const resultText = isTruncated ? text2.substr(0,250) : text;

        function toggleIsTruncated(){
            setIsTruncated(!isTruncated);
        }
        
        return (
            <Text style={{fontSize: (width/30)}}>
                {resultText}
                <Text onPress={toggleIsTruncated} style={{color:'rgb(204, 179, 255)',fontSize: (width/35)}}>{isTruncated ? "... more ⇣" : "  less ⇡"}</Text>
            </Text>
        );
    }

    const calcul=(value)=>{
        if (value >= 1000000){
            return(value= Math.round(value/1000000)+'M')
        }else if(value >= 1000){
            return(value= Math.round(value/1000)+'k')
        }
        return(value)
    }

    return (
        Publis.map((item, index) => {
            return(
                <View key={index} style={styles.publicationStyle}>
                    <View style={styles.header}>
                        <Image  style={styles.pp} source={item.pp}/>
                        <View>
                            <Text style={styles.artist} >{item.artist}</Text>
                            <Text style={styles.studio} > - {item.studio}</Text>
                        </View>
                    </View>
                    <Caroussel images={images}/>
                    <View style={styles.footer}>
                        <View style={styles.fav}>
                            <Icon  size={(width/15)} type={Icons[0].type} name={Icons[0].icon}/>
                        </View>
                        <View style={styles.ico}>
                            <Icon style={{marginRight: (width/45)}} size={(width/15)} type={Icons[1].type} name={Icons[1].icon}/>
                            <Icon style={{marginRight: (width/45)}} size={(width/15)} type={Icons[2].type} name={Icons[2].icon}/>
                            <View style={styles.like}>
                                <Icon  size={(width/15)} type={Icons[3].type} name={Icons[3].icon}/>
                                <Text style={{fontSize: (width/35)}}>
                                    {calcul(item.like)}
                                </Text>
                            </View>
                        </View> 
                    </View>
                    <View style={styles.text}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.desc}>{showMore(item.desc)}</Text>
                    </View>
                </View>
            )
        })  
    )
};

const styles = StyleSheet.create({
    
    publicationStyle: {
        width,
        backgroundColor: 'black',
    },
        header:{
            borderTopColor: 'rgba(96, 44, 201, 1)',
            borderTopWidth: 5,
            backgroundColor: 'rgb(204, 179, 255)',
            height: width*0.15,
            width: width,
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
                artist: {
                    alignSelf: 'flex-start',
                    fontSize: (width/25),
                    marginLeft: (width/25),
                    color: 'black',
                    fontFamily: 'rooters',
                },
                studio: {
                    alignSelf: 'flex-start',
                    marginLeft: (width/20),
                    fontSize: (width/30),
                    color: 'black',
                    opacity: 0.7,
                },
        footer:{
            backgroundColor: 'rgb(204, 179, 255)',
            height: width*0.14,
            width: width,
        },
            fav:{
                flexDirection:'row',
                position: 'absolute',
                margin:(width/50),
            },
            ico:{
                flexDirection:'row',
                right:0,
                margin: (width/50),
                position: 'absolute',
            },
                like: {
                    textAlign: 'center',
                },  
        text:{
            width: width,
            marginBottom: (width/30),
        },
            title:{
                fontSize: (width/20),
                margin: (width/50),
                color:'rgb(204, 179, 255)',
                fontFamily: 'rooters',
            },
            desc:{
                fontSize: (width/30),
                marginHorizontal: (width/30),
                marginBottom: (height/30),
                color:'white',
                overflow: 'visible',
            }       
})

export default Publication;