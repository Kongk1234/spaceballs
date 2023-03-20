import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class NavigationComponent extends Component {

  @action async edit(item) {
    document.getElementById(item.id + "-amount").removeAttribute("readonly")
    document.getElementById(item.id + "-name").removeAttribute("readonly")
    let button = document.getElementById("editButton")
    button.innerHTML = "Gem"
    button.addEventListener("click", async () => {
        item.amount = document.getElementById(item.id+"-amount").value
        item.name = document.getElementById(item.id+"-name").value
    //   const response = await fetch(
    //     `https://svend.theredwiking.com/products/`+item.id, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${token}`,
    //       },
    //       body: JSON.stringify(item),
    //     }
    //   );
    //   if (response.ok) {
    //     console.log('yes');
    //   } else {
    //     console.log('fuck');
    //   }
    location.reload()
    })
  }
  @action async delete(item) {

    //   const response = await fetch(
    //     `https://svend.theredwiking.com/products/`+item.id, {
    //       method: 'DELETE',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${token}`,
    //       },
    //       body: JSON.stringify(item),
    //     }
    //   );
    //   if (response.ok) {
    //     console.log('yes');
    //   } else {
    //     console.log('fuck');
    //   }
    location.reload()
  }
}
