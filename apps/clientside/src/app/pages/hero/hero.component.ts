import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'clientside-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {}
