import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

import InfoNav from './InfoNav'
import HeaderTitle from './HeaderTitle'

export default class LucidDreamingInfo extends Component {
  static navigationOptions = ({navigation}) => {
		return{
	    	headerTitle: <HeaderTitle />,
	    	headerRight: (
	    		<Text style={{flex:1}} onPress={() => navigation.navigate("Home")}>Logout</Text>
	    	)
		}
  	};

  render() {
  	//text from wikipedia as well as wikibooks
    return (
    	<View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 15 }}> 
	      	<InfoNav navigation={this.props.navigation} />
	        <ScrollView>
	        	<Text style={{fontWeight: 'bold', fontSize: 18}}>{"\n"}Lucid Dreaming</Text> 
	        	<Text>
		        	A lucid dream is a dream during which the dreamer is aware that they are
		        	dreaming. During a lucid dream, the dreamer may gain some amount of 
		        	control over the dream characters, narrative, and environment; however, 
		        	this is not actually necessary for a dream to be described as lucid
		        	{"\n"}
	        	</Text> 
	        	<Text style={{fontWeight: 'bold'}}>First Steps</Text>
	        	<Text>
	        		If you have trouble initially falling asleep, avoid drinking water for about an hour
	        		before going to bed. Otherwise, you may find yourself running to the bathroom,
	        	    disrupting any attempts at lucidity. Also, try to avoid caffeine and sugar before 
	        		bed. However, depending on your sensitivity, caffeine may only stimulate your mind 
	        		as opposed to your body. This extra grip on consciousness could be helpful in inducing
	        		lucid dreams. Exercising during the day is an excellent way of preparing your body for
	        		sleep. However, be sure to not exercise inside the three hours before bedtime, as 
	        		your body will be stimulated for a short time afterwards. The morning or afternoon is 
	        		the best time for this.
	        		{"\n"}
	        	</Text>
	        	<Text style={{fontWeight: 'bold'}}>Reality Checks</Text>
	        	<Text>
	        		A reality check is a test you can perform to see if you're dreaming or awake. It might 
	        		seem odd to test reality when you are sure that you're awake, but making a habit out of
	        		one or more of these reality checks will hugely increase your chances of having a 
	        		lucid dream. If, say, you hold your nose and try to breathe in through it several 
	        		times throughout the day then you're very likely to dream about doing it. And when 
	        		you dream about performing a reality check, then of course the results should come 
	        		out differently, in this case you'll find that you are somehow breathing in through 
	        		your closed nostrils. You'll know that you're dreaming, and be able to take lucid control.
	        		Some examples:
	        	</Text>
	        	<Text>
	        		Breathing 
	        		{'\n'} - Can you breathe with your fingers tightly sealing your nose and your mouth shut?{'\n'}
	        		Vision
	        		{'\n'} - Do you have perfect vision? This only works for people who have at least slightly 
	        		blurry vision in the waking world. Alternatively, if you have perfect vision in the waking 
	        		world, you may have blurred vision in the dream world.
	        		{'\n'}
	        		Time
	        		{'\n'} - Does your watch or clock tell a reasonable time? Are you even able to read the time 
	        		off it? Sometimes clocks have the wrong number of hands or have strange symbols. Try reading 
	        		the time twice, like the Reading check above. Note: Digital clocks often work better for this 
	        		reality check.
	        		{'\n'}
	        		Light Switches
	        		{'\n'} - Does a light switch work? {'\n'}
	        		Nose 
	        		{'\n'} - Can you see your nose with one eye closed? {'\n'}
	        	</Text>
	        	<Text style={{fontWeight: 'bold', fontSize: 16}}>Techniques {'\n'}</Text>
	        	<Text style={{fontWeight: 'bold'}}>WBTB (Wake-Back-To-Bed)</Text>
	        	<Text>
	        		Wake yourself up after 4 to 6 hours of sleep, get out of bed and stay up for anywhere between 
	        		a few minutes to an hour before going back to bed. It is preferable that you do something 
	        		related to lucid dreaming during this time (such as reading about lucid dreaming), but it is 
	        		not required. This is best combined with other techniques; many people have amazing results 
	        		with a MILD/WBTB combination
	        		{'\n'}
	        	</Text> 
	        	<Text style={{fontWeight: 'bold'}}>MILD (Mnemonic Induction of Lucid Dreams)</Text>
	        	<Text>
	        		With the MILD technique, as you are falling asleep, you concentrate on your intention to remember
	        		to recognize that you are dreaming. Repeat a short mantra in your head, such as “Next time I'm 
	        		dreaming, I will remember I'm dreaming”. Think about what this means (i.e., that you want to
	        		remember that you are dreaming—in the same way you might go to a grocery store and suddenly 
	        		remember that you need bread), and imagine that you are back in a dream you've had recently, 
	        		but this time you recognize that you are dreaming. For example, if you recently dreamed of flying,
	        	    imagine realizing that it is a dream because you are flying. Keep repeating and visualizing the mantra
	        	    until you are sure that your intention is set in your mind or you fall asleep. If you stop repeating 
	        	    and visualizing the mantra, then still try to make sure the last thing in your mind before falling 
	        	    asleep is your intention to remember to recognize that you are dreaming.
	        	    {'\n'}
	        	</Text>
	        	<Text style={{fontWeight: 'bold'}}>WILD (Wake-Initiated Lucid Dream)</Text>
	        	<Text>
	        		For WILDs to occur, it is best for your body to be completely relaxed. When you go back to bed, lie 
	        		down comfortably. Now tense and relax your body, starting from your shoulders and working downwards, 
	        		then back up to the face. This (or similar relaxation, meditation, or trance techniques) should make
	        		your body feel slightly heavy and relaxed. There are many different ways to induce WILDs, but they 
	        		all involve simultaneously attempting to keep the mind aware while attempting to have the body fall asleep.
	        		{'\n'} 
	        	</Text>
	        </ScrollView>
        </View>
    );
  }
}
