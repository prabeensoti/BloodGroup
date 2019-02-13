import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { AchivementComponent } from './home/achivement/achivement.component';
import { CommunityComponent } from './home/community/community.component';
import { PeopleVoiceComponent } from './home/people-voice/people-voice.component';
import { PhotoSliderComponent } from './home/photo-slider/photo-slider.component';
import { SearchOutputComponent } from './search/search-output/search-output.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    SearchComponent,
    AchivementComponent,
    CommunityComponent,
    PeopleVoiceComponent,
    PhotoSliderComponent,
    SearchOutputComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
