import { Component, Input, OnInit } from '@angular/core';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {
  @Input() artistId: any;
  trackList: Array<any> = [];

  constructor(private artistsService: ArtistsService) { }

  ngOnInit(): void {
    this.getTrackList();
  }

  getTrackList() {
    this.artistsService.getTracks(this.artistId).subscribe(result => {
      this.trackList = result.data;
    }, error => {
      console.log(error);
    });
  }

}
