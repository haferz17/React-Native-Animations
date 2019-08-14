import React, { Component } from 'react';
import { 
    View, 
    Animated, 
    Easing, 
    Dimensions 
} from 'react-native';
const { width, height } = Dimensions.get('screen')

export default class AnimatedTiming extends Component {
    constructor(props){
        super(props);
        this.animValue= new Animated.Value(1)
    }
    animTime = () => {
        this.animValue.setValue(1)
        Animated.timing(this.animValue, {
            toValue: 2,
            duration: 5000,
            easing: Easing.bounce
        }).start(()=>this.animTime())
    }
    componentDidMount(){
        this.animTime()
    }
    render() {
        const spin = this.animValue.interpolate({
            inputRange: [1,2],
            outputRange: ['0deg','360deg']
        })
        const move = this.animValue.interpolate({
            inputRange: [1,1.5,2],
            outputRange: [0,height*0.8,0]
        })
        const sizeY = this.animValue.interpolate({
            inputRange: [1,1.5,2],
            outputRange: [68,220,68]
        })
        const sizeX = this.animValue.interpolate({
            inputRange: [1,1.5,2],
            outputRange: [77,240,77]
        })
        const opacity = this.animValue.interpolate({
            inputRange: [1,1.5,2],
            outputRange: [1,0,1]
        })
        return (
            <View style={{flex:1,alignItems:'center'}}>
                <Animated.View
                    style={{ marginTop: move, opacity}}>
                   <Animated.Image 
                        style={{width: sizeX, height: sizeY,transform: [{rotate:spin}]}} 
                        source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
                    />
                </Animated.View>
            </View>
        )
    }
}