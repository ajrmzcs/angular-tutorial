import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists: any [] = [];

  searchUrl: string = "https://api.spotify.com/v1/search";
  artistUrl: string = "https://api.spotify.com/v1/artists";


  constructor( private http:Http ) { }

  getArtists ( term:string ){

    let headers = new Headers();
    headers.append( 'authorization','Bearer BQCZm9Xl1HIP-GgziOJYpYo61XEVlKul4voZJkTXzaCD2o6Hh8zApcej7X7j2KFHvDMHFKOJcb9Wvjz3h7pJLA' );

    let query =  `?q=${ term }&type=artist`;
    let url = this.searchUrl + query;

    return this.http.get( url, { headers } )
            .map( res => {
                // console.log( res.json().artists.items );
                this.artists = res.json().artists.items;
                console.log(this.artists);

            })

  }

  getArtist ( id:string ){

    let headers = new Headers();
    headers.append( 'authorization','Bearer BQCZm9Xl1HIP-GgziOJYpYo61XEVlKul4voZJkTXzaCD2o6Hh8zApcej7X7j2KFHvDMHFKOJcb9Wvjz3h7pJLA' );

    let query =  `/${ id }`;
    let url = this.artistUrl + query;

    return this.http.get( url, { headers } )
            .map( res => {
                return res.json();
            })

  }
  getTop ( id:string ){

    let headers = new Headers();
    headers.append( 'authorization','Bearer BQCZm9Xl1HIP-GgziOJYpYo61XEVlKul4voZJkTXzaCD2o6Hh8zApcej7X7j2KFHvDMHFKOJcb9Wvjz3h7pJLA' );

    let query =  `/${ id }/top-tracks?country=US`;
    let url = this.artistUrl + query;

    return this.http.get( url, { headers } )
            .map( res => {
                console.log( res.json().tracks );
                return res.json().tracks;
            })

  }

}
