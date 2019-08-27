import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule, MatFormFieldModule, MatInputModule, MatGridListModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';

import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { MatTableModule } from '@angular/material/table';
import { CreateGameComponent } from './create-game/create-game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsGameComponent } from './details-game/details-game.component';
import { CartComponent } from './cart/cart.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    CreateGameComponent,
    DetailsGameComponent,
    CartComponent,
    DataTableComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatCardModule,
        MatGridListModule,
        MatButtonModule,
        MatCheckboxModule,
        FontAwesomeModule,
        environment.production ? [] : AkitaNgDevtools.forRoot(),
        AkitaNgRouterStoreModule.forRoot(),
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        MatTableModule,
        MatSortModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
