import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SequenceComponent } from './components/sequence/sequence.component';
import { SequencesComponent } from './components/sequences/sequences.component';
import { ReportComponent } from './components/report/report.component';
import { AddSequenceComponent } from './components/add-sequence/add-sequence.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SequenceComponent,
    SequencesComponent,
    ReportComponent,
    AddSequenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
