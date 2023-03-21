import Route from '@ember/routing/route';

export default class ProductPageRoute extends Route {
  async model(params) {
    let response = await fetch(
      `https://svend.theredWiking.com/product/${params.id}`
    );
    let parsed = await response.json();
    console.log(parsed);
    parsed[0].image = "data:image/png;base64," + parsed[0].image
    return parsed;
  }
}
