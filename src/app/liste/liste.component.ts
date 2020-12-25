import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  produits: any = []
  constructor(private ser: ServiceService, private route: Router) { }

  ngOnInit(): void {
    this.getProduits();
  }
  getProduits() {
    this.ser.getProduits().subscribe(

      (data) => {
        this.produits = data;
        console.log(data)
      },
      (err) => { console.log(err) }



    )
  }
}
