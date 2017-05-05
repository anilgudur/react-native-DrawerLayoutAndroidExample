/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  TouchableHighlight
} from 'react-native';

export default class DrawerLayoutAndroidExample extends Component {
  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.welcome}>
  //         Welcome to React Native!
  //       </Text>
  //       <Text style={styles.instructions}>
  //         To get started, edit index.android.js
  //       </Text>
  //       <Text style={styles.instructions}>
  //         Double tap R on your keyboard to reload,{'\n'}
  //         Shake or press menu button for dev menu
  //       </Text>
  //     </View>
  //   );
  // }

constructor() {
  super();
  this.openDrawer = this.openDrawer.bind(this);
}

openDrawer() {
  this.drawer.openDrawer();
}

  render() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left', color:'#333333'}}>I'm in the Drawer!</Text>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={300} 
        ref={(_drawer) => this.drawer = _drawer}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView} >
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableHighlight onPress={() => this.openDrawer()} underlayColor="transparent">
            <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
          </TouchableHighlight>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DrawerLayoutAndroidExample', () => DrawerLayoutAndroidExample);
