import { module } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import test from 'ember-sinon-qunit/test-support/test';

module('Integration | Component | follow-user-button', function (hooks) {
  setupRenderingTest(hooks);

  test('`onClick` action is triggered from clicking the button', async function (assert) {
    assert.expect(1);

    const followAction = this.stub();

    this.set('followAction', followAction);

    // Template block usage:
    await render(hbs`
      {{follow-user-button followAction=followAction}}
    `);

    await click('[data-test-follow-author-button]');

    assert.ok(followAction.calledOnce, 'Clicking on button should trigger `onClick` action');
  });

});
