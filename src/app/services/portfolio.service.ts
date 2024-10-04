import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private languageSubject = new BehaviorSubject<string>('en');
  currentLanguage$ = this.languageSubject.asObservable();

  constructor() {
    const savedLanguage = localStorage.getItem('language') || 'en';
    this.languageSubject.next(savedLanguage);
  }

  changeLanguage(lang: string) {
    localStorage.setItem('language', lang);
    this.languageSubject.next(lang);
  }

  getLanguageFromLocalStorage() {
    const lang = localStorage.getItem('language') || 'en'; 
    return lang;
  }
}