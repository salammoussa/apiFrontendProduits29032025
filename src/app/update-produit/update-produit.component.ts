import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../models/produit.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../produit.service';
import { Categorie } from '../models/categorie.model';

@Component({
  selector: 'app-update-produit',
  imports: [FormsModule, CommonModule],

  templateUrl: './update-produit.component.html',
  styles: ``
})
export class UpdateProduitComponent implements OnInit {


  currentProduit = new Produit();

  categories!: Categorie[];
  updatedCatId!: number;


  constructor(private activatedRoute: ActivatedRoute, private router: Router, private produitService: ProduitService) {

  }

  ngOnInit(): void {
    this.produitService.listeCategories().
    subscribe(cats => {console.log(cats);
    this.categories = cats._embedded.categories;
    }
    );
    this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{ this.currentProduit = prod;
    this.updatedCatId = this.currentProduit.categorie?.idCat!;
    } ) ;
    }
     
 

  updateProduit() {
    this.currentProduit.categorie = this.categories.
     find(cat => cat.idCat == this.updatedCatId)!;
    this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
    this.router.navigate(['produits']); }
    );
    }


}
