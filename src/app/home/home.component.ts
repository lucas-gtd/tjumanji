import { Component, OnInit } from '@angular/core';
import { Planete } from '../common/models/modele-planete';
import { News } from '../common/models/news.model';
import { defaultPlanetes } from '../common/mok/mok-planetes'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // les news
  public news: News[] = [];

  //Carousel
  public planetes:Planete[]= [];

  constructor() { }

  ngOnInit(): void {
    this.news.push(new News('https://i.pinimg.com/originals/61/de/d9/61ded9f535761631957d6ae12326a957.jpg', 'Odyssey', 'j\'aime les longues balade en mer'),
    new News('https://i.pinimg.com/originals/61/de/d9/61ded9f535761631957d6ae12326a957.jpg', 'Reconnaissance', 'je suis connu pour pour mes tartes marsienne'),
    new News('https://i.pinimg.com/originals/61/de/d9/61ded9f535761631957d6ae12326a957.jpg', 'maven', 'j\'aime la nature et les longues balades interstellaire '),)
  }

}
