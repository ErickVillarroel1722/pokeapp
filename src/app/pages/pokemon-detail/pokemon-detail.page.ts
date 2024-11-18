import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const pokemonName = this.route.snapshot.paramMap.get('name');
    if (pokemonName) {
      this.getPokemonDetails(pokemonName);
    }
  }

  getPokemonDetails(name: string) {
    this.pokemonService.getPokemonDetails(name).subscribe(
      (response) => {
        this.pokemon = response;
      },
      (error) => {
        console.error('Error fetching Pokémon details', error);
      }
    );
  }
}
