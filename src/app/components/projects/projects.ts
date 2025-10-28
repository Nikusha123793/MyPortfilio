// Update your projects.ts file
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  showAllProjects = false;

  loadMoreProjects() {
    this.showAllProjects = !this.showAllProjects;

    // Refresh AOS animations when new content is loaded
    setTimeout(() => {
      if (typeof (window as any).AOS !== 'undefined') {
        (window as any).AOS.refresh();
      }
    }, 300);
  }
}