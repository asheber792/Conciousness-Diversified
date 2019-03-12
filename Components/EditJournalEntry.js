import React, { Component } from 'react'
import * as RN from 'react-native'
import axios from 'axios'

export default class EditJournalEntry extends Component {
	state = {
		entry: this.props.navigation.state.params.entry,
		edited: false
	}

  	static navigationOptions = {
    	title: 'New Journal Entry',
  	}

	onEntryFormSubmit = async evnt => {
		try{
			let journalEntry = {
				title: this.state.title,
				content: this.state.content	
			}
			
			await axios.put(`http://58f6feea.ngrok.io/journal_entries/${this.state.entry.id}`, journalEntry)

			this.setState({
				edited: true
			})

			this.props.navigation.state.params.refresh()
  			this.props.navigation.navigate('JournalEntries') //<-- temp this.props.navigation.navigate('JournalEntry')
		}
		catch(e){
			console.error(e)
		}
	}

	render() {
		return(
			<RN.KeyboardAvoidingView behavior="height" style={{ flex: 1, width: '100%', padding: 15}} enabled>
				<RN.View>
					<RN.TextInput onChangeText={ title => this.setState({title}) } defaultValue={this.state.entry.title} />
					<RN.TextInput onChangeText={ content => this.setState({content}) } 
						defaultValue={this.state.entry.content} 
						multiline={true}
						numberOfLines={5}
					/>
	                <RN.Button color='#824ff3' title='Save' onPress={this.onEntryFormSubmit} />
				</RN.View>
			</RN.KeyboardAvoidingView>
		)
	}
}
