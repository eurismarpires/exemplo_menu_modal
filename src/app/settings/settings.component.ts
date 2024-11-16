import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

declare var bootstrap: any; // Garante que o bootstrap global seja reconhecido

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements AfterViewInit{
  ngAfterViewInit(): void {
        // Inicializa o modal com a API do Bootstrap
        const modalElement = document.getElementById('exampleModal');
        if (modalElement) {
          this.modalInstance = new bootstrap.Modal(modalElement);
        }
  }


  formData = {
    name: '',
    phone: '',
  };
  // Lista para armazenar os dados da grid
  data: { name: string; phone: string }[] = [];

  modalInstance: any;

  openModal() {
    if (this.modalInstance) {
      this.modalInstance.show();
    }
  }


  save() {
    console.log('Dados salvos:', this.formData);
    alert(`Nome: ${this.formData.name}, Telefone: ${this.formData.phone}`);
    if (this.modalInstance) {
      this.modalInstance.hide();
    }
  }


  addData() {
    if (this.formData.name && this.formData.phone) {
      this.data.push({ ...this.formData });
      console.log('Dados atualizados na grid:', this.data); // Verificar a atualização
      this.formData = { name: '', phone: '' };
      if (this.modalInstance) {
        this.modalInstance.hide();
      }
    } else {
      alert('Preencha todos os campos!');
    }
  }
}
