import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableLoadingDirective } from './data-table-loading.directive';
import { DataTableComponent } from './data-table/data-table.component';
import { DataTableColumnDirective } from './data-table-column.directive';
import { DataTableColumnTemplateDirective } from './data-table-column-template.directive';

@NgModule({
  declarations: [AppComponent, DataTableComponent, DataTableLoadingDirective, DataTableColumnDirective, DataTableColumnTemplateDirective],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
