import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {


  testimonials = [
    {
      id: 'sBoese',
      comment: 'Working with Michael Krämer has been an absolute pleasure. Their attention to detail and ability to transform complex requirements into elegant, user-friendly designs is truly impressive. They are a key contributor to our teams success.',
      name: 'S. Böse',
    },
    {
      id: 'aButalov',
      comment: 'Michael Krämer consistently delivers high-quality frontend solutions, meeting deadlines and exceeding expectations. Their creativity and problem-solving skills make them an indispensable asset to our projects.',
      name: 'A. Butalov',
    },
    {
      id: 'lStanislav',
      comment: 'As a fellow frontend developer, I admire Michael Krämers dedication to clean, efficient code and innovative design. Their collaborative spirit and passion for crafting seamless user experiences are second to none.',
      name: 'L. Stanislav',
    }
  ]

  getPrevIndex() {
    return (this.currentTestimonial - 1 + this.testimonials.length) % this.testimonials.length;
  }

  getNextIndex() {
    return (this.currentTestimonial + 1) % this.testimonials.length;
  }

  currentTestimonial = 0;
  prevIsFading = false;
  nextIsFading = false;

  nextSlide() {
    this.nextIsFading = true;
    this.currentTestimonial = this.getNextIndex()
    setTimeout(() => {
        this.nextIsFading = false;
    }, 200); 
  }

  prevSlide() {
    this.prevIsFading = true; 
    this.currentTestimonial = this.getPrevIndex();
    setTimeout(() => {
        this.prevIsFading = false; 
      }, 200); 
  }

}