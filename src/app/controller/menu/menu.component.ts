import { Component } from '@angular/core';
import { User } from '../../model/User';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  enabled: boolean = false;
  user: User;
}
