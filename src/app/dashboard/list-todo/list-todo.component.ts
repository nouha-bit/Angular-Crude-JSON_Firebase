import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  pFormUpdate = new FormGroup({
    nom: new FormControl('',[Validators.required, Validators.minLength(5)]),
    desc: new FormControl('',[Validators.required, Validators.minLength(5)])
  });
todo:any;
idupdate:any;
  constructor(private tdo:DataService) { }

  ngOnInit() {
    this.tdo.listTodo()
    .subscribe((data:any) => {
      this.todo = data;
    });
  }
  getall(){
    this.tdo.listTodo()
    .subscribe((data:any) => {
      this.todo = data;
    });
  }
  
  update(ob){
     this.idupdate = ob.id;
 this.pFormUpdate.controls.nom.setValue(ob.nom);
 this.pFormUpdate.controls.desc.setValue(ob.desc);

  }
  
  
validate(){


this.tdo.updateTodo({id:this.idupdate,nom:this.pFormUpdate.controls.nom.value,desc:this.pFormUpdate.controls.desc.value})
.subscribe(data =>
  console.log(data));
 }
delete(y){
this.tdo.deleteTodo(y).subscribe(data=>
  console.log('delete'));

}
}
