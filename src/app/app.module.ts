import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import {HeaderComponent} from './header/header.component';
import { FarmComponent } from './farm/farm.component';
import { CropComponent } from './crop/crop.component';
import { PlantationComponent } from './plantation/plantation.component';
import { InputComponent } from './input/input.component';
import { TasksComponent } from './tasks/tasks.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { InputscheduleComponent } from './inputschedule/inputschedule.component';
import { AddFarmComponent } from './farm/add-farm/add-farm.component';
import { UpdateFarmComponent } from './farm/update-farm/update-farm.component';
import { ViewFarmsComponent } from './farm/view-farms/view-farms.component';
import { AddCropComponent } from './crop/add-crop/add-crop.component';
import { ModifyCropComponent } from './crop/modify-crop/modify-crop.component';
import { ViewCropsComponent } from './crop/view-crops/view-crops.component';
import { AddPlantationComponent } from './plantation/add-plantation/add-plantation.component';
import { ModifyPlantationComponent } from './plantation/modify-plantation/modify-plantation.component';
import { ViewPlantationsComponent } from './plantation/view-plantations/view-plantations.component';
import { AddInputComponent } from './input/add-input/add-input.component';
import { ViewInputsComponent } from './input/view-inputs/view-inputs.component';
import { EditInputsComponent } from './input/edit-inputs/edit-inputs.component';
import { AddTasksComponent } from './tasks/add-tasks/add-tasks.component';
import { ViewTasksComponent } from './tasks/view-tasks/view-tasks.component';
import { EditTasksComponent } from './tasks/edit-tasks/edit-tasks.component';
import { AddExpensesComponent } from './expenses/add-expenses/add-expenses.component';
import { ViewExpensesComponent } from './expenses/view-expenses/view-expenses.component';
import { ModifyExpensesComponent } from './expenses/modify-expenses/modify-expenses.component';
import { CropInputScheduleComponent } from './inputschedule/crop-input-schedule/crop-input-schedule.component';
import { PageNotFoundComponent } from './not-found.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    FarmComponent,
    CropComponent,
    PlantationComponent,
    InputComponent,
    TasksComponent,
    ExpensesComponent,
    InputscheduleComponent,
    AddFarmComponent,
    UpdateFarmComponent,
    ViewFarmsComponent,
    AddCropComponent,
    ModifyCropComponent,
    ViewCropsComponent,
    AddPlantationComponent,
    ModifyPlantationComponent,
    ViewPlantationsComponent,
    AddInputComponent,
    ViewInputsComponent,
    EditInputsComponent,
    AddTasksComponent,
    ViewTasksComponent,
    EditTasksComponent,
    AddExpensesComponent,
    ViewExpensesComponent,
    ModifyExpensesComponent,
    CropInputScheduleComponent,
    PageNotFoundComponent,
    LoginComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
