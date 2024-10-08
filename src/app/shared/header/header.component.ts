import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PortfolioService } from '../../services/portfolio.service';  // Importiere den Service
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslateModule, 
    CommonModule,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentLanguage: string = 'en';

  @Output() openHeaderModalEvent =  new EventEmitter<void>();

  constructor(public translate: TranslateService, private portfolioService: PortfolioService) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
  }

  openModal(){
    this.openHeaderModalEvent.emit();
  }

  ngOnInit() {
    const savedLanguage = localStorage.getItem('language');
    const browserLang = this.translate.getBrowserLang() || 'en';
    this.currentLanguage = savedLanguage ? savedLanguage : (browserLang.match(/en|de/) ? browserLang : 'en');
    this.translate.use(this.currentLanguage);
    this.portfolioService.changeLanguage(this.currentLanguage);
  }

  switchLanguage() {
    const toggle = document.getElementById('language-toggle') as HTMLInputElement;
    const isChecked = toggle.checked; 
    this.currentLanguage = isChecked ? 'de' : 'en'; 
    localStorage.setItem('language', this.currentLanguage); 
    this.portfolioService.changeLanguage(this.currentLanguage); 
    this.translate.use(this.currentLanguage); 
  }
  

}