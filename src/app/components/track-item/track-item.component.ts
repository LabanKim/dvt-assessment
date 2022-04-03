import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.css']
})
export class TrackItemComponent implements OnInit {
  @Input() index: any;
  @Input() track: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  formatDuration(secs: any) {
    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);

    return `${minutes}:${seconds}`;
  }

}
