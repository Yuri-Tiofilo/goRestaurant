import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';

import TabBarRoutes from './tabBar.routes';
import Home from '../pages/Home';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#C72828' },
    }}
    initialRouteName="Home"
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="Home" component={Home} />

    <App.Screen
      name="Menu"
      component={TabBarRoutes}
      options={{
        headerShown: false,
        gestureEnabled: false,
      }}
    />
  </App.Navigator>
);
export default AppRoutes;
