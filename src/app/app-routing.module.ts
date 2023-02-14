import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogComponent } from './blog/blog.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full'},
  { path: 'it', component: HomepageComponent },
  { path: 'en', component: HomepageComponent },
  { path: 'it/news/:slug', component: BlogDetailComponent },
  { path: 'it/news', component: BlogComponent },
  { path: 'it/chi-siamo', component: AboutComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
