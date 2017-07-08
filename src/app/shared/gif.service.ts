import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GifService{
    private query : string;
    private API_KEY: string=environment.GIPHY_API_KEY;
    private API_URL: string=environment.GIPHY_API_URL;
    private URL: string=this.API_URL+'api_key='+this.API_KEY+'&q=';
    constructor( private _http: Http){}
        getGif(query){
        return this._http.get(this.URL+query)
        .map(res => res.json());
    }
}
