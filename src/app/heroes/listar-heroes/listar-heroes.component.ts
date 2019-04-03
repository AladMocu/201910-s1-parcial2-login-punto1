import { Component, OnInit } from '@angular/core';
import {Heroe} from "../heroe";
import {HeroesService} from "../heroes.service"

@Component({
  selector: 'app-listar-heroes',
  templateUrl: './listar-heroes.component.html',
  styleUrls: ['./listar-heroes.component.css']
})
export class ListarHeroesComponent implements OnInit {

  heroes:Heroe[];
  constructor(private heroesService:HeroesService) { }

  ngOnInit() {
  this.heroesService.getHeroes().subscribe(value => this.heroes=value);
  }

}
