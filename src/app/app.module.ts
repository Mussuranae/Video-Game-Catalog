import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule, MatFormFieldModule, MatInputModule, MatCardModule, MatGridListModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoGameComponent } from './video-game/video-game.component';

import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { CreateGameComponent } from './create-game/create-game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsGameComponent } from './details-game/details-game.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoGameComponent,
    CreateGameComponent,
    DetailsGameComponent,
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
        MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
