import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'clientside-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {}
