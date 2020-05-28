import { ErrorModule } from './error/error.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { LayoutModule } from './layout/layout.module';
import { PostsModule } from './posts/posts.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './services/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotosModule,
    ErrorModule,
    LayoutModule,
    PostsModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
