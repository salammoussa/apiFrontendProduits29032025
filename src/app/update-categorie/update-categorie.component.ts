import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categorie } from '../models/categorie.model';
import { ProduitService } from '../produit.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-categorie',
  imports: [FormsModule,CommonModule],
  templateUrl: './update-categorie.component.html',
  styles: ``
})
export class UpdateCategorieComponent implements OnInit {

  
  @Input()
categorie! : Categorie;


@Output()
categorieUpdated = new EventEmitter<Categorie>();

@Input()
ajout!:boolean;
   

    constructor() { }


    ngOnInit(): void {
      console.log("ngOnInit du composant UpdateCategorie ",this.categorie);
      }




      saveCategorie(){
        this.categorieUpdated.emit(this.categorie);
        }

 

  

}
