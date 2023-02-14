import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PARAM_NEWS_PATH } from '../constants/constants';
import { ApiService } from '../services/api.services';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})
export class BlogComponent {

  newsList:  any = [];
  products: any = [];
  pageOfItems: Array<any>;
  searchWrapper: boolean = false;
  categoryFilter: string;
  descriptionFilter: string;
  codeFilter: string;
  codeIntFilter: string;
  brandFilter: string;
  pageSize = 10;
  page = 1;
  searchTitle: string;
  count = 4;
  responsive: boolean;
  langValue: string;
  lang: string;


  constructor(
    private apiService: ApiService,
    private titleService: Title,
    private metaService: Meta,
    ) {

      this.langValue = 'it';
      this.loadNews();

      this.titleService.setTitle('News');
      this.metaService.addTag({ name: 'description', content: '' });
      this.metaService.addTag({ name: 'robots', content: 'index,follow' });
      this.metaService.addTag({ property: 'og:title', content: '' });
      this.metaService.addTag({ name: 'robots', content: 'index,follow' });
  }


  public loadNews() {
    const params = this.getRequestParams(
      this.lang = 'it',
      this.categoryFilter = '11',
      this.page,
      this.pageSize
    );
    this.apiService.get_all(params).subscribe((pData) => {
      this.newsList = pData;
      this.count = this.apiService.size;
    });
  }

  public handlePageChange(event: any): void {
    this.page = event;
    this.loadNews();

  }


  getRequestParams(langSize: string, category: string, page: number, pageSize: string | number): any {
    // tslint:disable-next-line:prefer-const
    let path = this.langValue + PARAM_NEWS_PATH;

    let params: any = {};
    let adder = '?';
    if (page) {
      params[`page`] = page - 1;
      path += adder + 'page=' + (page - 1);
      adder = '&';
    }

    if (langSize) {
      params[`lang`] = this.lang;
      path += adder + 'lang=' + this.lang;
      adder = '&';
    }

    if (category) {
      params[`categories`] = category;
      path += adder + 'categories=' + category;
      adder = '&';
    }


    if (pageSize) {
      params[`per_page`] = pageSize;
      path += adder + 'per_page=' + pageSize;
    }

    window.history.replaceState({}, '', path);

    return params;

  }

}
