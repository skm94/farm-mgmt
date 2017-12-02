import {NgModule} from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {HeaderComponent} from './header/header.component';
import { FarmComponent } from './farm/farm.component';
import {PageNotFoundComponent} from './not-found.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AddFarmComponent } from './farm/add-farm/add-farm.component';
import { UpdateFarmComponent } from './farm/update-farm/update-farm.component';
import { ViewFarmsComponent } from './farm/view-farms/view-farms.component';
import { AddCropComponent } from './crop/add-crop/add-crop.component';
import { CropComponent } from './crop/crop.component';
import { ModifyCropComponent } from './crop/modify-crop/modify-crop.component';
import { ViewCropsComponent } from './crop/view-crops/view-crops.component';
import { PlantationComponent } from './plantation/plantation.component';
import { AddPlantationComponent } from './plantation/add-plantation/add-plantation.component';
import { ModifyPlantationComponent } from './plantation/modify-plantation/modify-plantation.component';
import { ViewPlantationsComponent } from './plantation/view-plantations/view-plantations.component';
import { InputComponent } from './input/input.component';
import { AddInputComponent } from './input/add-input/add-input.component';
import { ViewInputsComponent } from './input/view-inputs/view-inputs.component';
import { EditInputsComponent } from './input/edit-inputs/edit-inputs.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTasksComponent } from './tasks/add-tasks/add-tasks.component';
import { ViewTasksComponent } from './tasks/view-tasks/view-tasks.component';
import { EditTasksComponent } from './tasks/edit-tasks/edit-tasks.component';
const appRoutes: Routes=[
    {path:'home',component:HomeComponent},
    {path:'user',component:UserComponent},
    {path:'farm',component:FarmComponent},
    {path:'addFarm',component:AddFarmComponent},
    {path:'updateFarm',component:UpdateFarmComponent},
    {path:'viewFarm',component:ViewFarmsComponent},
    {path:'crop',component:CropComponent},
    {path:'addCrop',component:AddCropComponent},
    {path:'modifyCrop',component:ModifyCropComponent},
    {path:'viewCrop',component:ViewCropsComponent},
    {path:'plantation',component:PlantationComponent},
    {path:'addPlantation',component:AddPlantationComponent},
    {path:'modifyPlantation',component:ModifyPlantationComponent},
    {path:'viewPlantations',component:ViewPlantationsComponent},
    {path:'input',component:InputComponent},
    {path:'addInput',component:AddInputComponent},
    {path:'viewInput',component:ViewInputsComponent},
    {path:'editInput',component:EditInputsComponent},
    {path:'task',component:TasksComponent},
    {path:'addTask',component:AddTasksComponent},
    {path:'viewTask',component:ViewTasksComponent},
    {path:'editTask',component:EditTasksComponent},
    { path:'register', component:RegisterComponent },
    { path:'login',component:LoginComponent},
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
     
];
@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}