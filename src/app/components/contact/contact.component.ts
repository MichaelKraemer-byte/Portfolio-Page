import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(public translate: TranslateService) {
  }

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    checkboxChecked: false
  }

  submitted: boolean = false;

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    } else if (!ngForm.form.valid) {
      this.submitted = true;
    }
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
        inputElement.classList.add('error-placeholder');
      } else {
        inputElement.classList.remove('error-placeholder'); 
      }
    }, 100);
  }

  // Für die Textarea
  restorePlaceholderForMessage(textareaElement: HTMLTextAreaElement, placeholder: string) {
    setTimeout(() => {
      if (!textareaElement.value) {
        textareaElement.placeholder = placeholder;
        textareaElement.classList.add('error-placeholder'); 
      } else {
        textareaElement.classList.remove('error-placeholder'); 
      }
    }, 100);
  }

}
