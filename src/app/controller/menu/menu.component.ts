import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  enabled: boolean = false;
  user: User;
  constructor(private router:Router){}
  ngOnInit(): void {
    this.router.navigate(["/home"])
  }
}
