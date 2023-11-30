import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MOvieComponent {

  title = "Movie Booking";
  movies :any[];

  constructor(){

 
  this.movies = [{
    id:1,
    name:"The Shawshank Redemption",
    director:"Frank Darabont",
    year:1994,
    ticketPrice:400
  },{
    id:2,
    name:"Fight Club",
    director:"David Fincher",
    year:1999,
    ticketPrice:500
  },{
    id:3,
    name:"Inception",
    director:"Christopher Nolan",
    year:2010,
    ticketPrice:300
    },{
    id:4,
    name:"Interstellar",
    director:"Christopher Nolan",
    year:2014,
    ticketPrice:550
  },{
    id:5,
    name:"The Dark Knight Rises",
    director:"Christopher Nolan",
    year:2012,
    ticketPrice:350
  },{
    id:6,
    name:"The Lord of the Rings",
    director:"Peter Jackson",
    year:2003,
    ticketPrice:450
  }
  ];

}
show:boolean = true;

color :string ='';

num :String = ''
// showtable(){
//   this.showtable = this.showtable;
// }
  
  
}
