import { Component, OnInit } from '@angular/core';
import {GifService} from '../shared/gif.service'
@Component({
  selector: 'gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.css']
})
export class GifListComponent implements OnInit {
  gifs : any[]
  gifsFound : boolean=false;
  searching : boolean =false;
  handleSuccess(data){
    this.gifsFound= true;
    this.gifs=data.data.map(function(obj){return obj.images['fixed_height']['url'];});
    console.log(data.hits)
  }
  handleError(error){
    console.log(error)

  }
  constructor(private _gifService : GifService) { }

  searchGif(query: string){
    this.searching=true;
    return this._gifService.getGif(query).subscribe(
      data => this.handleSuccess(data),
      error => console.log(error),
      () => this.searching =false
    )
  }
  ngOnInit() {
  }

}
