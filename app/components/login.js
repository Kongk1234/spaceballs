import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class FormComponent extends Component {
  url = 'https://svend.theredwiking.com/auth/login';
  @tracked Password = '';
  @tracked Email = '';
  @service router;

  @action async onSubmit(e) {
    e.preventDefault();
    const data = {
      password: this.password,
      username: this.username,
    };
    console.log(data);
    const response = await fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      let json = await response.json();
      console.log(json);
      document.cookie = `auth=${json.token}; path=/; expires=0;`;
      this.router.transitionTo('admin');
    } else {
      location.reload()
      //create error message and route user back to login
    }
  }
}
