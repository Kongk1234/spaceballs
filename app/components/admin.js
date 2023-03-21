import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

let productImage = ''

export default class NavigationComponent extends Component {

  @tracked amount = '';
  @tracked description = '';
  @tracked name = '';
  @tracked price = '';
  @tracked category = '';


  get checkUrl() {
    let url = document.URL.split('=');
    if (url[1] == 3) {
      return true;
    } else {
      return false;
    }
  }

  get checkUrl2() {
    let url = document.URL.split('=');
    if (url[1] == 2) {
      return true;
    } else {
      return false;
    }
  }
  
  get checkUrl1() {
    let url = document.URL.split('=');
    if (url[1] == 1) {
      return true;
    } else {
      return false;
    }
  }


  @action baseEncode(element) {
    let file = element.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
      productImage = reader.result;
    };
    reader.readAsDataURL(file);
  }

  @action async edit(item) {
    let cookies = document.cookie.split('; ');
    let result = cookies.filter((word) => word.includes('auth='));
    let token = result[0].split('auth=')[1];

    document.getElementById(item.id + '-amount').removeAttribute('readonly');
    document.getElementById(item.id + '-name').removeAttribute('readonly');
    document.getElementById(item.id + '-description').removeAttribute('readonly');
    document.getElementById(item.id + '-price').removeAttribute('readonly');
    document.getElementById(item.id + '-category_id').removeAttribute('readonly');

    let button = document.getElementById('editButton');
    button.innerHTML = 'Gem';
    button.addEventListener('click', async () => {
      item.amount = parseInt(document.getElementById(item.id + '-amount').value)
      item.name = document.getElementById(item.id + '-name').value;
      item.description = document.getElementById(item.id + '-description').value;
      item.price = parseFloat(document.getElementById(item.id + '-price').value);
      item.category_id = parseInt(document.getElementById(item.id + '-category_id').value), 
      item.category = item.category_id
      console.log(item);
        const response = await fetch(
          `https://svend.theredwiking.com/product/`+item.id, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(item),
          }
        );
        if (response.ok) {
          console.log('yes');
        } else {
          console.log('fuck');
        }
      location.reload();
    });
  }

  @action async delete(item) {
    let cookies = document.cookie.split('; ');
    let result = cookies.filter((word) => word.includes('auth='));
    let token = result[0].split('auth=')[1];

      const response = await fetch(
        `https://svend.theredwiking.com/products/`+item.id, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(item),
        }
      );
      if (response.ok) {
        console.log('yes');
      } else {
        console.log('fuck');
      }
    location.reload();
  }

  @action async create() {
    let cookies = document.cookie.split('; ');
    let result = cookies.filter((word) => word.includes('auth='));
    let token = result[0].split('auth=')[1];
    let item = {
      description:this.description,
      price: parseFloat(this.price),
      name: this.name,
      amount: parseInt(this.amount),
      category: parseInt(this.category),
      image: productImage
    }
    console.log(item);
      const response = await fetch(
        `https://svend.theredwiking.com/product/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(item),
        }
      );
      if (response.ok) {
        console.log('yes');
      } else {
        console.log('fuck');
      }
    location.reload();
  }
}
