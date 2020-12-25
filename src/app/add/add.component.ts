import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  prod: any = { "id": null, "titre": "", "prix": 0.0 }

  constructor(private ser: ServiceService, private route: Router) { }

  ngOnInit(): void {
  }
  ajouter(image: any) {
    const fichier: File = image.files[0];
    const read = new FileReader();
    read.addEventListener("load", (event: any) => {
      this.ser.addProduit(fichier, this.prod).subscribe(
        (data) => { this.route.navigate(['/liste']) },
        (err) => { })

    })
    read.readAsDataURL(fichier);

 }
}
