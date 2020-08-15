//
//  Home
//  Temple X v2
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class Home extends React.Component {

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
		
		navigate("TourOverview")
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					style={styles.viewTwoView}>
					<Image
						source={require("./../../assets/images/group-69.png")}
						style={styles.group69Image}/>
					<Image
						source={require("./../../assets/images/temple-x-white.png")}
						style={styles.templeXWhiteImage}/>
					<View
						style={styles.toursMenuView}>
						<Text
							style={styles.toursText}>Tours</Text>
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
							<View
								style={styles.optionsView}>
								<View
									style={styles.activitesView}>
									<View
										style={styles.rectangle30View}/>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											right: 0,
											top: 0,
											bottom: 0,
											justifyContent: "center",
										}}>
										<Image
											source={require("./../../assets/images/mask-group-1.png")}
											style={styles.maskGroup1Image}/>
									</View>
									<Text
										style={styles.northAmericaText}>North America</Text>
									<Image
										source={require("./../../assets/images/maryland.png")}
										style={styles.marylandImage}/>
								</View>
							</View>
						</View>
					</View>
					<View
						style={styles.locationsView}>
						<View
							style={styles.rectangle26View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 29,
								right: 1,
								top: 33,
								height: 370,
								alignItems: "flex-start",
							}}>
							<View
								style={styles.line6View}/>
							<View
								style={styles.group160View}>
								<Text
									style={styles.northAmericaTwoText}>North America</Text>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										top: 0,
										bottom: 0,
										justifyContent: "center",
									}}>
									<View
										style={styles.destinationsCardView}>
										<Image
											source={require("./../../assets/images/screen-shot-2020-08-09-at-94446-am.png")}
											style={styles.screenShot202008Image}/>
										<View
											style={styles.textView}>
											<View
												style={styles.viewThreeView}>
												<Text
													style={styles.ashburtonText}>Ashburton</Text>
												<View
													style={{
														flex: 1,
													}}/>
												<Text
													style={styles.historicalWalkingTText}>Historical Walking Tour</Text>
											</View>
										</View>
									</View>
								</View>
							</View>
						</View>
						<TouchableOpacity
							onPress={this.onGroup66Pressed}
							style={styles.group66Button}>
							<Text
								style={styles.group66ButtonText}>View</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(108, 240, 253)",
		flex: 1,
	},
	viewTwoView: {
		backgroundColor: "rgb(108, 240, 253)",
		flex: 1,
		marginLeft: 5,
		marginTop: 50,
		alignItems: "flex-end",
	},
	group69Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "flex-start",
		width: 28,
		height: 17,
		marginLeft: 17,
	},
	templeXWhiteImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "center",
		width: 295,
		height: 100,
		marginTop: 39,
	},
	toursMenuView: {
		backgroundColor: "transparent",
		width: 485,
		height: 161,
		marginTop: 63,
	},
	toursText: {
		backgroundColor: "transparent",
		color: "rgb(4, 21, 51)",
		fontFamily: "Rubik-Bold",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		position: "absolute",
		left: 0,
		top: -24,
	},
	optionsView: {
		backgroundColor: "transparent",
		height: 160,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	activitesView: {
		backgroundColor: "transparent",
		width: 205,
		height: 160,
	},
	rectangle30View: {
		backgroundColor: "white",
		borderRadius: 20,
		position: "absolute",
		left: 0,
		width: 131,
		top: 25,
		height: 106,
	},
	maskGroup1Image: {
		backgroundColor: "transparent",
		opacity: 0.05,
		resizeMode: "center",
		width: 183,
		height: 161,
	},
	northAmericaText: {
		backgroundColor: "transparent",
		color: "rgb(143, 135, 165)",
		fontFamily: "Rubik-Regular",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		left: 15,
		width: 101,
		bottom: 50,
	},
	marylandImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 25,
		width: 73,
		top: 43,
		height: 55,
	},
	locationsView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 415,
		marginTop: 25,
	},
	rectangle26View: {
		backgroundColor: "white",
		borderRadius: 50,
		shadowColor: "rgba(78, 68, 102, 00.10)",
		shadowRadius: 20,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		right: 63,
		bottom: -89,
		height: 500,
	},
	line6View: {
		backgroundColor: "rgb(208, 203, 219)",
		width: 40,
		height: 3,
		marginLeft: 139,
	},
	group160View: {
		backgroundColor: "transparent",
		opacity: 1,
		alignSelf: "stretch",
		height: 317,
	},
	northAmericaTwoText: {
		color: "rgb(4, 21, 51)",
		fontFamily: "Rubik-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		top: -9,
	},
	destinationsCardView: {
		backgroundColor: "transparent",
		width: 199,
		height: 279,
	},
	screenShot202008Image: {
		backgroundColor: "transparent",
		shadowColor: "rgba(130, 125, 143, 00.10)",
		shadowRadius: 30,
		shadowOpacity: 1,
		resizeMode: "cover",
		position: "absolute",
		left: 0,
		width: 200,
		top: 0,
		height: 280,
	},
	textView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 137,
		top: 167,
		height: 37,
		justifyContent: "center",
	},
	viewThreeView: {
		backgroundColor: "transparent",
		height: 37,
		marginLeft: 172,
		alignItems: "center",
	},
	ashburtonText: {
		backgroundColor: "transparent",
		color: "rgb(4, 21, 51)",
		fontFamily: "Rubik-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	historicalWalkingTText: {
		color: "rgb(4, 21, 51)",
		fontFamily: "Rubik-Regular",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		opacity: 1,
		alignSelf: "stretch",
		marginBottom: 51,
	},
	group66Button: {
		backgroundColor: "rgb(108, 240, 253)",
		borderRadius: 7.5,
		shadowColor: "rgba(247, 37, 133, 00.20)",
		shadowRadius: 20,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: 0,
		width: 98,
		bottom: 129,
		height: 17,
	},
	group66ButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	group66ButtonText: {
		color: "white",
		fontFamily: "Rubik-Regular",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
})
