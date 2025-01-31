import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
    declarations : [],
    imports : [MatButtonModule,
        MatListModule,
        MatDialogModule,
        MatSnackBarModule
    ],
    exports : [MatButtonModule,
        MatListModule,
        MatDialogModule,
        MatSnackBarModule
    ]
})
export class MaterialModule {

}