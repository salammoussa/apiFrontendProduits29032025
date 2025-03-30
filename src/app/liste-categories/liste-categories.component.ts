import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/categorie.model';
import { ProduitService } from '../produit.service';
import { UpdateCategorieComponent } from "../update-categorie/update-categorie.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-categories',
  imports: [UpdateCategorieComponent, CommonModule],
  templateUrl: './liste-categories.component.html',
  styles: ``
})
export class ListeCategoriesComponent implements OnInit {


  categories!: Categorie[];

  updatedCat: Categorie = { 
    idCat: 0, // Changed from 'number' to actual number
    nomCat: "", 
    descriptionCat: "" 
  };

  ajout:boolean=true;



  constructor(private produitService: ProduitService) { }


  ngOnInit(): void {
this.chargerCategories();
  


  }

  chargerCategories(){
    this.produitService.listeCategories().subscribe(cats => {
      this.categories = cats._embedded.categories;
      console.log(cats);
    });

  }


  categorieUpdated(cat: Categorie) {
    console.log("Cat recu event", cat);
    this.produitService.ajouterCategorie(cat).subscribe(() => this.chargerCategories());
    
    
  }


  



  updateCat(cat: Categorie) {
    this.updatedCat = cat;
    this.ajout = false;
  }





}
