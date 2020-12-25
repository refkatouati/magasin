import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http:HttpClient) { }
  getProduits()
  {return this.http.get("http://127.0.0.1:8080/rest/produits")}
  getProduit(id:number)
  {return this.http.get("http://127.0.0.1:8080/rest/produit/"+id)}
  deleteProduit(id:number)
  {return this.http.delete("http://127.0.0.1:8080/rest/delete/"+id)}

addProduit(image:File,pdt:any)
{
  const form= new FormData();
  form.append('file',image);
  form.append('prod',JSON.stringify(pdt))
 return this.http.post("http://127.0.0.1:8080/rest/add/",form)
  
}
}
