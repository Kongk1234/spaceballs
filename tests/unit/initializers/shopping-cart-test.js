import Application from '@ember/application';

import config from 'spaceballs/config/environment';
import { initialize } from 'spaceballs/initializers/shopping-cart';
import { module, test } from 'qunit';
import Resolver from 'ember-resolver';
import { run } from '@ember/runloop';

module('Unit | Initializer | shopping-cart', function (hooks) {
  hooks.beforeEach(function () {
    this.TestApplication = class TestApplication extends Application {
      modulePrefix = config.modulePrefix;
      podModulePrefix = config.podModulePrefix;
      Resolver = Resolver;
    };

    this.TestApplication.initializer({
      name: 'initializer under test',
      initialize,
    });

    this.application = this.TestApplication.create({
      autoboot: false,
    });
  });

  hooks.afterEach(function () {
    run(this.application, 'destroy');
  });

  // TODO: Replace this with your real tests.
  test('it works', async function (assert) {
    await this.application.boot();

    assert.ok(true);
  });
});
