import { SiteService } from './../services/site.service';
import { SiteModel } from 'src/app/models/SiteModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  sitiosInteres: any[];
  constructor(private _site: SiteService) { }

  ngOnInit() {
    this._site.site.subscribe((res) => {
      this.sitiosInteres = res
      console.log('ContactComponent', this.sitiosInteres);
    });
  }

}
