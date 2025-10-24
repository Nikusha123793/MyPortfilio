// home.ts
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{
    typingText = 'Front-End Developer';
  displayText = '';
  charIndex = 0;
  isDeleting = false;
  typingSpeed = 100;
  pauseTime = 2000;

  ngOnInit() {
    this.type();
  }

  type() {
    const currentIndex = this.charIndex;
    const fullText = this.typingText;

    if (this.isDeleting) {
      this.displayText = fullText.substring(0, currentIndex - 1);
      this.charIndex--;
    } else {
      this.displayText = fullText.substring(0, currentIndex + 1);
      this.charIndex++;
    }

    let typeSpeed = this.typingSpeed;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.charIndex === fullText.length) {
      typeSpeed = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // მოვაშორეთ animateOnScroll() გამოძახება
    // აქ შეგიძლიათ სხვა სკროლ-ბაზირებული ლოგიკა დაამატოთ საჭიროებისამებრ
  }
}