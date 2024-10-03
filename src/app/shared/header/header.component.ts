import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PortfolioService } from '../../services/portfolio.service';  // Importiere den Service


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentLanguage: string = 'en';

  constructor(public translate: TranslateService, private portfolioService: PortfolioService) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    // Nur einmal beim Laden der Komponente ausführen
    const savedLanguage = localStorage.getItem('language');
    const browserLang = this.translate.getBrowserLang() || 'en';

    // Setze die aktuelle Sprache
    this.currentLanguage = savedLanguage ? savedLanguage : (browserLang.match(/en|de/) ? browserLang : 'en');
    this.translate.use(this.currentLanguage);
    this.portfolioService.changeLanguage(this.currentLanguage); // Setze die Sprache im Service

  }

  switchLanguage() {
    const toggle = document.getElementById('language-toggle') as HTMLInputElement;
    const isChecked = toggle.checked; // Zugriff auf den aktuellen checked-Status
    this.currentLanguage = isChecked ? 'de' : 'en';  // Logik basierend auf checked-Status
    localStorage.setItem('language', this.currentLanguage); // Sprache im localStorage speichern
    this.portfolioService.changeLanguage(this.currentLanguage); // Sprache im Service ändern
    this.translate.use(this.currentLanguage); // Sprache für ngx-translate setzen
  }
  

}