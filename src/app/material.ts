import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatInputModule,
  MatGridListModule,
  MatCardModule,
  MatSelectModule,
  MatButtonModule,
  MatCheckboxModule, MatSidenavModule, MatListModule
} from '@angular/material';

import { FlexLayoutModule } from "@angular/flex-layout";


import { MatRadioModule } from '@angular/material';

@NgModule(
  {
    imports:
    [
      MatSelectModule,
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatIconModule,
      MatMenuModule,
      MatInputModule,
      MatGridListModule,
      MatCardModule,
      MatFormFieldModule,
      MatDividerModule,
      FormsModule, MatSidenavModule, MatListModule, FlexLayoutModule, MatRadioModule
    ],
    exports:
    [
      MatSelectModule,
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatIconModule,
      MatMenuModule,
      MatInputModule,
      MatGridListModule,
      MatCardModule,
      MatFormFieldModule,
      MatDividerModule,
      FormsModule, MatSidenavModule, MatListModule, FlexLayoutModule, MatRadioModule
    ],
  }
)
export class MaterialModule { }