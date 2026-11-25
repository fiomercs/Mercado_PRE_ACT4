import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Proficiency } from '../proficiency';

@Component({
  selector: 'app-directives',
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {
  showProjects = true;

  projects = [
    { name: 'Angular CV & Portfolio App', tech: 'Angular, TypeScript, CSS' },
    { name: 'UI/UX Wireframe & Prototype Kit', tech: 'Figma & Canva' },
    { name: 'REST API Task Manager', tech: 'Node.js & MySQL' },
    { name: 'Responsive Landing Page', tech: 'HTML, CSS & JavaScript' }
  ];

  selectedLevel = 'All';
  proficiencies: Proficiency[] = [
    { tool: 'UI/UX Design', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  toggleProjects() {
    this.showProjects = !this.showProjects;
  }

  filteredProficiencies() {
    if (this.selectedLevel === 'All') {
      return this.proficiencies;
    }
    return this.proficiencies.filter(item => item.level === this.selectedLevel);
  }
}
