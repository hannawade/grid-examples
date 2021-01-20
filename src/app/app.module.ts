import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxDatatableComponent } from './ngx-datatable/ngx-datatable.component';
import { MatTableModule } from '@angular/material/table';
import { MaterialTableComponent } from './material-table/material-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2SmartTableComponent } from './ng2-smart-table/ng2-smart-table.component';
import { GridjsComponent } from './gridjs/gridjs.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxDatatableComponent,
    MaterialTableComponent,
    Ng2SmartTableComponent,
    GridjsComponent,
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    MatTableModule,
    Ng2SmartTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
