import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class CartRoute extends Route {
  @service('shopping-cart') cart;

  async model() {
    let totalprice = [];
    totalprice[0] = 0;
    this.cart.items.forEach((element) => {
      totalprice[0] += element.item.price * element.amount;
    });
    return { items: this.cart.items, total: totalprice };
  }
}
