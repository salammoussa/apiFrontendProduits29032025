import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../models/produit.model';
import { ProduitService } from '../produit.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produits',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './produits.component.html',

})
export class ProduitsComponent implements OnInit {


  produits!: Produit[]; //un tableau de Produit


  constructor(private produitService: ProduitService) {

    // this.produits = produitService.listeProduit();

  }


  ngOnInit(): void {

    // this.produitService.listeProduit().subscribe(prods => {
    //   console.log(prods);
    //   this.produits = prods;
    // });


    this.chargerProduits();
  }

  chargerProduits(){
    this.produitService.listeProduit().subscribe(prods => {
    console.log(prods);
    this.produits = prods;
    });
    }

    supprimerProduit(p: Produit)
    {
    let conf = confirm("Etes-vous sûr de supprimer ce produit?");
    if (conf)
    this.produitService.supprimerProduit(p.idProduit!).subscribe(() => {
    console.log("produit supprimé");
    this.chargerProduits();
    });
    }




}