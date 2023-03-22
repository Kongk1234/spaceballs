import Route from '@ember/routing/route';

export default class NavigationRoute extends Route {
  async model() {
    let response = await fetch(
      `https://svend.theredwiking.com/api/product/all`
    );
    if (response.status != 204) {
      let parsed = await response.json();
      console.log(parsed);
      parsed.sort((a, b) => a.category_id - b.category_id);
      console.log(parsed);
      parsed[0].image = 'data:image/png;base64,' + parsed[0].image;
      return parsed;
    }
    return;
  }
}
