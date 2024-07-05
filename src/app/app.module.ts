import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
// i18n
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslation } from './core/config/i18n/translate-loader.config';
/* import { MultiLanguageComponent } from './components/multi-language/multi-language.component'; */
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule,
    HttpClientModule,
    TranslateModule.forRoot(provideTranslation()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
