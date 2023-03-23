import Route from '@ember/routing/route';

export default class CategoryRoute extends Route {
    async model(params) {
        console.log(params);
        let response = await fetch(
          `https://svend.theredwiking.com/api/product/category/${params.category}`
        );
        let parsed = await response.json();
        console.log(parsed);
        parsed[0].image = 'data:image/png;base64,' + parsed[0].image;
        return parsed;
      }
}
