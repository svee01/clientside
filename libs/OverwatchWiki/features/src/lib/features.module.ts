import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './user/list/list.component';
import { DetailComponent } from './user/detail/detail.component';
import { EditComponent } from './user/edit/edit.component';
import { RouterModule } from '@angular/router';
import { UserService } from './user/user.service';

@NgModule({
  imports: [CommonModule, RouterModule, ListComponent,
    DetailComponent, EditComponent,],
  declarations: [
  ],
  providers: [UserService],
  exports: [DetailComponent, ListComponent, EditComponent,],
})
export class FeaturesModule {}