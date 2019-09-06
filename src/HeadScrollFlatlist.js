import React, { Component } from 'react';
import {  
    View,
    Text,
    Animated
} from 'react-native';
import Header from './Header'
import Flatlist from './Flatlist'

export default class HeadScrollFlatlist extends Component {
    constructor(props){
        super(props)
        this.state={
            scrollY: new Animated.Value(0),
        }
        this.action = Animated.event([{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]).bind(this)
    }
    renderItem = ({item}) => {
        return (
            <View style={{height:200,backgroundColor:'#707070',marginTop:20}}>
                <Text>{item}</Text>
            </View>
        )
    }
    render() {
        return(
            <View style={{flex:1}}>
                <Header scroll={this.state.scrollY}/>
                <Flatlist action={this.action}/>
            </View>
        )
    }
}