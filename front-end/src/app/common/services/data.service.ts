import { NotFoundError } from './../errors/not-found-error';
import { BadInput } from './../errors/bad-input';
import { AppError } from './../errors/app-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

@Injectable()
export class DataService {
    constructor(private url: string, private http: Http){

    }

     getAll(){
        return this.http.get(this.url)
        .map(x=>x.json())
        .catch(this.hanldeError);
      }
  
      add(post){
        return this.http.post(this.url,(JSON.stringify(post)))
        .catch(this.hanldeError);
      }
  
      update(post){
        return this.http.patch(this.url+"/"+post.id,JSON.stringify(post))
        .catch(this.hanldeError);
      }
  
      delete(id){
        return this.http.delete(this.url+"/"+id)
        .catch(this.hanldeError);
      }

      private hanldeError (error: Response){
            if(error.status == 400){
                return Observable.throw(new BadInput(error.json()));
            }

            if(error.status == 404){
                return Observable.throw(new NotFoundError(error));
            }

            return Observable.throw(new AppError(error));
      }
}   