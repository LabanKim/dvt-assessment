import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDetailsComponent } from './pages/artist-details/artist-details.component';
import { ArtistListComponent } from './pages/artist-list/artist-list.component';

const routes: Routes = [
  { path: "", redirectTo: "/artists", pathMatch: "full" },
  { path: "artists", component: ArtistListComponent, },
  { path: "artist-details/:id", component: ArtistDetailsComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
