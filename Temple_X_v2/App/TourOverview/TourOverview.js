//
//  TourOverview
//  Temple X v2
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class TourOverview extends React.Component {

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

	onButtonPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("SiteMenu")
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						justifyContent: "center",
					}}>
					<Image
						source={require("./../../assets/images/peter-jan-rijpkema-wi6o8owuwdw-unsplash.png")}
						style={styles.backgroundImageImage}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						height: 903,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							height: 146,
							marginLeft: 20,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 183,
								height: 99,
								marginTop: 47,
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/group-69-3.png")}
								style={styles.backButtonImage}/>
							<Text
								style={styles.ashburtonText}>Ashburton</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/temple-x--b3-1.png")}
							style={styles.templeXB31Image}/>
					</View>
					<View
						style={styles.textBackgroundView}/>
				</View>
				<View
					style={styles.line13View}/>
				<ScrollView
					style={styles.viewScrollView}>
					<View
						style={styles.overviewTextView}>
						<Text
							style={styles.overviewText}>Overview</Text>
						<Text
							style={styles.theStoryOfBlacksText}>The story of Blacks and Jews in the Ashburton/Forest Park Community</Text>
					</View>
					<View
						style={styles.detailsTextView}>
						<Text
							style={styles.detailsText}>Details</Text>
						<Text
							style={styles.tellTheStoryOfTwText}>tell the story of two girls living in the 1950’s. One a Black Christian girl moving into the neighborhood of Ashburton and a White Jewish girl who lived in this neighborhood her whole life. We will explore the girl’s feelings and create a historical context that will illuminate the cultural connections.</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.resourcesTextView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								height: 108,
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.resourcesText}>Resources</Text>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									height: 80,
									marginTop: 11,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									style={styles.amenitiesThreeView}>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 0,
											right: 0,
											top: 0,
											bottom: 0,
											justifyContent: "center",
										}}>
										<Image
											source={require("./../../assets/images/path-545.png")}
											style={styles.path545ThreeImage}/>
									</View>
									<Text
										style={styles.learnMoreText}>Learn More</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.amenitiesTwoView}>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 0,
											right: 0,
											top: 0,
											bottom: 0,
											justifyContent: "center",
										}}>
										<Image
											source={require("./../../assets/images/path-545.png")}
											style={styles.path545TwoImage}/>
									</View>
									<Text
										style={styles.tripPlannerText}>Trip Planner</Text>
								</View>
							</View>
						</View>
						<View
							style={styles.amenitiesView}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<Image
									source={require("./../../assets/images/path-545-2.png")}
									style={styles.path545Image}/>
							</View>
							<Text
								style={styles.directionsText}>Directions</Text>
						</View>
					</View>
					<TouchableOpacity
						onPress={this.onButtonPressed}
						style={styles.buttonButton}>
						<Text
							style={styles.buttonButtonText}>Start Tour</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	backgroundImageImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(130, 125, 143, 0.1)",
		shadowRadius: 30,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 811,
	},
	backButtonImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 27,
		height: 20,
		marginLeft: 4,
	},
	ashburtonText: {
		backgroundColor: "transparent",
		color: "rgb(4, 21, 51)",
		fontFamily: "Rubik-Regular",
		fontSize: 37,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 35,
	},
	templeXB31Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 105,
		height: 105,
	},
	textBackgroundView: {
		backgroundColor: "white",
		borderRadius: 50,
		shadowColor: "rgba(78, 68, 102, 0.1)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 654,
		marginTop: 103,
	},
	line13View: {
		backgroundColor: "rgb(208, 203, 219)",
		position: "absolute",
		alignSelf: "center",
		width: 40,
		top: 272,
		height: 4,
	},
	viewScrollView: {
		backgroundColor: "white",
		position: "absolute",
		left: 16,
		width: 346,
		top: 299,
		height: 350,
		alignItems: "center",
	},
	overviewTextView: {
		backgroundColor: "transparent",
		width: 295,
		height: 62,
		marginTop: 47,
		alignItems: "flex-start",
	},
	overviewText: {
		color: "rgb(4, 21, 51)",
		fontFamily: "Rubik-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	theStoryOfBlacksText: {
		backgroundColor: "transparent",
		color: "rgb(78, 68, 102)",
		fontFamily: "Rubik-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "stretch",
		marginTop: 11,
	},
	detailsTextView: {
		backgroundColor: "transparent",
		width: 295,
		height: 147,
		marginTop: 22,
		alignItems: "flex-start",
	},
	detailsText: {
		color: "rgb(4, 21, 51)",
		fontFamily: "Rubik-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	tellTheStoryOfTwText: {
		color: "rgb(78, 68, 102)",
		fontFamily: "Rubik-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "stretch",
		marginTop: 11,
	},
	resourcesTextView: {
		backgroundColor: "transparent",
		width: 294,
		height: 108,
		marginBottom: 51,
	},
	resourcesText: {
		color: "rgb(4, 21, 51)",
		fontFamily: "Rubik-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	amenitiesThreeView: {
		backgroundColor: "transparent",
		width: 91,
		height: 80,
	},
	path545ThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(150, 150, 150, 0.05)",
		shadowRadius: 5,
		shadowOpacity: 1,
		width: null,
		height: 80,
	},
	learnMoreText: {
		color: "rgb(4, 21, 51)",
		fontFamily: "Rubik-Regular",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 12,
		right: 10,
		top: 49,
	},
	amenitiesTwoView: {
		backgroundColor: "transparent",
		width: 91,
		height: 80,
	},
	path545TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(150, 150, 150, 0.05)",
		shadowRadius: 5,
		shadowOpacity: 1,
		width: null,
		height: 80,
	},
	tripPlannerText: {
		color: "rgb(4, 21, 51)",
		fontFamily: "Rubik-Regular",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 10,
		right: 8,
		top: 49,
	},
	amenitiesView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 91,
		top: 28,
		height: 80,
	},
	path545Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(150, 150, 150, 0.05)",
		shadowRadius: 5,
		shadowOpacity: 1,
		width: null,
		height: 80,
	},
	directionsText: {
		color: "rgb(4, 21, 51)",
		fontFamily: "Rubik-Regular",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 15,
		right: 13,
		top: 49,
	},
	buttonButtonText: {
		color: "white",
		fontFamily: "Rubik-Regular",
		fontSize: 21,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	buttonButton: {
		backgroundColor: "rgb(108, 240, 253)",
		borderRadius: 19.5,
		shadowColor: "rgba(247, 37, 133, 0.2)",
		shadowRadius: 20,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "flex-end",
		width: 237,
		height: 39,
		marginRight: 51,
	},
	buttonButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
})
