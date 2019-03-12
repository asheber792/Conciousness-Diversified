import React, { Component } from 'react'
import * as RN from 'react-native'
import axios from 'axios'

export default class JournalEntry extends Component {
	state = {
		entry: this.props.navigation.state.params.entry, 
		entryLoaded: false, 
		deleted: false
	}

  	static navigationOptions = {
    	title: 'Journal Entry ',
  	}


  	onEntryDelete = async evnt => {
  		try {
  			await axios.delete(`http://58f6feea.ngrok.io/journal_entries/${this.state.entry.id}`)

  			this.setState({
  				deleted: true
  			})

  			this.props.navigation.state.params.refresh()
  			
  			RN.Alert.alert(
				'Delete', 
				'Journal Entry Deleted', 
				[{text: 'OK', onPress: () => this.props.navigation.navigate("JournalEntries")}]
			)
  		}
  		catch(e) {
  			console.error('error: ', e)
  		}
  	}
	render() {
		return (
			<RN.View style={{ flex: 1, justifyContent: "center" }}>
				<RN.Button color='#824ff3' title='Edit' onPress={() => this.props.navigation.navigate('EditJournalEntry', {
					entry: this.state.entry, 
					refresh: this.props.navigation.state.params.refresh
				})} />
				<RN.Button color='#824ff3' title='Delete' onPress={this.onEntryDelete} />
				<RN.View>
			    	<RN.Text>Title: {this.state.entry.title}</RN.Text>
			    	<RN.Text>Content: {this.state.entry.content + "\n"}</RN.Text>
		    	</RN.View>
			</RN.View>
		)
	}
}
