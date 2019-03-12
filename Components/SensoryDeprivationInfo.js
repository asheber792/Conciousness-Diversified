import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

import HeaderTitle from './HeaderTitle'
import InfoNav from './InfoNav'

export default class LucidDreamingInfo extends Component {
	static navigationOptions = ({navigation}) => {
		return{
	    	headerTitle: <HeaderTitle />,
	    	headerRight: (
	    		<Text style={{flex:1, marginLeft: -15}} onPress={() => navigation.navigate("Home")}>Logout</Text>
	    	)
		}
	};

  render() {
    return (
    	<View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 15 }}> 
	      	<InfoNav navigation={this.props.navigation} />
	        <ScrollView>
	        	<Text style={{fontWeight: 'bold', fontSize: 18}}>{"\n"}Sensory Deprivation</Text> 
	        	<Text>
		        	A sensory deprivation tank, also called an isolation tank or flotation tank, 
		        	is used for restricted environmental stimulation therapy (REST). It is a dark, 
		        	soundproof tank that is filled with a foot or less of salt water. The first 
		        	tank was designed in 1954 by John C. Lilly, an American physician and neuroscientist. 
		        	He designed the tank to study the origins of consciousness by cutting off all external 
		        	stimuli.
		        	{"\n"}
	        	</Text> 
	        	<Text style={{fontWeight: 'bold'}}>Effects</Text>
	        	<Text>
	        		The water in a sensory deprivation tank is heated to skin temperature and nearly saturated 
	        		with Epsom salt (magnesium sulfate), providing buoyancy so you float more easily. You enter 
	        		the tank nude and are cut off from all outside stimulation, including sound, sight, and 
	        		gravity when the tank’s lid or door is closed. As you float weightless in the silence and 
	        		darkness, the brain is supposed to enter into a deeply relaxed state. Sensory deprivation 
	        		tank therapy is said to produce several effects on the brain, ranging from hallucinations to 
	        		to improved physical and mental state to enhanced creativity.
	        		{"\n"}
	        	</Text>
	        </ScrollView>
        </View>
    );
  }
}
