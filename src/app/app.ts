import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = 'MyPortfolio';

  ngOnInit() {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      // Dynamically import AOS to avoid server-side rendering issues
      import('aos').then((AOS) => {
        AOS.default.init({
          duration: 800,
          easing: 'ease-in-out',
          once: true,
          offset: 100
        });
      });
    }
  }
}