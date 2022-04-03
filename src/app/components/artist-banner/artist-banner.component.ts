import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-banner',
  templateUrl: './artist-banner.component.html',
  styleUrls: ['./artist-banner.component.css']
})
export class ArtistBannerComponent implements OnInit {
  @Input() artistName: any;
  @Input() image: any;
  @Input() fans: any;
  constructor() { }

  ngOnInit(): void {
  }

}
