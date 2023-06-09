import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch(
      `https://svend.theredwiking.com/api/product/all`
    );
    if (response.status != 204) {
      let parsed = await response.json();
      parsed.sort((a, b) => a.category_id - b.category_id);
      parsed[0].image = 'data:image/png;base64,' + parsed[0].image;
      return parsed;
    }
    return;
  }
}
