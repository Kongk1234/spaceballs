import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch(`https://svend.theredwiking.com/product/all`);
    let parsed = await response.json();
    console.log(parsed);
    parsed.sort((a, b) => a.category_id - b.category_id);

    return parsed;
  }
}
