import { Component, OnInit } from '@angular/core';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  artistList: Array<any> = [];

  constructor(private artistsService: ArtistsService) { }

  ngOnInit(): void {
  }

  searchArtist(value: any) {
    this.artistsService.searchArtists(value).subscribe(result => {
      this.artistList = result.data;
    }, error => {
      console.log(error);
    });
  }
}
