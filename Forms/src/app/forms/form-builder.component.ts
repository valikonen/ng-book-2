import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
    selector: 'form-builder',
    template: `
        <form [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)">
            <div class="form-group">
                <label for="skuInput">SKU</label>
                <input type="text" class="form-control" id="skuInput" name="sku" [formControl]="myForm.controls['sku']">
                
                <div *ngIf="!sku.valid">SKU is invalid</div>
                <div *ngIf="myForm.hasError('required', 'sku')">SKU is required</div>

            </div>
            <div class="form-group">
                <label for="prodInput">Product</label>
                <input type="text" class="form-control" id="prodInput" name="product" [formControl]="myForm.controls['product']">
            </div>

            <button type="submit" class="btn btn-success">Submit</button>
        </form>
    `
})

export class FormBuilderComponent {

    myForm: FormGroup;
    sku: AbstractControl;
    
    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'sku': ['ABC123', Validators.required],
            product: ['']    
        });

        this.sku = this.myForm.controls['sku'];
    }
    onSubmit(formData: any): void {
        console.log('formData: ', formData);
    }

}