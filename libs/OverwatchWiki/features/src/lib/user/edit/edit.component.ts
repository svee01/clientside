import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'clientside-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  userId: string | null = null;
  user: User | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    /**
     * We gebruiken de EditComponent om een bestaande record te wijzigen
     * én om een nieuwe record te maken.
     * Een bestaande record heeft een :id in de URL, bv '/users/1/edit'
     * Als die er dus is gaan we de user ophalen en bewerken.
     * Als er geen :id in de URL zit (via '/users/new') maken we een nieuwe record.
     */
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      if (this.userId) {
        // Bestaande user
        this.user = this.userService.getUserById(Number(this.userId));
      } else {
        // Nieuwe user
        this.user = new User();
      }
    });
  }

  save() {
    console.log('Hier komt je save actie');
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
