import { module, test } from 'qunit';
import { setupTest } from 'spaceballs/tests/helpers';

module('Unit | Route | navigation', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:navigation');
    assert.ok(route);
  });
});
