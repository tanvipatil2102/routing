import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
    declarations : [],
    imports : [MatButtonModule,
        MatListModule,
        MatDialogModule
    ],
    exports : [MatButtonModule,
        MatListModule,
        MatDialogModule
    ]
})
export class MaterialModule {

}