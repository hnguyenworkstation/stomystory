/**
 * Created by hungnguyen on 6/9/17.
 */

import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import Actions from 'react-native-router-flux';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

export default class MainActivity extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
                <IndicatorViewPager
                    style={{height:200}}
                    indicator={this._renderDotIndicator()}
                >
                    <View style={{backgroundColor:'cadetblue'}}>
                        <Text>page one</Text>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Text>page two</Text>
                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                        <Text>page three</Text>
                    </View>
                </IndicatorViewPager>

                <IndicatorViewPager
					style={{flex:1, paddingTop:20, backgroundColor:'white'}}
                    indicator={this._renderTitleIndicator()}
                >
                    <View style={{backgroundColor:'cadetblue'}}>
                        <Text>page one</Text>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Text>page two</Text>
                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                        <Text>page three</Text>
                    </View>
                </IndicatorViewPager>

                <IndicatorViewPager
					style={{flex:1, paddingTop:20, backgroundColor:'white'}}
                    indicator={this._renderTabIndicator()}
                >
                    <View style={{backgroundColor:'cadetblue'}}>
                        <Text>page one</Text>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Text>page two</Text>
                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                        <Text>page three</Text>
                    </View>
                </IndicatorViewPager>
            </View>
        );
    }

    static _renderTitleIndicator() {
        return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
    }

    static _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }

    static _renderTabIndicator() {
        let tabs = [
            {
                text: 'Home',
                iconSource: require('../images/ic_tab_circle.png'),
                selectedIconSource: require('../images/ic_tab_circle_slct.png')
            },{
                text: 'Message',
                iconSource: require('../images/ic_tab_square.png'),
                selectedIconSource: require('../images/ic_tab_square_slct.png')
            }, {
                text: 'Profile',
                iconSource: require('../images/ic_tab_triangle.png'),
                selectedIconSource: require('../images/ic_tab_triangle_slct.png')
            }
        ];
        return <PagerTabIndicator tabs={tabs} />;
    }
}

var styles = StyleSheet.create({
    bottom_tab: {
        height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0,
    }
});