/**
 * Created by hungnguyen on 6/9/17.
 */
'use strict';

const React = require('react-native', 'react-native-material-bottom-navigation');
const {
  View,
  StyleSheet,
  ScrollView,
  ViewPagerAndroid,
  Platform, BottomNavigation, Tab
} = React;

import {Icon,} from 'react-native-vector-icons/MaterialIcons'

class MainActivity extends React.Component {
    render() {
        return (
            <View>
                <BottomNavigation>
                    <Tabbar
                        BackgroundColor="#3E2723"
                        label="Newsstand"
                        icon={<Icon size={24} color="white" name="newspaper"/>}
                    />
                </BottomNavigation>
            </View>
        );
    }
}

var style = Stylesheet.create({
    container: {
       flex: 1
    },
    scrollview: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    card: {
        backgroundColor: 'transparent',
    }
});