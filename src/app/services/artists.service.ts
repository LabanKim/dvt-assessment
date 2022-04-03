import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  baserUrl: string = "http://cors-anywhere.herokuapp.com/https://api.deezer.com";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  searchArtists(searchTerm: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baserUrl}/search/artist?q=${searchTerm}`, this.httpOptions);
  }

  getArtistDetails(artistId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baserUrl}/artist/${artistId}`, this.httpOptions);
  }

  getTracks(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baserUrl}/artist/${id}/top?limit=5`, this.httpOptions);
  }

  getAlbums(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baserUrl}/artist/${id}/albums`, this.httpOptions);
  }
}
