/**
 * Created by hungnguyen on 6/9/17.
 */
'use strict';

import Icon from 'react-native-vector-icons/MaterialIcons'
import {View, Text, StyleSheet} from 'react-native'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import React, {Component} from 'react'

export default class MainActivity extends React.Component {
    render() {
        return (
            <View>
                <BottomNavigation
                    labelColor="white"
                    rippleColor="white"
                    style={styles.bottom_tab}>

                    <Tab
                        BackgroundColor="#3E2723"
                        label="NewsStand"
                        icon={<Icon size={24} color="white" name="newspaper"/>}
                    />

                    <Tab
                        BackgroundColor="#3E2723"
                        label="NewsStand"
                        icon={<Icon size={24} color="   white" name="newspaper"/>}
                    />

                    <Tab
                        BackgroundColor="#3E2723"
                        label="NewsStand"
                        icon={<Icon size={24} color="white" name="newspaper"/>}
                    />

                    <Tab
                        BackgroundColor="#3E2723"
                        label="NewsStand"
                        icon={<Icon size={24} color="white" name="newspaper"/>}
                    />
                </BottomNavigation>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    bottom_tab: {
        height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0,
    }
});