import { TodoService } from './../../service/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private name:string;
  private age:string;
  private email:string;
  private address:{
    street : string,
    city : string,
    province : string,
    postcode:string
  }
  private skills:string[];

  private todoList:Todo[];

  private  isEditable:boolean = false;

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.name = "Saksit Banluesab",
    this.age = "23",
    this.email = "saksit.ban@gmail.com",
    this.address = {
      street: "123/123",
      city: "Pakkred",
      province : "Nonthaburi",
      postcode : "11120"
    }
    this.skills = ["eating","Programming"];

    //Call service
    this.todoService.getTodoList().subscribe((response)=>{
      this.todoList = response;
    })
  }

  addSkill(skill){ 
    this.skills.unshift(skill);
    return false;
  }
  removeSkill(skill){
    this.skills.forEach((element,index) => {
      if(element == skill){
        this.skills.splice(index,1);
      }
    });
  }

  toggleEdit(){
    this.isEditable =! this.isEditable;
  }


}


interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}