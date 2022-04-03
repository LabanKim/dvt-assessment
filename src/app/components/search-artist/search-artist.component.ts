import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.css']
})
export class SearchArtistComponent implements OnInit {
  @Output() onSearchValue: EventEmitter<any> = new EventEmitter();
  private searchTerms = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    this.searchTerms.pipe(
      debounceTime(700),
      distinctUntilChanged())
      .subscribe(value => {
        this.onSearchValue.emit(value.toString().trim());
      });
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

}
