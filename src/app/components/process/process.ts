import { Component, OnInit } from '@angular/core';

declare const AOS: any;
@Component({
  selector: 'app-process',
  standalone: false,
  templateUrl: './process.html',
  styleUrl: './process.css'
})
export class Process implements OnInit {
  ngOnInit() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out-cubic',
        once: true,
        mirror: false
      });
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.querySelector('header')?.clientHeight || 0;
      const offsetTop = element.offsetTop - headerHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }
}
