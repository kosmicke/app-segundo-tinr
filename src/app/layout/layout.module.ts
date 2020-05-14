import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsideHeaderComponent } from './inside-header/inside-header.component';
import { InsideFooterComponent } from './inside-footer/inside-footer.component';
import { InsideLayoutComponent } from './inside-layout/inside-layout.component';
import { RouterModule } from '@angular/router';
import { OutsideLayoutComponent } from './outside-layout/outside-layout.component';

@NgModule({
  declarations: [InsideHeaderComponent, InsideFooterComponent, InsideLayoutComponent, OutsideLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
