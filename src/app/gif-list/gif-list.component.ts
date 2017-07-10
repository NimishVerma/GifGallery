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
  obj :any={};
  handleSuccess(data){
     
    this.gifs=[] 
     if(data.pagination['total_count']>0 ){
    this.gifsFound= true;
    var arr = data.data
    console.log(arr)
    for (var i = 0, len = arr.length; i < len; i++) {
    let value = arr[i]
    var a = value.url;
    var b = value.images.fixed_height.url;
    var c = value.images.fixed_height.width;
     var d = value.images.fixed_height.height;
    this.gifs.push({gif:a, url:b,width:c,height:d})
    
  }
  console.log(this.obj);
  console.log(this.gifs)
  this.gifsFound = true;
     
    
}
else{
  $("#openModalButton").click();
}
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