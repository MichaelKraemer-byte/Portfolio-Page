import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {


  contactData = {
    name: '',
    email: '',
    message: ''
  }


  // Diese Methode fokussiert das entsprechende Input-Feld, wenn auf den Container geklickt wird.
  focusInput(inputElement: HTMLInputElement) {
    inputElement.focus();
    inputElement.placeholder = ''; 
    inputElement.classList.remove('error-placeholder');

  }

    // Diese Methode fokussiert das entsprechende Input-Feld, wenn auf den Container geklickt wird.
  focusTextarea(textAreaElement: HTMLTextAreaElement) {
    textAreaElement.focus();
    textAreaElement.placeholder = ''; 
    textAreaElement.classList.remove('error-placeholder');

  }

  // Methode zum Wiederherstellen des Platzhalters und Hinzufügen der Fehlerklasse, falls notwendig
  restorePlaceholder(inputElement: HTMLInputElement, placeholder: string) {
    setTimeout(() => {
      if (!inputElement.value) {
        inputElement.placeholder = placeholder;
        inputElement.classList.add('error-placeholder');  // Fehlerklasse hinzufügen
      } else {
        inputElement.classList.remove('error-placeholder');  // Fehlerklasse entfernen, wenn gefüllt
      }
    }, 100);
  }

  // Für die Textarea
  restorePlaceholderForMessage(textareaElement: HTMLTextAreaElement, placeholder: string) {
    setTimeout(() => {
      if (!textareaElement.value) {
        textareaElement.placeholder = placeholder;
        textareaElement.classList.add('error-placeholder');  // Fehlerklasse hinzufügen
      } else {
        textareaElement.classList.remove('error-placeholder');  // Fehlerklasse entfernen, wenn gefüllt
      }
    }, 100);
  }

  onSubmit(ngForm: NgForm){
    if (ngForm.valid && ngForm.submitted) {
      
    }
    console.log('et laeuft, .. diggi, ja .. na sicher :)', this.contactData)
  }
}
