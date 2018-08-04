import { Component, OnInit } from '@angular/core';
import { SiteService } from './services/site.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  sitiosInteres:any[] = [];
  constructor(private _site: SiteService) { }

  ngOnInit(): void {
    this.sitiosInteres = [
      { name: 'Blog Codeando', url: 'http://blog.codeando.org' },
      { name: 'Github', url: 'https://github.com/codeandomx' },
      { name: 'Twitter', url: 'https://twitter.com/codeando_org' },
      { name: 'Facebook', url: 'https://facebook.com/codeando.org' }
    ];
    this._site.site.subscribe((res) => { this.sitiosInteres = res });

  }
}
