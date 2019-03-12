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
    return (
    	<View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 15 }}> 
    		<InfoNav navigation={this.props.navigation} />
	        <ScrollView>
	        	<Text style={{fontWeight: 'bold', fontSize: 18}}>{"\n"}Meditation</Text> 
	        	<Text>
					Meditation is a practice where an individual uses a technique – such as mindfulness, 
					or focusing their mind on a particular object, thought or activity – to train attention 
					and awareness, and achieve a mentally clear and emotionally calm and stable state. Meditation 
					has been practiced since antiquity in numerous religious traditions and beliefs, often as
					part of the path towards enlightenment and self realization. 
		        	{"\n"}
	        	</Text> 
	        	<Text style={{fontWeight: 'bold'}}>Mindfulness</Text>
	        	<Text>
	        		There are many varieties of meditation, one being mindfulness, one of the best known at this time. 
	        		Mindfulness is the basic human ability to be fully present, aware of where we are and what we’re doing, 
	        		and not overly reactive or overwhelmed by what’s going on around us. While mindfulness is innate, it can be 
	        		cultivated through proven techniques, particularly seated, walking, standing, and moving meditation (it’s also 
	        		possible lying down but often leads to sleep); short pauses we insert into everyday life; and merging meditation
	        		practice with other activities, such as yoga or sports
	        		{"\n"}
	        	</Text>
	        </ScrollView>
        </View>
    );
  }
}
