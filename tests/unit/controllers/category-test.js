import { module, test } from 'qunit';
import { setupTest } from 'spaceballs/tests/helpers';

module('Unit | Controller | category', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:category');
    assert.ok(controller);
  });
});
