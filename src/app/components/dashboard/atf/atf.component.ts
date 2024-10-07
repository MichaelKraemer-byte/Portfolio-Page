import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
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

  constructor(private portfolioService: PortfolioService, private cdRef: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    // Abonniere die Sprachänderung, um aktuelle Sprache sofort anzuwenden
    this.subscription = this.portfolioService.currentLanguage$.subscribe(lang => {
      this.currentLang = lang;
      this.cdRef.detectChanges();
    });
  }

  ngOnDestroy() {
    // Beim Zerstören der Komponente das Abo beenden
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}