
import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	Button,
	Dimensions
} from 'react-native';
import { WebView } from 'react-native-webview';


const Editor = () => {
	return (
		<>
			<Text>Horses</Text>
			<Button
				onPress={() => {}}
				title="Set alarm"
				color="#841584"
			/>
			<Button
				onPress={() => {}}
				title="Do something else"
				color="#841584"
			/>
			<WebView
				containerStyle={{
					flex: 0,
					width: Dimensions.get('window').width,
					height: Dimensions.get('window').width
				}}
				source={{
					// url: 'http://localhost:5000/examples/plain'
					url: 'https://napchart.com/app'
					 }} />
		</>
	);
};

export default Editor;
