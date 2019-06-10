import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: null,
  user: service(),
  show: computed.reads('user.isAuthenticated'),
});
