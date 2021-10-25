import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DndDirective } from './dnd.directive';
import { AppComponent } from './app.component';
import { ProgressComponent } from './components/progress/progress.component'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadComponent } from './components/upload/upload.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DemoMaterialModule } from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ResultsComponent } from './components/results/results.component';
import { DetailsComponent } from './components/details/details.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule, BrowserAnimationsModule,DemoMaterialModule, AppRoutingModule,FlexLayoutModule ],
  declarations: [ AppComponent, DndDirective, ProgressComponent, UploadComponent, ToolbarComponent, ResultsComponent, DetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
