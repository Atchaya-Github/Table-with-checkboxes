import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'multiple_data_transmission';
  data:Model[]=[]
  public arr:any[]=[]
  public ar!:Model;
  public total_array!:any[]
  constructor(private http:HttpClient){}
  ngOnInit(){
    this.get_data();
  }
  get_data(){
    return this.http.get<Model[]>("http://localhost:3000/data").subscribe((res:Model[]) =>{
     this.data=res;
    })
  }

check(event:any){
  if(event.target.checked) 
  console.log(event.target.value);
  this.ar= JSON.parse(event.target.value);
  this.arr.push(this.ar)
}
submit(){
  this.total_array=this.arr
  console.log(this.total_array);
}

}
