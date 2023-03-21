import Route from '@ember/routing/route';
import Router from '../router';
import { inject as service } from '@ember/service';


export default class AdminRoute extends Route {
  @service router;

  queryParams = {
    page: {
      refreshModel: true,
    },
  };

  get showAdmin() {
    let cookies = document.cookie.split('; ');
    let result = cookies.filter((word) => word.includes('auth='));
    if (result.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  async model(params) {
    if (params.page == 1 && this.showAdmin) {

      let cookies = document.cookie.split('; ');
      let result = cookies.filter((word) => word.includes('auth='));
      let token = result[0].split('auth=')[1];

      let response = await fetch(
        `https://svend.theredWiking.com/order/all`,{
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let parsed = await response.json();
      console.log(parsed);
      return parsed;
    } else if (params.page == 2 && this.showAdmin ) {
      let response = await fetch(
        `https://svend.theredWiking.com/product/all`
      );
      let parsed = await response.json();
      console.log(parsed);

      return parsed;
    } else if(params.page != 4 && this.showAdmin){
      let response = await fetch(`https://svend.theredWiking.com/product/1`);
      let parsed = await response.json();
      console.log(parsed);

      return parsed;
    }
    else{
      this.router.transitionTo('login');
    }
  }
}
