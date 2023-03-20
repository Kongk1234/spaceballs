import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ProductPageController extends Controller {
  queryParams = ['id'];
  id = null;

  @service('shopping-cart') cart;
  @action
  addToCart() {
    //   const { name, price } = this.args;
    this.cart.addItem({
      name: 'hej',
      price: 'price.current',
    });
  }
}