import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CoreModule, DndModule } from '@angular-cms/core';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFolder, faCubes } from '@fortawesome/free-solid-svg-icons';

import { SharedModule } from '../shared/shared.module';
import { BlockTreeComponent } from './block-tree.component';
import { BlockTreeService } from './block-tree.service';
import { AngularSplitModule } from '../shared/angular-split/module';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        CoreModule,
        SharedModule,
        RouterModule,
        AngularSplitModule,
        DndModule
    ],
    declarations: [
        BlockTreeComponent
    ],
    entryComponents: [
        BlockTreeComponent
    ],
    exports: [
        BlockTreeComponent
    ],
    providers: [BlockTreeService]
})
export class BlockModule {
    constructor(private library: FaIconLibrary) {
        library.addIcons(faFolder, faCubes);
    }
}
