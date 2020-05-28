import { NotFoundComponent } from './error/not-found/not-found.component';
import { PhotoSearchComponent } from './photos/photo-search/photo-search.component';
import { PhotosListComponent } from './photos/photos-list/photos-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsideLayoutComponent } from './layout/inside-layout/inside-layout.component';
import { PostsTopicsComponent } from './posts/posts-topics/posts-topics.component';
import { PostsTopicDetailComponent } from './posts/posts-topic-detail/posts-topic-detail.component';
import { OutsideLayoutComponent } from './layout/outside-layout/outside-layout.component';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {
    path : "",
    component : OutsideLayoutComponent,
    children : [
      { path: "login", component: AuthLoginComponent}
    ]
  },
  {
    path: "",
    component : InsideLayoutComponent,
    children : [
      {
        path: 'photos',
        component: PhotosListComponent,
        canActivate : [AuthGuard]
      },
      {
        path: 'photos-search',
        component: PhotoSearchComponent,
        canActivate : [AuthGuard]
      },
      {
        path: 'topics',
        component: PostsTopicsComponent,
        canActivate : [AuthGuard]
      },
      {
        path : 'topics/:id',
        component : PostsTopicDetailComponent,
        canActivate : [AuthGuard]
      },

      {path: '', redirectTo: 'photos', pathMatch: 'full' },
      {path: '**', component: NotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
