import { module, test } from 'qunit';
import { setupRenderingTest } from 'spaceballs/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | admin', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Admin />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Admin>
        template block text
      </Admin>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
