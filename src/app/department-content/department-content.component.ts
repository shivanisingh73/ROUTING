import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Router } from '@angular/router' ;

@Component({
  selector: 'app-department-content',
  template: `
    <p>
      Department List :
    </p>
    <ul>
    <li *ngFor="let department of departments">
    <span>{{department.list}} </span> {{department.name}}
    </li>
    
    </ul>
  `,
  styles: []
})
export class DepartmentContentComponent implements OnInit {

  departments = [
    {list : 1, name: 'Angular'} ,
    {list : 2, name: 'Node'} ,
    {list : 3, name: 'MongoDB'} ,
    {list : 4, name: 'Ruby'} ,
    {list : 5, name: 'Bootstrap'} ,
  ] ;

 constructor(
  private route: ActivatedRoute

 ) { } // to access route parameters , we add in constructor

  ngOnInit() {

    this.route.params.subscribe((res)=>{
      console.log(res);
      console.log(res.name);
    });
    // this.Router.navigate(['/departments/:list', this.departments.list]);
    /* this.route.paramMap // property  that give all parameters  in route ; type =Observable ;  has method called subscribes and can get value
    .subscribe(params => {
      console.log(params);
      const list = +params.get('list'); // +converts string in number
      console.log(list);
    }) ;*/
  }
  //onSelect(department) {
    //this.router.navigate(['/departments', department.list]);
  //}

}
