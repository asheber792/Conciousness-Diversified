import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

import HeaderTitle from './HeaderTitle'
import InfoNav from './InfoNav'

export default class MeditationInfo extends Component {
    static navigationOptions = ({navigation}) => {
		return{
	    	headerTitle: <HeaderTitle />,
	    	headerRight: (
	    		<Text style={{flex:1, marginLeft: -15}} onPress={() => navigation.navigate("Home")}>Logout</Text>
	    	)
		}
  	};


  render() {
  	//text from medicalnewstoday and briality
    return (
    	<View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 15 }}> 
    	<InfoNav navigation={this.props.navigation} />
	        <ScrollView>
	        	<Text style={{fontWeight: 'bold', fontSize: 18}}>{"\n"}Binaural Beats</Text> 
	        	<Text>
		        	A binaural beat is an auditory illusion which is created when two different 
		        	frequencies of a sound are played simultaneously into each ear. The effect 
		        	was discovered by the scientist Heinrich Wilhelm Dove in 1839. Because your brain
		        	is receiving two different tones, it tries to reconcile the information it is 
		        	receiving by creating a 3rd tone. This 3rd tone is the sound you hear when you 
		        	listen to binaural beats. This 3rd tone doesn’t actually exist anywhere except 
		        	in your head. For example, if one ear is played a frequency that is 300 Hz and 
		        	the other ear is simultaneously played a frequency of 320 Hz, you will hear a third 
		        	tone which will pulse at 20 Hz. This third sound wave can influence the brain state 
		        	and change the frequency of your brainwaves.
		        	{"\n"}
		        	The four known categories of frequency pattern include:
		        	{"\n"} 
	        	</Text> 
	        	<Text style={{fontWeight: 'bold'}}>Delta Patterns</Text>
	        	<Text>
	        		Binaural beats in the delta pattern are set at a frequency of between 0.1 and 4 Hz, 
	        		which is associated with dreamless sleep.
	        		{"\n"}
	        	</Text>
	        	<Text style={{fontWeight: 'bold'}}>Theta Patterns</Text>
	        	<Text>
	        		Binaural beats in the theta pattern are set at a frequency of between 4 and 8 Hz, which 
	        		is associated with sleep in the rapid eye movement or REM phase, meditation, and creativity.
	        		{"\n"}
	        	</Text>
	        	<Text style={{fontWeight: 'bold'}}>Alpha Patterns</Text>
	        	<Text>
	        		Binaural beats in the alpha pattern are set at a frequency of between 8 and 13 Hz, which may 
	        		encourage relaxation.
	        		{"\n"}
	        	</Text>
	        	<Text style={{fontWeight: 'bold'}}>Beta Patterns</Text>
	        	<Text>
	        		Binaural beats in the beta pattern are set at a frequency of between 14 Hz and 100 Hz, which 
	        		may help promote concentration and alertness. However, this frequency can also increase anxiety 
	        		at the higher end of the frequency range.
	        		{"\n"}
	        	</Text>
	        </ScrollView>
        </View>
    );
  }
}
