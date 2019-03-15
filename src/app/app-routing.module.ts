// File contain routing module  where we configure different routes
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component'; // import them
import { HomeComponentComponent } from './home-component/home-component.component';
// import { EmployeeContentComponent } from './employee-content/employee-content.component';
import { DepartmentContentComponent } from './department-content/department-content.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Configure the module
const routes: Routes = [
 {
   path: '', // default route
   component: HomeComponentComponent ,
 } ,
 {
  path: 'departments/:name', // added a parameter using colon ; placed dynamically at one time
  component: DepartmentContentComponent ,
 } ,
 {
   path: 'departments',
   component: DepartmentListComponent ,
 } , // navigate by path  and  display by component
 {
   path: 'employees',
   component: EmployeeListComponent ,
 } ,
 {
  path: '**', // catches any url (wild card)
  component: NotFoundComponent ,
 }
 // object contains a path which is reflected in a URL  and the component to be rendered to the corresponding path 
]; // Here we define all possible routes and each route is nothing but a object

@NgModule({
  imports: [RouterModule.forRoot(routes)], // static method of router module class define to root route  of navigation
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent , DepartmentContentComponent, EmployeeListComponent , NotFoundComponent];
