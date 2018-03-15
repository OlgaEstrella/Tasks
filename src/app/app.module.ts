import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TableModule }  from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

import { TasksService } from './tasks.service';
import { HttpModule } from '@angular/http';


 const appRoutes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full'},
  { path: 'tasks', component: TasksListComponent},
  /*/{ path: 'tasks/:token', component: TasksComponent},
  //{path: 'details/:id', component: DetailsComponent},
  {path: 'tasks/details/:id', component: DetailsComponent},
  {path: 'taskedit', component: DetailsEditComponent},
  {path: 'edit/:id', component: DetailsEditComponent},
  {path: 'new', component: DetailsEditComponent},/*/

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TableModule,
    ToolbarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
