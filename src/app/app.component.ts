import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from './services/api.services';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { PAGES, PAGES_EN } from './constants/constants';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lang = 'it';
  language: string;
  public langValue: any;
  pages: any;
  pageValue: string;
  constructor(private http: HttpClient,
    private apiService: ApiService,
    private titleService:Title,
    private translate: TranslateService,
    private router: Router,
    private metaService: Meta) {

      localStorage.setItem('language', 'it');

      console.log(this.langValue)
      translate.addLangs(['it', 'en']);
      translate.setDefaultLang('it');
      translate.use('it');


      this.pages = PAGES;

  }


  useLanguage(language: string): void {
    console.log(language);
    localStorage.setItem('language', language);
    this.router.navigateByUrl('/' + language );
    this.langValue = localStorage.getItem("language");
    this.lang = this.langValue;

    if (localStorage.getItem('language') == 'it'){
      this.pages = PAGES;
    } else {
      this.pages = PAGES_EN;
    }
  }

  ngOnInit() {



    }

}
