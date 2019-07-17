import { Navigation } from 'react-native-navigation';
import ConfigureStore from './src/components/Store/config';
import { Provider } from 'react-redux';

import Login from './src/components/views/Login';
import Home from './src/components/views/Home';
import AddPost from './src/components/views/Admin/AddPost';
import NotAllow from './src/components/views/Admin/AddPost/notallow';
import SidedrawerComponenent from './src/components/views/Sidedrawer';
import UserPosts from './src/components/views/Admin/UserPosts';
import Article from './src/components/views/Article';

const store = ConfigureStore();

// Navigation.registerComponentWithRedux( 'sellitApp.Login', () => Login,
//   store,
//   Provider
// );

// Navigation.registerComponentWithRedux('sellitApp.Login', () => (props) => (
//   <Provider store={store}>
//     <Login {...props} />
//   </Provider>
// ), () => Login);
Navigation.registerComponentWithRedux(
  'sellitApp.Login',
  () => require('./src/components/views/Sidedrawer').default,
  Provider,
  store
);

// Navigation.registerComponentWithRedux('sellitApp.Login', () => (props) => (
//   Provider,
//     Login,
//     store
// ), () => Login);

// // Navigation.registerComponentWithRedux('blog.PostsList', () => require('./posts/screens/PostsList').default, Provider, store);

// Navigation.registerComponentWithRedux(
//   'sellitApp.Home',
//   () => Home,
//   store,
//   Provider
// )

Navigation.registerComponentWithRedux(
  'sellitApp.Home',
  () => require('./src/components/views/Home').default,
  Provider,
  store
);

Navigation.registerComponentWithRedux(
  'sellitApp.AddPost',
  () => require('./src/components/views/Admin/AddPost').default,
  Provider,
  store
);

Navigation.registerComponentWithRedux(
  'sellitApp.SidedrawerComponenent',
  () => require('./src/components/views/Sidedrawer').default,
  Provider,
  store
);

Navigation.registerComponentWithRedux(
  'sellitApp.UserPosts',
  () => require('./src/components/views/Admin/UserPosts').default,
  Provider,
  store
);

Navigation.registerComponentWithRedux(
  'sellitApp.Article',
  () => require('./src/components/views/Article').default,
  Provider,
  store
);

Navigation.registerComponentWithRedux(
  'sellitApp.NotAllow',
  () => require('./src/components/views/Admin/AddPost/notallow').default,
  Provider,
  store
);

export default () =>
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'sellitApp.Login',
                passProps: {
                  text: 'stack with one child'
                }
              }
            }
          ],
          options: {
            topBar: {
              title: {
                text: 'Welcome To Login'
              }
            }
          }
        }
      }
    });
  });
