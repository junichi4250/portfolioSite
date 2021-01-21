import React, { Component } from 'react';

// コンテナ読み込み
//import ResponsiveDrawer from './containers/ResponsiveDrawer';
//import RouteRelatedBottomNavigation from './containers/RouteRelatedBottomNavigation';
//import Notification from './containers/Notification';
import Home from './containers/Home';
import Info from './containers/Info';
import Settings from './containers/Settings';

// コンポーネント読み込み
//import WrapMainContent from './components/WrapMainContent'

// 共通スタイル読み込み
import './App.css';

// Route関連
import { Route, Switch } from 'react-router-dom';
import './App.css';

// 不明なRouteは全てNotFound
const NotFound = () => {
  return (
    <h2>ページが見つかりません</h2>
  );
}

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/settings" component={Settings} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
