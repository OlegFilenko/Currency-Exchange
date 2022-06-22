import { Component, Input } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'icon-flag',
    templateUrl: './icon-flag.component.html',
    styleUrls: ['./icon-flag.component.scss']
})
export class IconFlagComponent {

    private _locale: string;
    @Input()
    set locale(value: string) {
        this._locale = value;
        if (this._locale) {
            this.matIconRegistry.addSvgIcon(
                this._locale,
                this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/flags/${this._locale}.svg`)
            );
        }
    }
    get locale(): string {
        return this._locale;
    }

    constructor(
        private readonly matIconRegistry: MatIconRegistry,
        private readonly domSanitizer: DomSanitizer
    ) {
    }
}
