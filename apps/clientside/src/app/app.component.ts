import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeaturesModule } from '../../../../libs/OverwatchWiki/features/src/lib/features.module';

@Component({
  standalone: true,
  imports: [RouterModule, FeaturesModule],
  selector: 'clientside-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'clientside';
}
