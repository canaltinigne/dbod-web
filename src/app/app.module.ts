import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { InstanceComponent } from './instance/instance.component';
import { InstancesComponent } from './instances/instances.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InstanceComponent,
    InstancesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [InstanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
