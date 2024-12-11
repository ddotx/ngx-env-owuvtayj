import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
    import.meta.env.NODE_ENV: {{ env }}
    <br />
    import.meta.env.NG_APP_NAME: {{ name }}
  </div>
  `,
  standalone: true,
})
export class AppComponent {
  env = import.meta.env.NODE_ENV;
  name = import.meta.env.NG_APP_NAME;
}
