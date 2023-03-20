import Route from '@ember/routing/route';

export default class AdminRoute extends Route {
  queryParams = {
    page: {
      refreshModel: true,
    },
  };
  async model(params) {
    if(params.page == 1){
      let response = await fetch(
        `https://svend.theredWiking.com/product/${params.page}`
      );
      let parsed = await response.json();
      console.log(parsed);
  
      return parsed;
    }else if(params.page == 2){
      let response = await fetch(
        `https://svend.theredWiking.com/product/${params.page}`
      );
      let parsed = await response.json();
      console.log(parsed);
  
      return parsed;
    }
    else {
      let response = await fetch(
        `https://svend.theredWiking.com/product/1`
      );
      let parsed = await response.json();
      console.log(parsed);
  
      return parsed;
    }
  }
}
