import {AppRegistry} from 'react-360';
import TopPosts from './TopPosts';
import CurrentPost from './CurrentPost';
import ModelView from './ModelView';
import * as Store from './Store';
Store.initialize('AIzaSyBs54921ORometcm51RrQYYKt07jgf702U');

AppRegistry.registerComponent('TopPosts', () => TopPosts);
AppRegistry.registerComponent('CurrentPost', () => CurrentPost);
AppRegistry.registerComponent('ModelView', () => ModelView);