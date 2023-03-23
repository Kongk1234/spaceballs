import Controller from '@ember/controller';

export default class CategoryController extends Controller {
    queryParams = ['category'];
    category = null;
}
