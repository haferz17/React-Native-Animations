import React, { Component } from 'react';
import {  
    View,
    Animated
} from 'react-native';

export default class Header extends Component {
    render(){
        const headerHeight = this.props.scroll.interpolate({
            inputRange:[0,200],
            outputRange:[100,80]
        })
        return(
            <View>
                <Animated.View style={{backgroundColor:'lightskyblue',height:headerHeight}}>

                </Animated.View>        
            </View>
        )
    }
}