import Route from '@ember/routing/route';

export default class AdminRoute extends Route {
  async model(params) {
    if(params.page == 1){
      let response = await fetch(
        `https://svend.theredWiking.com/product/${params.page}`
      );
      let parsed = await response.json();
      console.log(parsed);
  
      return parsed;
    }
    else {
      let response = await fetch(
        `https://svend.theredWiking.com/product/${params.page}`
      );
      let parsed = await response.json();
      console.log(parsed);
  
      return parsed;
    }
  }
}
