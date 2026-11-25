import { Component } from '@angular/core';
import { Header } from '../header/header';
import { ProfileCard } from '../profile-card/profile-card';
import { Skills } from '../skills/skills';
import { Footer } from '../footer/footer';
import { Proficiency } from '../proficiency';

@Component({
  selector: 'app-home',
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // The Home page owns all CV data and passes it down to the children.
  fullName = 'Fiona Veronica A. Mercado';
  location = 'City of San Fernando, Pampanga';
  email = 'fionavmercado@gmail.com';
  phone = '0968 372 3825';

  profile = 'Hey there! I am a student interested in web development. I enjoy learning new technologies, exploring different tools, and building useful applications. I am passionate about improving my skills and creating simple, functional, and user-friendly web experiences.';

  skills = [
    'UI/UX Design',
    'Wireframing',
    'Prototyping',
    'Web Design',
    'Figma',
    'Canva',
    'HTML and CSS',
    'JavaScript',
    'Angular',
    'Responsive Web Design',
    'Node.js',
    'REST API',
    'MySQL',
    'Python',
    'Java',
    'Git',
    'GitHub',
    'Visual Studio Code'
  ];

  proficiencies: Proficiency[] = [
    { tool: 'UI/UX Design', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'HTML and CSS', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  message = 'Click any skill above to select it.';

  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
