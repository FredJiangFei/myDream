import { ErrorHandler } from '@angular/core' 

export class AppErrorHandler implements ErrorHandler{
    handleError(error){
        console.log('123----'+error);
    }
}
