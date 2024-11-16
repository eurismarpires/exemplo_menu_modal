import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Aqui você deve verificar as credenciais do usuário
    if (this.username === 'admin' && this.password === '123456') {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Usuário ou senha inválidos';
    }
  }
}
