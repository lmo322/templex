//
//  App.js
//  Temple X v2
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import * as Font from "expo-font"
import Home from "./App/Home/Home"
import React from "react"
import SiteMenu from "./App/SiteMenu/SiteMenu"
import Splash from "./App/Splash/Splash"
import TourOverview from "./App/TourOverview/TourOverview"
import { AppLoading, DangerZone } from "expo"
import { createAppContainer, createStackNavigator } from "react-navigation"

const PushRouteOne = createStackNavigator({
	Splash: {
		screen: Splash,
	},
	Home: {
		screen: Home,
	},
	TourOverview: {
		screen: TourOverview,
	},
	SiteMenu: {
		screen: SiteMenu,
	},
}, {
	initialRouteName: "Splash",
})

const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)



export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			fontsReady: false,
		}
	}

	componentDidMount() {
	
		this.initProjectFonts()
	}

	async initProjectFonts() {
	
		await Font.loadAsync({
			"Rubik-Bold": require("./assets/fonts/40450.otf"),
			"Rubik-Regular": require("./assets/fonts/40446.otf"),
		})
		this.setState({
			fontsReady: true,
		})
	}

	render() {
	
		if (!this.state.fontsReady) { return (<AppLoading />); }
		return <AppContainer/>
	}
}
