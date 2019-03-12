import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import axios from 'axios'

export default class JournalEntries extends Component {
	state = {
		entries: "",
		entryDataLoaded: false
	}

  	static navigationOptions = {
    	title: 'Journal Entry List',
  	}

	getEntryDate = async () => {
		try{
			const response = await axios.get('http://58f6feea.ngrok.io/journal_entries')
			console.log(response.data)

			let entries = response.data.journal_entries 

			this.setState({
				entries: entries,
				entryDataLoaded: true
			})

		}
		catch(e){
			console.error(e)
		}
	}

	componentDidMount = () => {
		this.getEntryDate()
	}

	render() {
		return (
			<View>
				<View>
					<Text onPress={() => {this.props.navigation.navigate("NewJournalEntry", {refresh: this.getEntryDate})}}>+Create New Entry</Text>
				</View>
				<ScrollView contentContainerStyle={styles.contentContainer}>
					<View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 15 }}>
						{
							!this.state.entryDataLoaded ? 
								<Text>Loading Entries... </Text> :   
								this.state.entryDataLoaded && this.state.entries.map(entry => {
								return(
										<TouchableOpacity key={entry.id} onPress={() => this.props.navigation.navigate('JournalEntry', {
											entry: entry, 
											refresh: this.getEntryDate
										})}>
									    	<Text>Title: {entry.title}</Text>
									    	<Text>Content: {entry.content + "\n"}</Text>
								    	</TouchableOpacity>
								    
								)
						})}
					</View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	contentContainer: {
    	paddingVertical: 20
	}
});
