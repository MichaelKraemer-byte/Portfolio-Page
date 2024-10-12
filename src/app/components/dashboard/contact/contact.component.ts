import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule, 
    CommonModule, 
    TranslateModule,     
    RouterLink
  ],
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
  confirmation = false;
  mailTest = false;

  post = {
    endPoint: 'https://kraemer-michael.net/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.confirmation = false;
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            this.confirmation = true,
            console.info('send post complete')}
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    } else if (!ngForm.form.valid) {
      this.submitted = true;
    }
  }

  focusInput(inputElement: HTMLInputElement) {
    inputElement.focus();
    inputElement.placeholder = ''; 
    inputElement.classList.remove('error-placeholder');
  }

  focusTextarea(textAreaElement: HTMLTextAreaElement) {
    textAreaElement.focus();
    textAreaElement.placeholder = ''; 
    textAreaElement.classList.remove('error-placeholder');
  }

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
