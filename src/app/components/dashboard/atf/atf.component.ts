import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PortfolioService } from '../../../services/portfolio.service'; 

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss',
})

export class AtfComponent implements OnInit {
  currentLang!: string;

  constructor(private portfolioService: PortfolioService) {
    // setTimeout(()=>{
      this.currentLang = this.portfolioService.getLanguageFromLocalStorage();
    // }, 100)
  }

  ngOnInit() {
    this.portfolioService.currentLanguage$.subscribe(lang => {
      this.currentLang = lang;
    });
    this.currentLang = this.portfolioService.getLanguageFromLocalStorage();
  }
}