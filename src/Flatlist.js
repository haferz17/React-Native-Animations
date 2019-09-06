import React, { Component } from 'react';
import {  
    View,
    Text,
    Animated,
} from 'react-native';

export default class Flatlist extends Component {
    state={
        data: [1,2,3,4,5]
    }
    renderItem = ({item}) => {
        return (
            <View style={{height:200,backgroundColor:'#707070',marginTop:20}}>
                <Text>{item}</Text>
            </View>
        )
    }
    render() {
        console.log(this.props);
        return(
            <View>
                <Animated.FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    scrollEventThrottle={20}
                    onScroll={this.props.action}
                    keyExtractor={(index)=>index.toString()}
                />
            </View>
        )
    }
}