import { Component } from '@angular/core';

@Component({
    selector: 'sku-form',
    template: `
        <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
            <div class="form-group">
                <label for="skuInput">SKU</label>
                <input type="text" class="form-control" id="skuInput" name="sku" ngModel>
            </div>
            <div class="form-group">
                <label for="prodInput">Product</label>
                <input type="text" class="form-control" id="prodInput" name="product" ngModel>
            </div>

            <button type="submit" class="btn btn-success">Submit</button>
        </form>
    `
})

export class SkuFormComponent {
    
    onSubmit(formData: any): void {
        console.log('formData: ', formData);
    }

}