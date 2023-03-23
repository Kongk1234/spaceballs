import Controller from '@ember/controller';

export default class AdminController extends Controller {
  queryParams = ['page'];
  page = null;
}
