import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PortfolioService } from '../../../services/portfolio.service'; 

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss',
})

export class AtfComponent implements OnInit, AfterViewInit {
  currentLang!: string;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    // Abonniere die Sprachänderung, um aktuelle Sprache sofort anzuwenden
    this.portfolioService.currentLanguage$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  ngAfterViewInit() {
    window.onload = () => {
      requestAnimationFrame(() => {
        this.currentLang = this.portfolioService.getLanguageFromLocalStorage();
      });
    };
  }
}