import { Component } from '@angular/core';
import {state, style, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger('foo', [state('bar', style({ background: 'green' }))])]
})
export class AppComponent {
  title = 'issue36860';
}
