import React, {Component} from 'react';
import ReactDom from 'react-native';
import PropTypes from 'prop-types';
import {Constants} from 'expo'
import {StyleSheet, Text, View, Button,Image,Vibration} from 'react-native';

const timer = () => {};
const Duration = 1000;
const Pattern = [1000,2000,3000,4000];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingTime:25,
      remainingBreak: 10,
    };
  }
  countdownTimer = () => {
    this.setState({ remainingTime: 25,});
    clearInterval(timer);
    timer = setInterval(() => {
      if (!this.state.remainingTime) {
        clearInterval(timer);
        return false;
      }
      this.setState(prevState => {
        return { remainingTime: prevState.remainingTime - 1 };
      });
    }, 1000);
  }

  countdownBreak = () => {
    this.setState({ remainingBreak: 10});
    clearInterval(Timer);
    timer = setInterval(() => {
      if (!this.state.remainingBreak) {
        clearInterval(timer);
        return false;
      }
      this.setState(prevState => {
        return { remainingBreak: prevState.remainingBreak - 1 };
      });
    }, 1000);
  }

  handleReset = () => {
    this.state.clearInterval(Timer)

  }

  stopTimer = () => {

  }

  timeOut = () => {
    this.setTimeout(() => {
      if(this.state.remainingTime == 0){
        Vibration.vibrate(Duration);
      }
    }, timeout);

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontWeight:'bold', fontSize: 25}}>
         Welcome To Egg Timer
         </Text>
      
        <Image 
        style={{width:150, height: 150}}
        source={require('./assets/eggs.png')} />

        <Text style={{fontWeight:'bold', fontSize:30}}>
         Time:{this.state.remainingTime}
         </Text>
    
         <Text style={{fontWeight:'bold', fontSize:30}}> 
         Break:{this.state.remainingBreak}
         </Text>

          <Button 
          onPress={this.countdownTimer}
          style="submit"
          title="START"
          color="pink"/> 

          <Button
           onPress={this.countdownBreak}
           style="submit"
           title="BREAK"
           color='pink'/>  

          <Button 
          onPress={this.stopTimer}
          style="submit"
          title="PAUSE"
          color="pink"/>

          <Button 
          onPress={this.handleReset}
          style="submit"
          title="RESET"
          color="pink"/>

        
     </View>  
  
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
