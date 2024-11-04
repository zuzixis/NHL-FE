import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeagueComponent } from './league/league.component';
import { MenubarComponent } from './menubar/menubar.component';
import { HttpsConstantsService } from './services/https-constants.service';
import { TableComponent } from './table/table.component';
import { TeamComponent } from './team/team.component';
import { SeasonService } from './services/season.service';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { MatchComponent } from './match/match.component';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    TableComponent,
    TeamComponent,
    LeagueComponent,
    MatchComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    TableModule,
    ProgressBarModule,
    ToastModule,
    ButtonModule,
    OverlayPanelModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    CheckboxModule,
    InputNumberModule
  ],
  providers: [
    provideClientHydration(),
    SeasonService,
    HttpsConstantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
