import { Pipe, PipeTransform } from '@angular/core';

interface Todo {
  task: string;
  completed: boolean;
}
@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {
  transform(arr: Todo[], filter: string): Todo[] {
    let displayedObj: Todo[] = [];
    if(filter){
      for(let obj of arr){
        if(obj.task.toLowerCase().includes(filter.toLowerCase())){
          displayedObj.push(obj);
        }
      }
    }else{
      displayedObj = arr;
    }
    return displayedObj;
  }


}
