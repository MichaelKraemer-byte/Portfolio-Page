import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {


  contactData = {
    name: '',
    email: '',
    message: '',
    checkboxChecked: false
  }

  submitted: boolean = false; // Neue Variable für den Submit-Versuch



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

  onSubmit(form: NgForm) {
    this.submitted = true; // Setze die Variable auf true, wenn das Formular abgeschickt wird
    
    console.log('Submitted:', this.submitted);
    console.log('Checkbox invalid:', form.controls['privacyPolicy'].invalid);

    if (form.valid) {
      // Verarbeite das Formular, wenn es gültig ist
      console.log('Form submitted:', this.contactData);
      // Hier kannst du auch die Formulardaten an einen Service oder eine API senden
    } else {
      // Optional: Hier kannst du auch eine Rückmeldung geben, wenn das Formular ungültig ist
      console.log('Form is invalid:', form);
    }
  }
}
