import { Component, OnInit } from '@angular/core';

declare const AOS: any;


@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services implements OnInit{
  ngOnInit() {
    // AOS initialization will be handled by the main app component
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
