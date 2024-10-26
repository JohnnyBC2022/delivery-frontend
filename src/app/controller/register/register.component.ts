import { Router } from '@angular/router';
import { User } from '../../model/User';
import { RegisterService } from './../../service/register.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: User = new User();
  constructor(private registerService: RegisterService, private router:Router){ }

  register(){
    this.registerService.register(this.user).subscribe({
      next:data=>this.router.navigate(["api/login"]),
      error:err=>alert("usuario existente")
    });
  }

}
