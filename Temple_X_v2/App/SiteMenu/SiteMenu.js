//
//  SiteMenu
//  Temple X v2
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"


export default class SiteMenu extends React.Component {

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

	render() {
	
		return <View
				style={styles.viewView}>
				<ScrollView
					style={styles.viewScrollView}>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-end",
							width: 318,
							height: 167,
						}}>
						<View
							style={styles.titleView}>
							<Text
								style={styles.ashburtonText}>Ashburton</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.selectSiteToBeginText}>Select site to begin XR experience. </Text>
						</View>
						<Image
							source={require("./../../assets/images/temple-x--b3-1.png")}
							style={styles.logoImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 93,
							marginLeft: 14,
							marginRight: 11,
							marginTop: 69,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/group-69-2.png")}
							style={styles.backImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.gwynOakView}>
							<View
								style={styles.viewTwoView}>
								<Image
									source={require("./../../assets/images/destinations-card-3.png")}
									style={styles.parkImage}/>
								<View
									pointerEvents="box-none"
									style={{
										flex: 1,
										height: 100,
										marginLeft: 8,
										marginRight: 5,
										alignItems: "flex-end",
									}}>
									<Text
										style={styles.gwynOakParkText}>Gwyn Oak Park</Text>
									<Text
										style={styles.loremIpsumDolorSiText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
									<View
										style={styles.startView}>
										<Text
											style={styles.startText}>Start</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View
						style={styles.enockPrattView}>
						<View
							style={styles.viewThreeView}>
							<Image
								source={require("./../../assets/images/destinations-card.png")}
								style={styles.libraryImageImage}/>
							<Text
								style={styles.enochPrattFreeLibText}>Enoch Pratt Free Library</Text>
							<Text
								style={styles.loremIpsumDolorSiTwoText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
							<View
								style={styles.startTwoView}>
								<Text
									style={styles.startTwoText}>Start</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.vrView}>
						<View
							style={styles.viewFourView}>
							<Image
								source={require("./../../assets/images/destinations-card-2.png")}
								style={styles.vrTourImage}/>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									marginLeft: 7,
									marginRight: 9,
									marginBottom: 209,
								}}>
								<Text
									style={styles.africaAndIsrealVrText}>Africa and Isreal VR Tour</Text>
								<Text
									style={styles.loremIpsumDolorSiThreeText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.startThreeView}>
									<Text
										style={styles.startThreeText}>Start</Text>
								</View>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	viewScrollView: {
		backgroundColor: "white",
		width: 360,
		height: 600,
	},
	titleView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 263,
		top: 103,
		height: 64,
	},
	ashburtonText: {
		backgroundColor: "transparent",
		color: "rgb(108, 240, 253)",
		fontFamily: "Rubik-Regular",
		fontSize: 37,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-start",
		marginLeft: 35,
	},
	selectSiteToBeginText: {
		backgroundColor: "transparent",
		color: "rgb(4, 21, 51)",
		fontFamily: "Rubik-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	logoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: 0,
		width: 105,
		top: 0,
		height: 105,
	},
	backImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 27,
		height: 20,
	},
	gwynOakView: {
		backgroundColor: "transparent",
		width: 171,
		height: 79,
		marginTop: 14,
		justifyContent: "flex-end",
	},
	viewTwoView: {
		backgroundColor: "transparent",
		height: 215,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	parkImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 143,
		height: 173,
	},
	gwynOakParkText: {
		color: "rgb(4, 21, 51)",
		fontFamily: "Rubik-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 100,
		height: 15,
	},
	loremIpsumDolorSiText: {
		backgroundColor: "transparent",
		color: "rgb(78, 68, 102)",
		fontFamily: "Rubik-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		alignSelf: "stretch",
		height: 43,
		marginTop: 9,
	},
	startView: {
		backgroundColor: "rgb(108, 240, 253)",
		borderRadius: 7.5,
		shadowColor: "rgba(247, 37, 133, 0.2)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: 98,
		height: 14,
		marginRight: 37,
		marginTop: 19,
		justifyContent: "center",
		alignItems: "center",
	},
	startText: {
		backgroundColor: "transparent",
		opacity: 0.8,
		color: "white",
		fontFamily: "Rubik-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	enockPrattView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 171,
		height: 79,
		marginLeft: 11,
		marginTop: 134,
		justifyContent: "flex-end",
	},
	viewThreeView: {
		backgroundColor: "transparent",
		height: 215,
	},
	libraryImageImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "flex-end",
		width: 144,
		height: 159,
	},
	enochPrattFreeLibText: {
		backgroundColor: "transparent",
		color: "rgb(4, 21, 51)",
		fontFamily: "Rubik-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		height: 15,
		marginLeft: 4,
		marginRight: 159,
	},
	loremIpsumDolorSiTwoText: {
		backgroundColor: "transparent",
		color: "rgb(78, 68, 102)",
		fontFamily: "Rubik-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		height: 40,
		marginRight: 151,
		marginTop: 5,
	},
	startTwoView: {
		backgroundColor: "rgb(108, 240, 253)",
		borderRadius: 7.5,
		shadowColor: "rgba(247, 37, 133, 0.2)",
		shadowRadius: 20,
		shadowOpacity: 1,
		alignSelf: "flex-start",
		width: 98,
		height: 13,
		marginLeft: 38,
		marginTop: 16,
		justifyContent: "center",
		alignItems: "center",
	},
	startTwoText: {
		backgroundColor: "transparent",
		opacity: 0.8,
		color: "white",
		fontFamily: "Rubik-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	vrView: {
		backgroundColor: "transparent",
		width: 171,
		height: 79,
		justifyContent: "flex-end",
	},
	viewFourView: {
		backgroundColor: "transparent",
		height: 215,
		flexDirection: "row",
	},
	vrTourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 144,
		height: 169,
		marginBottom: 172,
	},
	africaAndIsrealVrText: {
		backgroundColor: "transparent",
		color: "rgb(4, 21, 51)",
		fontFamily: "Rubik-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		height: 16,
		marginLeft: 4,
		marginRight: 8,
	},
	loremIpsumDolorSiThreeText: {
		backgroundColor: "transparent",
		color: "rgb(78, 68, 102)",
		fontFamily: "Rubik-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		height: 43,
		marginTop: 5,
	},
	startThreeView: {
		backgroundColor: "rgb(108, 240, 253)",
		borderRadius: 7.5,
		shadowColor: "rgba(247, 37, 133, 0.2)",
		shadowRadius: 20,
		shadowOpacity: 1,
		alignSelf: "flex-end",
		width: 99,
		height: 14,
		marginRight: 37,
		justifyContent: "center",
		alignItems: "center",
	},
	startThreeText: {
		color: "white",
		fontFamily: "Rubik-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		opacity: 0.8,
	},
})
