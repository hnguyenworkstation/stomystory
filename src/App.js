/**
 * Created by hungnguyen on 6/9/17.
 */

import React from 'react';
import MainActivity from './activities/main_activity'
import {Scene, Router, Actions} from 'react-native-router-flux';


const scenes = Actions.create(
  <Scene key='root'>
    <Screen key='home' component={MainActivity} title='StomyStory'/>
  </Scene>
);

class App extends React.Component {
    render() {
        return (
            <Router scenes={scenes}/>
        );
    }
}

export default App;