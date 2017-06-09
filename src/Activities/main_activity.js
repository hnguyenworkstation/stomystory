/**
 * Created by hungnguyen on 6/9/17.
 */
'use strict';

const React = require('react-native');
const {
  View,
  StyleSheet,
  ScrollView,
  ViewPagerAndroid,
  Platform,
} = React;

type Props = {
  count: number;
  selectedIndex: number;
  onSelectedIndexChange?: (index: number) => void;
  bounces?: boolean;
  children?: any;
  style?: any;
};

type State = {
  width: number;
  height: number;
  selectedIndex: number;
  initialSelectedIndex: number;
  scrollingTo: ?number;
};


class MainActivity extends React.Component {
    render() {
        return (
            <ViewPagerAndroid
                style={styles.viewPager}
                initialPage={0}>


            </ViewPagerAndroid>
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