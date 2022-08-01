import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://i.pinimg.com/originals/bb/4a/43/bb4a43cd26f63db45b6261b8943415fd.jpg';
  image3 = 'https://cdn.britannica.com/57/99557-050-213502D2/Hut-dwellings-Bora-Bora-Society-Islands-French-Polynesia.jpg';

  constructor() { }

  ngOnInit() {
  }

}