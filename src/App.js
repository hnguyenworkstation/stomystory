/**
 * Created by hungnguyen on 6/9/17.
 */

import {React,} from 'react';
import MainActivity from './activities/main_activity'

import {Scene, Router} from 'react-native-router-flux';


const scenes = Actions.create(
  <Scene key="root">
    <Screen key="main_activity" component={MainActivity} title="Hoocons"/>
  </Scene>
);

class App extends React.Component {
    render() {
        return (
            <Router>
                return <Router scenes={scenes}/>
            </Router>
        )
    }
}