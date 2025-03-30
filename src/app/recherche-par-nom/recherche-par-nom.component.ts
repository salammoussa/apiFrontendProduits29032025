import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../models/produit.model';
import { ProduitService } from '../produit.service';
import { SearchFilterPipe } from "../search-filter.pipe";

@Component({
  selector: 'app-recherche-par-nom',
  imports: [FormsModule, CommonModule],
  templateUrl: './recherche-par-nom.component.html',
  styles: ``
})
export class RechercheParNomComponent implements OnInit {


  nomProduit!: string;
  produits!: Produit[];

  allProduits! : Produit[];
searchTerm!: string;

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {

    //ici on charge les donnes de la tableau au demarrage de l'appli
    this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.allProduits = prods;
      });

    // //ici on initiale à un tableau vide chargé au demarragde de l'application
    // this.produits = [];
  }
  rechercherProds() {
    if (this.nomProduit)
      //ou bien (this.nomProduit!=="")
      this.produitService
        .rechercherParNom(this.nomProduit)
        .subscribe((prods) => {
          console.log(prods);
          this.produits = prods;
        });
    else
      this.produitService.listeProduit().subscribe((prods) => {
        console.log(prods);
        this.produits = prods;
      });
  }

  onKeyUp(filterText : string){
    this.produits = this.allProduits.filter(item =>item.nomProduit!.toLowerCase().includes(filterText));
    }


   

}
