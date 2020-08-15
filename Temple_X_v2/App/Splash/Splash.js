//
//  Splash
//  Temple X v2
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class Splash extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onGroup66Pressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("Home")
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<Image
					source={require("./../../assets/images/temple-x--04.png")}
					style={styles.templeX04Image}/>
				<Text
					style={styles.sacredSpacesForYoText}>Sacred spaces for young children.</Text>
				<Text
					style={styles.aBlendedInternatioText}>A blended international school model focused on early childhood. We offer experimental and distance learning engagements.</Text>
				<TouchableOpacity
					onPress={this.onGroup66Pressed}
					style={styles.group66Button}>
					<Text
						style={styles.group66ButtonText}>Explore Now</Text>
				</TouchableOpacity>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(4, 21, 51)",
		flex: 1,
		alignItems: "center",
	},
	templeX04Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "stretch",
		width: null,
		height: 116,
		marginLeft: 18,
		marginRight: 18,
		marginTop: 242,
	},
	sacredSpacesForYoText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Rubik-Bold",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		width: 279,
		marginTop: 27,
	},
	aBlendedInternatioText: {
		backgroundColor: "transparent",
		opacity: 0.8,
		color: "white",
		fontFamily: "Rubik-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 274,
		marginTop: 23,
	},
	group66Button: {
		backgroundColor: "rgb(108, 240, 253)",
		borderRadius: 14.5,
		shadowColor: "rgba(247, 37, 133, 0.2)",
		shadowRadius: 20,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 181,
		height: 29,
		marginTop: 25,
	},
	group66ButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	group66ButtonText: {
		color: "white",
		fontFamily: "Rubik-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
})
