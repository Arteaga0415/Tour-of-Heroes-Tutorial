import {Component, Input} from '@angular/core';
import {Hero} from '../heroes/hero';



@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrl: './heroes-details.component.css'
})
export class HeroesDetailsComponent {
  
  @Input() hero?: Hero;

}
