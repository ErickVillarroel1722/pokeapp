import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage implements OnInit {
  pokemons: any[] = [];
  loading = false;
  searchTerm: string = '';
  selectedPokemon: any = null;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.fetchPokemons();
  }

  fetchPokemons() {
    this.loading = true;
    this.pokemonService.getPokemons(50).subscribe({
      next: (response) => {
        this.pokemons = response.results;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching Pokémon:', error);
        this.loading = false;
      },
    });
  }

  searchPokemon() {
    if (!this.searchTerm) {
      alert('Por favor, ingresa el nombre o ID de un Pokémon.');
      return;
    }

    this.loading = true;
    this.pokemonService.getPokemonDetails(this.searchTerm.toLowerCase()).subscribe({
      next: (pokemon) => {
        this.selectedPokemon = pokemon;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching Pokémon details:', error);
        alert('Pokémon no encontrado. Intenta con otro nombre o ID.');
        this.loading = false;
      },
    });
  }

  fetchPokemonDetails(name: string) {
    this.searchTerm = name;
    this.searchPokemon();
  }
}
