import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';


import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ListUserComponent } from 'src/app/pages/user/list-user/list-user.component';
import { InfoUserComponent } from 'src/app/pages/user/info-user/info-user.component';
import { AddUserComponent } from 'src/app/pages/user/add-user/add-user.component';
import { UpdateUserComponent } from 'src/app/pages/user/update-user/update-user.component';
import { ListAffaireComponent } from 'src/app/pages/affaire/list-affaire/list-affaire.component';
import { AddAffaireComponent } from 'src/app/pages/affaire/add-affaire/add-affaire.component';
import { UpdateAffaireComponent } from 'src/app/pages/affaire/update-affaire/update-affaire.component';
import { ListTribunalComponent } from 'src/app/pages/tribunal/list-tribunal/list-tribunal.component';
import { AddTribunalComponent } from 'src/app/pages/tribunal/add-tribunal/add-tribunal.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    ListUserComponent,
    InfoUserComponent,
    AddUserComponent,
    UpdateUserComponent,
    ListAffaireComponent,
    AddAffaireComponent,
    UpdateAffaireComponent,
    ListTribunalComponent,
    AddTribunalComponent
    
  ]
})

export class AdminLayoutModule {}
