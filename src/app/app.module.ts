import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule  } from '@angular/router';  // temporal

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { InstanceComponent } from './instance/instance.component';
import { InstancesComponent } from './instances/instances.component';

import { InstanceService } from './instance.service';
//import { InstanceSearchService } from './instance-search.service';

// In-Memory Web API
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InstanceComponent,
    InstancesComponent,
    //InstanceSearchService,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([  // temporal
      {
        path: '',
        redirectTo: '/navigation',
        pathMatch: 'full'
      },
      {
        path: 'navigation',
        component: NavigationComponent
      },
      {
        path: 'instances',
        component: InstancesComponent
      },
    ])
  ],
  providers: [InstanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
