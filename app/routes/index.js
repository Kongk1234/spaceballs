import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model() {
        let response = await fetch(
          `https://svend.theredwiking.com/product/all`
        );
        let parsed = await response.json();
        console.log(parsed);
    
        return parsed;
      }
}
