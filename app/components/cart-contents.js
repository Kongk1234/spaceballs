import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class CartContentsComponent extends Component {
  @service shoppingCart;
}
