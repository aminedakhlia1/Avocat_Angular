import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ListUserComponent } from 'src/app/pages/user/list-user/list-user.component';
import { InfoUserComponent } from 'src/app/pages/user/info-user/info-user.component';
import { AddUserComponent } from 'src/app/pages/user/add-user/add-user.component';
import { UpdateUserComponent } from 'src/app/pages/user/update-user/update-user.component';
import { ListAffaireComponent } from 'src/app/pages/affaire/list-affaire/list-affaire.component';
import { AddAffaireComponent } from 'src/app/pages/affaire/add-affaire/add-affaire.component';
import { UpdateAffaireComponent } from 'src/app/pages/affaire/update-affaire/update-affaire.component';
import { ListTribunalComponent } from 'src/app/pages/tribunal/list-tribunal/list-tribunal.component';
import { AddTribunalComponent } from 'src/app/pages/tribunal/add-tribunal/add-tribunal.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'list-user',           component: ListUserComponent },
    { path: 'info-user/:id',           component: InfoUserComponent },
    { path: 'add-user',           component: AddUserComponent },
    { path: 'update-user',           component: UpdateUserComponent },
    { path: 'list-affaire',           component: ListAffaireComponent },
    { path: 'add-affaire',           component: AddAffaireComponent },
    { path: 'update-affaire/:idAffaire',           component: UpdateAffaireComponent },
    { path: 'list-tribunal',           component: ListTribunalComponent },
    { path: 'add-tribunal',           component: AddTribunalComponent }


];
