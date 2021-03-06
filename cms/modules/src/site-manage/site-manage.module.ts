import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CoreModule } from '@angular-cms/core';
import { PropertiesModule } from '@angular-cms/properties';

import { SharedModule } from '../shared/shared.module';
import { SiteManageEntryComponent } from './site-manage-entry.component';
import { SiteManageComponent } from './site-manage.component';
import { SiteManageService } from './site-manage.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        SharedModule,
        RouterModule,
        PropertiesModule
    ],
    declarations: [
        SiteManageComponent,
        SiteManageEntryComponent
    ],
    entryComponents: [
        SiteManageComponent,
        SiteManageEntryComponent
    ],
    exports: [
        SiteManageComponent,
        SiteManageEntryComponent
    ],
    providers: [SiteManageService]
})
export class SiteManageModule { }
