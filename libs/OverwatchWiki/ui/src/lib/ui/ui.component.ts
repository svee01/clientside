import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'clientside-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css'],
})
export class UiComponent {}
