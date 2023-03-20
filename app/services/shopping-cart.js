import { A } from '@ember/array';
import Service from '@ember/service';

export default class ShoppingCartService extends Service {
  items = A([]);

  add(item) {
    if (this.items.length > 0) {
      this.items.forEach((element) => {
        console.log(element);
        if (element.size == item.size && element.item.name == item.item.name) {
          element.amount += item.amount;
        } else {
          this.items.pushObject(item);
        }
      });
    } else {
      this.items.pushObject(item);
    }
  }

  remove(item) {
    this.items.removeObject(item);
  }

  empty() {
    this.items.clear();
  }
}
