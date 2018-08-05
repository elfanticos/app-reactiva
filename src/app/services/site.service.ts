import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SiteService {

  private sites = new BehaviorSubject<any>([{ name: 'Blog Codeando', url: 'http://blog.codeando.org' },
    { name: 'Github', url: 'https://github.com/codeandomx' },
    { name: 'Twitter', url: 'https://twitter.com/codeando_org' },
    { name: 'Facebook', url: 'https://facebook.com/codeando.org' }]);
  site = this.sites.asObservable();

  constructor() { }

  changeSites(site) {
    this.sites.next(site);
  }
}