import { Component } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-validators',
  template: ''
})
export class CustomValidatorsComponent extends Validators {
  static equalInputs(input1: string, input2: string): ValidatorFn{
    return (group: AbstractControl): ValidationErrors | null =>{
      const primerControl = group.get(input1);
      const segundoControl = group.get(input2);
      return primerControl?.value === segundoControl?.value ? null : { equalInputs: true };
    }
  }
}
