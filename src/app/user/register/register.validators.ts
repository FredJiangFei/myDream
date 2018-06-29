import { AbstractControl,ValidationErrors } from '@angular/forms';


export class UsernameValidators{
    static cannotContainNumber(control: AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf('1')>=0){
            return {
                cannotContainNumber:true
            }
        }

        return null;
    }

    static shouldBeUnique (control: AbstractControl): Promise<ValidationErrors|null>{
        return new Promise((resolve,reject) => {
                setTimeout(() => {
                    if(control.value === 'fredjiang'){
                        resolve({shouldBeUnique:true});
                    }else{
                        resolve(null);
                    }
                },2000);
        });
    } 
}

export class PasswordValidators{
    static shouldEqualToPassowrd(control: AbstractControl): ValidationErrors | null{
        let password = control.get('password').value; 
        let confirmPassword = control.get('repeatPassword').value; 
        if(password != confirmPassword){
            return {
                passowrdNotEqual: true
            }
        }

        return null;
    }
}