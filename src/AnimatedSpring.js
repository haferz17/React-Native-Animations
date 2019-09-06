import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableOpacity
} from 'react-native'

export default class AnimatedSpring extends Component {
    constructor () {
        super()
        this.springValue = new Animated.Value(0.5)
        this.springBtnValue = new Animated.Value(0.5)
        this.state = {
            isSelected: false
        }
    }
    spring () {
        this.springValue.setValue(0.5)
        Animated.spring(
        this.springValue,
        {
            toValue: 1,
            friction: 1,
            tension: 1
        }
        ).start(()=>this.springValue.setValue(0.5))
    }
    animBtn () {
        let { isSelected } = this.state
        this.setState({isSelected:!isSelected})
        this.springBtnValue.setValue(0.5)
        Animated.spring(
        this.springBtnValue,
        {
            toValue: 1,
            friction: 1,
            tension: 1
        }
        ).start(()=>this.resetBtn())
    }
    resetBtn () {
        let { isSelected } = this.state
        this.setState({isSelected:!isSelected})
        this.springBtnValue.setValue(0.5)
    }
    render () {
        return (
        <View style={styles.container}>
            <TouchableOpacity onPress={this.spring.bind(this)}>
                <Animated.Image
                style={{ width: 227, height: 200, transform: [{scale: this.springValue}] }}
                source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>
            </TouchableOpacity>
            {
                this.state.isSelected ?
                <Animated.View style={{ transform: [{scale: this.springBtnValue}] }}>
                    <Text style={styles.selected}>Login Successful !</Text>
                </Animated.View> 
                :
                <TouchableOpacity onPress={this.animBtn.bind(this)}> 
                    <Text style={styles.btn}>Login</Text>
                </TouchableOpacity>
            }
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    selected: {
        color:'#fff',
        fontSize:25,
        padding:40,
        backgroundColor:'#4caf50',
        borderRadius:8,
        elevation:5
    },
    btn: {
        color:'#fff',
        fontSize:20,
        padding:20,
        backgroundColor:'#2196f3',
        borderRadius:8,
        elevation:5
    }
})