import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import * as RN from 'react-native'

import HeaderTitle from './HeaderTitle'
import InfoNav from './InfoNav'

export default class Information extends Component {
	static navigationOptions = ({navigation}) => {
		return{
	    	headerTitle: <HeaderTitle />,
	    	headerRight: (
	    		<Text style={{flex:1, marginLeft: -10}} onPress={() => navigation.navigate("Home")}>Logout</Text>
	    	)
		}
  	};

  render() {
    return (
    	<View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 15 }}> 
	      	<InfoNav navigation={this.props.navigation} />
	        <ScrollView>
	        	<Text>
	        		<Text style={{fontWeight: 'bold'}}>Consciousness Diversified</Text> is an app displaying information/instructions/techniques
		        	of consciousness exploration in some of it's many capacites with methods such as
		        	lucid dreaming, meditation, binaural beat, etc. You will be able to create and maintain
		        	your own Experience/Dream Journal on you're profile, viewable by only you, to aid in your
		        	jourrney.  
	    		</Text>
	        	<Text style={{fontWeight: 'bold', fontSize: 18}}>{"\n"}What is Consciousness?</Text> 
	        	<Text>
		        	Consciousness is the state or quality of awareness or of 
		        	being aware of an external object or something within oneself.
		        	It has been defined variously in terms of sentience, awareness, 
		        	qualia, subjectivity, the ability to experience or to feel, wakefulness,
		        	having a sense of selfhood or soul, the fact that there is something "that 
		        	it is like" to "have" or "be" it, and the executive control system of the 
		        	mind 
		        	{"\n"}
	        	</Text> 
	        	<Text style={{fontWeight: 'bold', fontSize: 18}}>What are Altered States of Consciousness?</Text>
	        	<Text>
	        		"An altered state is any mental state(s), induced by various physiological,
	        		psychological, or pharmacological maneuvers or agents, which can be recognized
	        		subjectively by the individual himself (or by an objective observer of the 
	        		individual) as representing a sufficient deviation in subjective experience 
	        		of psychological functioning from certain general norms for that individual 
	        		during alert, waking consciousness." - Arnold M. Ludwig, 1966 
	        		{"\n"}
	        	</Text>
	        	<Text style={{fontWeight: 'bold', fontSize: 18}}>What are Psychonautics?</Text>
	        	<Text>
	        		Psychonautics (from the Ancient Greek ψυχή psychē "soul, spirit, mind" and ναύτης 
	        		naútēs "sailor, navigator" – "a sailor of the soul") refers both to a methodology
	        		for describing and explaining the subjective effects of altered states of consciousness. 
	        		The term has been applied diversely, to cover all activities by which altered states 
	        		are induced and utilized for spiritual purposes or the exploration of the human condition.
	        	</Text>
	        </ScrollView>
        </View>
    );
  }
}
