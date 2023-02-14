import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from '../services/api.services';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.less']
})
export class BlogDetailComponent {
  elements: any = [];
  works:  Array<any>;
  products: any = [];
  pageOfItems: Array<any>;
  searchWrapper: boolean = false;
  categoryFilter: string;
  descriptionFilter: string;
  codeFilter: string;
  codeIntFilter: string;
  brandFilter: string;
  pageSize: number;
  page = 1;
  searchTitle: string;
  count = 0;
  responsive: boolean;
  public langValue: any;
  lang: string;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    private spinner: NgxSpinnerService,
    ) {

      this.spinner.show();

      this.langValue = localStorage.getItem("language");


  this.route.paramMap.subscribe((params) => {
    let id = this.route.snapshot.paramMap.get("slug");
    this.elements = this.apiService.get_id(id, this.langValue).subscribe((res) => {
      this.elements = res;


      this.titleService.setTitle(this.elements[0].title.rendered + ' trtrtetr');
      this.metaService.addTag({ name: 'description', content: this.elements[0].excerpt.rendered });
      this.metaService.addTag({ name: 'robots', content: 'index,follow' });
      this.metaService.addTag({ property: 'og:title', content: this.elements[0].id });
      this.metaService.addTag({ name: 'robots', content: 'index,follow' });

      this.loadNews(this.langValue);
      if (this.elements === 'error') {
        this.router.navigate(['/']);
      }


    });


    setTimeout(() => {
      this.spinner.hide();
    }, 500);

  });
}

public loadNews(langValue: any){
  const params = this.getRequestParams(
    this.lang = langValue,
    this.categoryFilter = '11',
    this.page,
    this.pageSize
  );
  this.apiService.get_all(params).subscribe((pData) => {
    this.works = pData;
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