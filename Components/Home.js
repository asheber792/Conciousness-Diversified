import React from 'react';
import * as RN from 'react-native';
import { Font, AppLoading } from 'expo'

export default class App extends React.Component {
  state = {
    fontLoaded: false
  }

  render() {
    return(
      <RN.View style={styles.container}>
        <RN.TouchableWithoutFeedback onPress = {() => {this.props.navigation.navigate("UserAccount")}}> 
        <RN.ImageBackground 
          source = {require('../assets/app_images/home_bg.jpg')} 
          imageStyle = {
            {
              resizeMode: 'cover'
            }
          }
          style = {
            {
              justifyContent: "center",
              width: RN.Dimensions.get("window").width,
              height: RN.Dimensions.get("window").height,
            }
          }
        >
          <RN.Text style={styles.titleP1}>Consciousness</RN.Text>
          <RN.Text style={styles.titleP2}>Diversified</RN.Text>
        </RN.ImageBackground>
        </RN.TouchableWithoutFeedback>  
      </RN.View>
    )
  }
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleP1:{
    textAlign: 'center',
    fontFamily: 'notoserif',
    fontSize: 22,
    marginLeft: -15,
    elevation: 5
  },
  titleP2:{
    textAlign: 'center',
    fontFamily: 'notoserif',
    fontSize: 24,
    fontWeight: 'bold', 
    marginLeft: 65
  }
});