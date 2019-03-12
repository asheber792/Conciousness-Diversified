import React, { Component } from 'react';
import * as RN from 'react-native';

export default class InfoNav extends Component {

  render() {
    return (
    	<RN.View style={styles.container}> 
        	<RN.View style={{flexDirection: 'row', justifyContent: 'center', alignItems: "center", marginBottom: 5}}>
        		<RN.TouchableOpacity style={styles.text} onPress={() => {this.props.navigation.navigate("LucidDreaming")}}>
              <RN.Text style={styles.text}>Lucid Dreaming</RN.Text>
        		</RN.TouchableOpacity>
            <RN.TouchableOpacity style={styles.text} onPress={() => {this.props.navigation.navigate("Meditation")}}>
              <RN.Text style={styles.text}>Meditation</RN.Text>
            </RN.TouchableOpacity>
        	</RN.View> 
        	<RN.View style={{flexDirection: 'row'}}>
        		<RN.TouchableOpacity style={styles.text} onPress={() => {this.props.navigation.navigate("BinauralBeats")}}>
              <RN.Text style={styles.text}>Binaural Beats</RN.Text>
            </RN.TouchableOpacity>
        		<RN.TouchableOpacity style={styles.text} onPress={() => {this.props.navigation.navigate("SensoryDeprivation")}}>
              <RN.Text style={styles.text}>Sensory Deprivation</RN.Text>
            </RN.TouchableOpacity>
        	</RN.View> 
        </RN.View>
    );
  }
}

const styles = RN.StyleSheet.create({
  container: {
  	marginTop: 5, 
  	paddingBottom: 10, 
  	width: 300, 
  	justifyContent: 'center',
    backgroundColor: '#824ff3'

  },
  text :{
  	flex: 1, 
    height: 17,
  	textAlign: 'center',
    fontWeight: 'bold',
    color: 'white' 
  }
});
