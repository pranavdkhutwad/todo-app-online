import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Task } from "../interfaces/todo.interface";
import { lastValueFrom } from "rxjs";

@Injectable()
export class TodoService {
    constructor(private http: HttpClient) {}

    createTask(task: Task) {
        return lastValueFrom(this.http.post('https://todo-app-a86ef-default-rtdb.firebaseio.com/todo.json', task));
    }

    fetchTasks() {
        return lastValueFrom(this.http.get('https://todo-app-a86ef-default-rtdb.firebaseio.com/todo.json'));
    }

    deleteTask(id: string) {
        return lastValueFrom(this.http.delete(`https://todo-app-a86ef-default-rtdb.firebaseio.com/todo/${id}.json`));
    }

    getBorderClass(priority: number | null) {
        switch(priority) {
            case 1: {
                return 'border-danger';
            }
            case 2: {
                return 'border-warning';
            }
            case 3: {
                return 'border-info';
            }
            default: {
                return null;
            }
        }
    }

    transformObjectToList(obj: any) {
        const tempList = [];
        for (let key in obj) {
            tempList.push({ ...obj[key], id: key });
        }

        return tempList;
    }

    getListByCategories(tasks: Task[]) {
        const highPriorities = tasks.filter((task: Task) => task.priority === 1);
        const mediumPriorities = tasks.filter((task: Task) => task.priority === 2);
        const lowPriorities = tasks.filter((task: Task) => task.priority === 3);

        return {
            highPriorities,
            mediumPriorities,
            lowPriorities
        };
    }
}
