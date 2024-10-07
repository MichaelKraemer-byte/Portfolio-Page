import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PortfolioService } from '../../../services/portfolio.service'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss',
})

export class AtfComponent implements AfterViewInit, OnDestroy {
  currentLang!: string;
  private subscription!: Subscription;
  private translateSubscription!: Subscription;

  constructor(
    private portfolioService: PortfolioService,
    private translateService: TranslateService
  ) {
    this.currentLang = this.portfolioService.getLanguageFromLocalStorage();
  }

  ngAfterViewInit() {
    this.subscription = this.portfolioService.currentLanguage$.subscribe(lang => {
      this.currentLang = lang;
      this.startMarqueeAfterTranslationsLoaded();
    });
  }

  startMarqueeAfterTranslationsLoaded() {
    this.translateSubscription = this.translateService.onLangChange.subscribe(() => {
      this.changeMarqueeAnimation()
    });
  }

  changeMarqueeAnimation() {
    const marqueeElements = document.querySelectorAll('.marqueeText');
    
    marqueeElements.forEach((element) => {
      // Entferne die alte Animation-Klasse, basierend auf der aktuellen Sprache
      if (this.currentLang === 'de') {
        element.classList.remove('animation-en');
        element.classList.add('animation-de');
      } else {
        element.classList.remove('animation-de');
        element.classList.add('animation-en');
      }
    });
  }
  

  ngOnDestroy() {
    // Alle Abos sauber aufräumen
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.translateSubscription) {
      this.translateSubscription.unsubscribe();
    }
  }
}