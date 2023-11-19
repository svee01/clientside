import { Route } from '@angular/router';
import { ListComponent } from 'libs/OverwatchWiki/features/src/lib/user/list/list.component';
import { DetailComponent } from 'libs/OverwatchWiki/features/src/lib/user/detail/detail.component';
import { EditComponent } from 'libs/OverwatchWiki/features/src/lib/user/edit/edit.component';

export const appRoutes: Route[] = [
    // { path: "", pathMatch: "full", redirectTo: "component-a" },
    { path: "users", pathMatch: "full", component: ListComponent },
    // users/new moet voor users/:id, omdat new anders als de id wordt gezien.
    // Volgorde is belangrijk in routing.
    { path: "users/new", pathMatch: "full", component: EditComponent },
    { path: "users/:id", pathMatch: "full", component: DetailComponent },
    { path: "users/:id/edit", pathMatch: "full", component: EditComponent },
    // Catch-all route: als er geen URL match is gaan we naar component-a (of dashboard, of naar 404)
    { path: "**", redirectTo: "" },
];