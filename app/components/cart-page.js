import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

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
      totalprice += element.item.price * element.item.amount;
    });

    const data = {
      firstname: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      mail: this.mail,
      address: this.address,
      products: this.cart.items,
      totalprice: parseFloat(totalprice),
    };
    const response = await fetch(
        `https://svend.theredwiking.com/order`,
        {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
        }
    );
    if (response.ok) {
        console.log('yes');
    } else {
        console.log('fuck');
    }
  }
}
