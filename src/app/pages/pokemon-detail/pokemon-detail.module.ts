import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';  // Importar IonicModule aquí
import { PokemonDetailPage } from './pokemon-detail.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,  // Asegúrate de que CommonModule esté aquí
    IonicModule,  // Importa IonicModule aquí
    RouterModule.forChild([
      {
        path: '',
        component: PokemonDetailPage
      }
    ])
  ],
  declarations: [PokemonDetailPage]
})
export class PokemonDetailPageModule {}
