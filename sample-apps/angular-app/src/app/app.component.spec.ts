import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { JioTranslateService } from '@jiotranslate/ngx-beta';

describe('AppComponent', () => {
  let mockJioTranslateService: Partial<JioTranslateService>;

  beforeEach(async () => {
    mockJioTranslateService = {
      language: () => 'en',
      jiotranslate: () =>
        ({
          changeLanguage: () => {},
        } as any),
    };

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: JioTranslateService, useValue: mockJioTranslateService },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-angular-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-angular-app');
  });
});
