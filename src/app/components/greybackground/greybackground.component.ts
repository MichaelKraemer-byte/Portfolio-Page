import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-greybackground',
  standalone: true,
  imports: [],
  templateUrl: './greybackground.component.html',
  styleUrl: './greybackground.component.scss'
})
export class GreyBackgroundComponent implements OnInit, OnDestroy {

  showGreyBackground:boolean = false;

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
    this.showGreyBackground = true;
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
    this.showGreyBackground = true;
  }

  @ViewChild('greyBackground') greyBackground!: ElementRef; 

  fadeOut() {
    this.greyBackground.nativeElement.style.animation = 'fade-out 2s ease-in-out forwards';
  }
}