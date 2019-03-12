import React, { Component } from 'react'
import * as RN from 'react-native'
import axios from 'axios'

export default class NewJournalEntry extends Component {
	state = {
		entry: "",
		entryCreated: false
	}

  	static navigationOptions = {
    	title: 'New Journal Entry',
  	}

	onEntryFormSubmit = async evnt => {
		try{
			let newJournalEntry = {
				title: this.state.title,
				content: this.state.content	
			}

			await axios.post('http://58f6feea.ngrok.io/journal_entries', newJournalEntry)

			this.setState({
				entry: newJournalEntry,
				entryCreated: true
			})

			this.props.navigation.state.params.refresh()
			
			RN.Alert.alert(
				'New Entry Saved', 
				'',
				[{text: 'OK', onPress: () => this.props.navigation.navigate("JournalEntries")}]
			)
		}
		catch(e){
			RN.Alert.alert(
				'Entry Save Error', 
				'You must at least include content for your entry',
				[{text: 'OK', onPress: () => this.props.navigation.navigate("NewJournalEntry")}]
			)
		}
	}

	render() {
		return(
			<RN.KeyboardAvoidingView style={{ flex: 1, width: '100%', padding: 15}} enabled>
				<RN.View>
					<RN.TextInput 
						onChangeText={ title => this.setState({title}) } 
						value={this.state.title}
						placeholder='Entry Title' 
					/>
					<RN.TextInput onChangeText={ content => this.setState({content}) } 
						value={this.state.content} 
						placeholder='Content goes here...' 
						multiline={true}
						numberOfLines={5}
					/>
				</RN.View>
				<RN.Button color='#824ff3' title='Save' onPress={this.onEntryFormSubmit} />
			</RN.KeyboardAvoidingView>
		)
	}
}
