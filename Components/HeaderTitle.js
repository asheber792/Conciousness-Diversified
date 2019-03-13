import React from 'react';
import axios from 'axios'
import { Image, View, Text } from 'react-native';

export default class HeaderTitle extends React.Component {
   state = {
    loggedOut: false
  }

  onLogOut = async () => {
    const response = await axios.delete('https://nameless-woodland-89876.herokuapp.com/logout')
    
    this.setState({
      loggedOut: true
    })

    RN.Alert.alert(
        'Logged Out!', 
        '',
        [{text: 'OK', onPress: () => this.props.navigation.navigate("Home")}]
    ) 
  }

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1}}>
        <Image
          source={require('../assets/app_images/ouro_logo.png')}
          style={{ width: 40, height: 40, marginLeft: '15%' }}
        />
      </View>
      
      <Text style={{flex:3, fontWeight: 'bold', color: 'white', fontSize: 16, marginLeft: '5%'}}>Consciousness Diversified</Text>
      </View>
    );
  }
}