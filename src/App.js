/**
 * Created by hungnguyen on 6/9/17.
 */

import React from 'react';
import {Actions, Scene, Router} from 'react-native-router-flux';


import MainActivity from './activities/main_activity';


const scenes = Actions.create(
  <Scene key='root'>
    <Screen key='home' component={MainActivity} title='MainActivity'/>
  </Scene>
);

class App extends React.Component {
    static render() {
        return (
            <Router scenes={scenes}/>
        );
    }
}

export default App;