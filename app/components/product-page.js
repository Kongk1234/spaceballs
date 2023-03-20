import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ProductDetailsComponent extends Component {
  @service('shopping-cart') cart;

  @tracked amount = 0;

  @action
  add(item) {
    const data = {
      amount: parseInt(this.amount),
      size: document.getElementById('size-select').value,
      item: item,
    };
    this.cart.add(data);
  }
}
