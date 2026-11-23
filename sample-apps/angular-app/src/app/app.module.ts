import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import {
  DevTools,
  FormatSimple,
  JIOTRANSLATE_INSTANCE,
  JioTranslate,
  NgxJioTranslateModule,
} from '@jiotranslate/ngx-beta';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxJioTranslateModule],
  providers: [
    {
      provide: JIOTRANSLATE_INSTANCE,
      useFactory: () => {
        return JioTranslate()
          .use(DevTools())
          .use(FormatSimple())
          .init({
            language: 'en',
            // configured via environment
            apiUrl: environment.jiotranslateApiUrl,
            apiKey: environment.jiotranslateApiKey,
            staticData: {
              en: {
                hello_world: 'hello world',
              },
              'hi-IN': {
                hello_world: 'namaskar',
              },
            },
          });
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
