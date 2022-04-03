import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { SearchArtistComponent } from './components/search-artist/search-artist.component';
import { ArtistDetailsComponent } from './pages/artist-details/artist-details.component';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';
import { AlbumItemComponent } from './components/album-item/album-item.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { TrackItemComponent } from './components/track-item/track-item.component';
import { ArtistBannerComponent } from './components/artist-banner/artist-banner.component';
import { ArtistListComponent } from './pages/artist-list/artist-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortNumberPipe } from './pipes/short-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchArtistComponent,
    ArtistDetailsComponent,
    ArtistCardComponent,
    AlbumItemComponent,
    TrackListComponent,
    TrackItemComponent,
    ArtistBannerComponent,
    ArtistListComponent,
    ShortNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
