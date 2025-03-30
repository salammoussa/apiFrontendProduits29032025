import { Injectable } from '@angular/core';
import { Produit } from './models/produit.model';
import { Categorie } from './models/categorie.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { CategorieWrapper } from './models/CategorieWrapper';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits!: Produit[]; //un tableau de Produit


  produit!: Produit;

  // apiURLCat: string = 'http://localhost:9111/produits/cat';

  // apiURL: string = 'http://localhost:9111/produits/api';


  // categories! : Categorie[];

  constructor(private http: HttpClient) {


  

  }

  listeProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(environment.apiURL);
  }

  ajouterProduit(prod: Produit): Observable<Produit> {
    return this.http.post<Produit>(environment.apiURL, prod, httpOptions);
  }

  supprimerProduit(id: number) {
    const url = `${environment.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

 

  consulterProduit(id: number): Observable<Produit> {
    const url = `${environment.apiURL}/${id}`;
    return this.http.get<Produit>(url);
  }


  updateProduit(prod: Produit): Observable<Produit> {
    return this.http.put<Produit>(environment.apiURL, prod, httpOptions);
  }


  listeCategories():Observable<CategorieWrapper>{
    return this.http.get<CategorieWrapper>(environment.apiURLCat);
    }
    
    rechercherParCategorie(idCat: number):Observable< Produit[]> {
      const url = `${environment.apiURL}/prodscat/${idCat}`;
      return this.http.get<Produit[]>(url);
      }

      rechercherParNom(nom: string):Observable< Produit[]> {
        const url = `${environment.apiURL}/prodsByName/${nom}`;
        return this.http.get<Produit[]>(url);
        }

       
        ajouterCategorie( cat: Categorie):Observable<Categorie>{
          return this.http.post<Categorie>(environment.apiURLCat, cat, httpOptions);
          }
          
}
