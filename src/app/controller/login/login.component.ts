import { User } from '../../model/User';
import { MenuComponent } from '../menu/menu.component';
import { LoginService } from './../../service/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string;
  password: string;
  user: User;
  constructor(private loginService: LoginService, private menuComponent:MenuComponent) {

  }

  async login() {
    try {
      const data = await this.loginService.login(this.username, this.password).toPromise();
      this.user = data;
      if (this.user) {
        this.menuComponent.user=this.user;
        alert("Usuario autenticado");
      } else {
        alert("Usuario no autenticado");
      }
    } catch (error) {
      console.error('Error de inicio de sesión', error);
      alert("Error en el inicio de sesión: " + error.message);
    }
  }
}

/*
login(){
this.loginService.login(this.user, this.password).subscribe(data=>{
this.user=data});
if(this.user!=null){
  alert("Usuario autenticado");
} else {
  alert("usuario no autenticado");
}
}

*/
