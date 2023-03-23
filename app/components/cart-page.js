import Component from '@glimmer/component';
import {
  tracked
} from '@glimmer/tracking';
import {
  action
} from '@ember/object';
import {
  service
} from '@ember/service';

export default class NavigationComponent extends Component {
  @service('shopping-cart') cart;

  @tracked firstName;
  @tracked lastName;
  @tracked phoneNumber;
  @tracked mail;
  @tracked address;

  async model() {
    return this.cart.items;
  }

  @action async onPayment() {
    let totalprice = 0;

    this.cart.items.forEach((element) => {
      totalprice += element.item.price * element.amount;
    });

    const data = {
      firstname: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      mail: this.mail,
      address: this.address,
      products: this.cart.items,
      totalPrice: parseFloat(totalprice),
    };

    const response = await fetch(
      `https://svend.theredwiking.com/api/order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    if (response.ok) {
      let parsed = await response.json()
      window.open(parsed.url, '_blank');
      console.log('yes');
    } else {
      console.log('fuck');
    }
  }
}
