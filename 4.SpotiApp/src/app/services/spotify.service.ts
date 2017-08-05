import { Injectable } from '@angular/core';

@Injectable()
export class SpotifyService {

  artistas: any [];

  searchUrl: string = "https://api.spotify.com/v1/search";


  constructor() { }

  getArtistas( term:string ){

    let query = "q=Ricardo+Montaner"

    let url = this.searchUrl +


  }

}
