import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PortfolioService } from '../../../services/portfolio.service'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss',
})

export class AtfComponent implements AfterViewInit, OnDestroy  {
  currentLang!: string;
  private subscription!: Subscription;

  constructor(private portfolioService: PortfolioService) {
  }

  ngAfterViewInit() {
    // Abonniere die Sprachänderung, um aktuelle Sprache sofort anzuwenden
    this.subscription = this.portfolioService.currentLanguage$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  ngOnDestroy() {
    // Beim Zerstören der Komponente das Abo beenden
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}