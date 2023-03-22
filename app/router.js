import EmberRouter from '@ember/routing/router';
import config from 'spaceballs/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('Index', { path: '/index' });
  this.route('productPage');
  this.route('cart');
  this.route('login');
  this.route('admin');
  this.route('navigation');
  this.route('category');
});
