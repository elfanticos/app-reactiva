import { SiteService } from './../services/site.service';
import { Component, OnInit } from '@angular/core';
import { SiteModel } from 'src/app/models/SiteModel';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  siteModel = new SiteModel(null, null);
  sitiosInteres: any[];
  constructor(private _site: SiteService) { }

  ngOnInit() {
    this._site.site.subscribe((res) => { this.sitiosInteres = res 
    console.log('about component', this.sitiosInteres);
    });
  }

}
