import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {
  artistId: any;
  artistDetails: any = {};
  artistAlbums: Array<any> = [];
  constructor(private route: ActivatedRoute, private artistsService: ArtistsService) { }

  ngOnInit(): void {
    this.artistId = this.route.snapshot.paramMap.get('id');
    this.getArtistDetails();
    this.getAlbums();
  }

  getArtistDetails() {
    this.artistsService.getArtistDetails(this.artistId).subscribe(result => {
      this.artistDetails = result;
    }, error => {
      console.log(error);
    })
  }

  getAlbums() {
    this.artistsService.getAlbums(this.artistId).subscribe(result => {
      this.artistAlbums = result.data;
    }, error => {
      console.log(error);
    })
  }

}
