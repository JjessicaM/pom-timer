import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const timer = () => {};

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingTime: 25,
      remainingBreak: 10,
    };
  }

  countdownTimer() {
    this.setState({ remainingTime: 25 });
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

  countdownBreak() {
    this.setState({ remainingBreak: 10 });
    clearInterval(timer);
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

  render() {
    return (
      <View style={styles.container}>
        <Text>Time :{this.state.remainingTime}</Text>
        <Text>Break : {this.state.remainingBreak}</Text>
        <Button title="Start" onPress={() => this.countdownTimer()} />
        <Button title="Break 10" onPress={() => this.countdownBreak()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 20,
  },
});

export default Timer;
