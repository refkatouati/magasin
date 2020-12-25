import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  num :number;
 prod: any = { "id": null, "titre": "", "prix": 0.0 }

  constructor( private act:ActivatedRoute, private ser :ServiceService) { 
  this.num =this.act.snapshot.params["id"];
  this.ser.getProduit(this.num).subscribe(
    (data) =>{ this.prod=data},
    (err) =>{}

  )}
  ngOnInit(): void {
  }

}
