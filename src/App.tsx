/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native';
import Editor from "./Editor"


declare const global: { HermesInternal: null | {} };

const App = () => {
	return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView  style={styles.container}>
				<Editor />
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
  container: {
		flex: 1,
		backgroundColor: "gray"
  },
});


export default App;
