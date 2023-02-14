import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ApiService } from '../services/api.services';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent {
  works: Array<any>;
  products: any = [];
  references: any = [];
  responsiveOptions: any = [];
  pageOfItems: Array<any>;
  searchWrapper: boolean = false;
  categoryFilter: string;
  descriptionFilter: string;
  codeFilter: string;
  codeIntFilter: string;
  brandFilter: string;
  pageSize = 4;
  page = 1;
  searchTitle: string;
  count = 0;
  responsive: boolean;
  public langValue: any;
  lang: string;

  constructor(
    private apiService: ApiService,
    private titleService: Title,
    private metaService: Meta,
    ) {

      this.langValue = localStorage.getItem("language");

      this.responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            showIndicators: false,
            showNavigators: false,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            showIndicators: false,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    this.titleService.setTitle('Home');
    this.metaService.addTag({ name: 'description', content: '' });
    this.metaService.addTag({ name: 'robots', content: 'index,follow' });
    this.metaService.addTag({ property: 'og:title', content: '' });
    this.metaService.addTag({ name: 'robots', content: 'index,follow' });

      const paramsProducts = this.getRequestParams(
        this.lang = this.langValue,
        this.categoryFilter = '220',
        this.page,
        this.pageSize = 6
      );
      this.apiService.get_all(paramsProducts).subscribe((pData) => {
        this.products = pData;
        this.count = this.apiService.size;
      });

      const params = this.getRequestParams(
        this.lang =  this.langValue,
        this.categoryFilter = '11',
        this.page,
        this.pageSize = 4
      );
      this.apiService.get_all(params).subscribe((pData) => {
        this.works = pData;
        this.count = this.apiService.size;
      });

      const paramsReferences = this.getRequestParams(
        this.lang = this.langValue,
        this.categoryFilter = '58',
        this.page,
        this.pageSize
      );
      this.apiService.get_all(paramsReferences).subscribe((pData) => {
        this.references = pData;
        this.count = this.apiService.size;
      });


  }


  getRequestParams(langSize: string, category: string, page: number, pageSize: string | number): any {
    // tslint:disable-next-line:prefer-const
    let params: any = {};
    let adder = '?';
    if (page) {
      params[`page`] = page - 1;
      adder + 'page=' + (page - 1);
      adder = '&';
    }

    if (langSize) {
      params[`lang`] = this.lang;
      adder + 'lang=' + this.lang;
      adder = '&';
    }

    if (category) {
      params[`categories`] = category;
      adder + 'categories=' + category;
      adder = '&';
    }

    if (pageSize) {
      params[`per_page`] = pageSize;
      adder + 'per_page=' + pageSize;
    }


    return params;

  }
}
