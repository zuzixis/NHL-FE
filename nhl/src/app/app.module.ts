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
import { ConferenceComponent } from './conference/conference.component';
import { TagModule } from 'primeng/tag';
import { DivisionComponent } from './division/division.component';
import { CarouselModule } from 'primeng/carousel';
import { TeamCompareComponent } from './team-compare/team-compare.component';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    TableComponent,
    TeamComponent,
    LeagueComponent,
    MatchComponent,
    ConferenceComponent,
    DivisionComponent,
    TeamCompareComponent
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
    InputNumberModule,
    TagModule,
    CarouselModule,
    ChartModule
  ],
  providers: [
    provideClientHydration(),
    SeasonService,
    HttpsConstantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
