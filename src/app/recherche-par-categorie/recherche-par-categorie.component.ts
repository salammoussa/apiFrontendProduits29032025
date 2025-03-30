import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../models/produit.model';
import { Categorie } from '../models/categorie.model';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-recherche-par-categorie',
  imports: [CommonModule, FormsModule],
  templateUrl: './recherche-par-categorie.component.html',
  styles: ``
})
export class RechercheParCategorieComponent implements OnInit {

  produits! : Produit[];
  IdCategorie! : number;
  categories! : Categorie[];

  constructor(private produitService: ProduitService){



  }


  ngOnInit(): void {
    this.produitService.listeCategories().
    subscribe(cats => {this.categories = cats._embedded.categories;
    console.log(cats);
    });
    }
    

    onChange() {
      this.produitService.rechercherParCategorie(this.IdCategorie).
      subscribe(prods =>{this.produits=prods});
      }



}
