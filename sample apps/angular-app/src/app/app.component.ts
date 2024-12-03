import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { JioTranslateService } from '@jiotranslate/ngx-beta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public jiotranslateService: JioTranslateService) {}

  changeLanguage() {
    this.jiotranslateService
      .jiotranslate()
      .changeLanguage(
        this.jiotranslateService.language() == 'en' ? 'hi-IN' : 'en'
      );
  }
  title = 'my-angular-app';
}
