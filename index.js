/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import ServicesDashboard from './src/screens/ServicesDashboard'
import HomeDashboard from './src/screens/HomeDashboard'
import BillSummary from './src/screens/BillSummary'


import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => BillSummary);
