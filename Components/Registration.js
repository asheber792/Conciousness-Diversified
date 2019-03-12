import React, { Component } from 'react'
import * as RN from 'react-native'
import axios from 'axios'

export default class Registration extends Component {
	state = {
		user: null, 
		created: false 
	}

	onRegistrationFormSubmit = async evnt => {
		try{
			let newUser = {
				first_name: this.state.first_name, 
				last_name: this.state.last_name, 
				email: this.state.email, 
				password: this.state.password,
				password_confirmation: this.state.password_confirmation
			}

			await axios.post('http://58f6feea.ngrok.io/users', newUser)

			this.setState({
				user: newUser, 
				created: true
			})

			RN.Alert.alert(
				'Registration Complete', 
				'Thank you for registering, you will now be logged in', 
				[{text: 'OK', onPress: () => this.props.navigation.navigate("Main")}]
			)
		}
		catch(e){
			RN.Alert.alert(
				'Registration Error', 
				'Check all fields & Password must be at least 6 characters long',
				[{text: 'OK', onPress: () => this.props.navigation.navigate("Registration")}]
			)
		}
	}

	render(){
		return(
			<RN.View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<RN.TextInput style={{textAlign: 'center'}} onChangeText={ first_name => this.setState({first_name}) } placeholder='First name' />
				<RN.TextInput style={{textAlign: 'center'}} onChangeText={ last_name => this.setState({last_name}) } placeholder='Last name' />
	            <RN.TextInput style={{textAlign: 'center'}} onChangeText={ email => this.setState({email}) } placeholder='Email' />
	            <RN.TextInput style={{textAlign: 'center'}} onChangeText={ password => this.setState({password}) } secureTextEntry={true} placeholder='Password' /> 
	            <RN.TextInput style={{textAlign: 'center'}} onChangeText={ password_confirmation => this.setState({password_confirmation}) } secureTextEntry={true} placeholder='Confirm Password' />
				<RN.Text>{'\n'}If you haven't already,{'\n'} </RN.Text>
                <RN.Button color="#824ff3" title='Sign Up' onPress={this.onRegistrationFormSubmit} />
			</RN.View>
		)
	}
}