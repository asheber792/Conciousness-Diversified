import React, { Component } from 'react'
import * as RN from 'react-native'
import axios from 'axios'

export default class Registration extends Component {
	state = {
		user: null, 
		loggedIn: false 
	}

	onLoginFormSubmit = async evnt => {
		try{
			let userAccountInfo = {
				email: this.state.email, 
				password: this.state.password
			}

			await axios.post('http://58f6feea.ngrok.io/login', userAccountInfo)

			this.setState({
				user: userAccountInfo, 
				loggedIn: true
			})

			if(this.state.loggedIn) {
            	this.props.navigation.navigate("Main")
        	}
		}
		catch(e){
			RN.Alert.alert(
				'Login Error', 
				'Email/Passsword Incorrect',
				[{text: 'OK', onPress: () => this.props.navigation.navigate("Log In")}]
			)
		}
	}

	render(){
		return(
			<RN.KeyboardAvoidingView style={{ flex: 1, justifyContent: "center", alignItems: "center" }} enabled>
	            <RN.TextInput style={{textAlign: 'center'}} onChangeText={ email => this.setState({email}) } placeholder='Email' />
	            <RN.TextInput style={{textAlign: 'center'}} onChangeText={ password => this.setState({password}) } secureTextEntry={true} placeholder='Password' /> 
				<RN.Text>{'\n'}If you have an account, please {'\n'}</RN.Text>
                <RN.Button color='#824ff3' title='Log In' onPress={this.onLoginFormSubmit} /> 
			</RN.KeyboardAvoidingView>
		)
	}
}