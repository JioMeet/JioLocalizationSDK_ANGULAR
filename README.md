<h1 align="center" style="border-bottom: none">
    <b>
       <a href="https://localization-platform.sit.translate.jio">JioTranslate for Angular</a><br>
    </b>
    The JioTranslate i18n SDK for Angular
    <br>
</h1>

# What's JioTranslate for Angular?

Angular integration library of JioTranslate. With this package. It's super simple to add i18n to your Angular app!

## Installation

```
npm install @jiotranslate/ngx-beta
```

Then use the library in your `app.module.ts`. You have to add `NgxJioTranslateModule` to your imports section and
add factory provider for `JIOTRANSLATE_INSTANCE` token returning your JioTranslate instance.

```typescript
...
import {
  DevTools,
  NgxJioTranslateModule,
  JioTranslate,
  JIOTRANSLATE_INSTANCE,
  FormatSimple
} from '@jiotranslate/ngx-beta';
...
@NgModule({
  declarations: [
    ...
  ],
  imports: [
    NgxJioTranslateModule,
    ...
  ],
  providers: [
    {
      provide: JIOTRANSLATE_INSTANCE,
      useFactory: () => {
        return JioTranslate()
          .use(DevTools())
          .use(FormatSimple())
          .init({
            language: 'en'

            // for development
            apiUrl: environment.jiotranslateApiUrl,
            apiKey: environment.jiotranslateApiKey,

            // for production
            staticData: {
              ...
            }
          });
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Usage

Translating using pipe:

```html
<h1>{{"hello_world" | jiotms}}</h1>
```

Or using jio-tms attribute

```html
<h1 jio-tms key="providing_default_values"></h1>
```

## Prerequisites

1. An existing Angular project
2. An API key obtained from [JioTranslate Platform](https://localization-platform.sit.translate.jio).

## Why use JioTranslate?

It saves you a significant amount of time on localization tasks. It also ensures your software is perfectly translated.

### Features

- Comprehensive localization solution tailored for your JavaScript application 🙌
- Seamless localization right from the start 🎉
- Translation management system 🎈
