import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormBuilder, FormGroup, ReactiveFormsModule,FormControl,FormArray, Validators } from '@angular/forms';
import { LatestService } from '../../../app/latest.service';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})
export class NewComponent {

      
        invoiceForm: FormGroup;
        currentStep: number = 1;
      
        constructor(private latest:LatestService, private fb: FormBuilder) {
          this.invoiceForm = new FormGroup({
            invoiceNumber: new FormControl('', [Validators.required,this.positive,Validators.pattern('^[0-9]+$')]),
            invoiceDate: new FormControl('', [Validators.required]),
            paymentDueDate: new FormControl('', [Validators.required]),
            referenceNumber: new FormControl('',[Validators.pattern('^[0-9\-]+$'),Validators.required]),
            referenceDate: new FormControl(),
            deliveryDate: new FormControl(),
            shipTo: new FormControl(),
            invoiceAmount: new FormControl(),
            gst: new FormControl('', [Validators.required,this.positive]),
            sgst: new FormControl(),
            cgst: new FormControl(),
            igst: new FormControl(),
            
            items: this.fb.array([this.createItem()])
          });
        }
      
        get items(): FormArray {
          return this.invoiceForm.get('items') as FormArray;
        }
      
        
        createItem(): FormGroup {
          const itemGroup = this.fb.group({
            name: ['', Validators.required],
            quantity: [0, [Validators.required, Validators.min(1)]],
            rate: ['', Validators.required],
            amount: [0, [Validators.required, Validators.min(1)]],
            total: [{ value: 0, disabled: true }]
          });
      
        itemGroup.get('quantity')?.valueChanges.subscribe(() => {
          this.updateAmountAndTotal(itemGroup);
        });
      
        itemGroup.get('rate')?.valueChanges.subscribe(() => {
          this.updateAmountAndTotal(itemGroup);
        });
      
        return itemGroup;
      }
      
      
      updateAmountAndTotal(itemGroup: FormGroup): void {
        const quantity = itemGroup.get('quantity')?.value || 0;
        const rate = itemGroup.get('rate')?.value || 0;
      
       
        const amount = quantity * rate;
        itemGroup.get('amount')?.setValue(amount);
      
        
        const total = amount; 
        itemGroup.get('total')?.setValue(total);
      }
      
      goBack(): void {
        if (this.currentStep > 1) {
          this.currentStep--;
        }
      }
    
      goForward(): void {
        if (this.currentStep < 4) {
          this.currentStep++;
        }
      }
      
      
        
        addItem(): void {
          this.items.push(this.createItem());
        }
      
        
        removeItem(index: number): void {
          this.items.removeAt(index);
        }
      
      
      
        positive(control: FormControl): { [key: string]: boolean } | null {
        if (control.value && control.value <= 0) {
          return { positive: true };
        }
        return null; 
      }
      
        onSubmit(): void {
          if (this.invoiceForm.valid) {
            const invoiceData = this.invoiceForm.value;
            console.log('Submitting invoice:', invoiceData);
      
            this.latest.addInvoice(invoiceData).subscribe((res) => {
              console.log('Invoice saved successfully:', res);
              alert("Invoice saved successfully")
            });
          } else {
            console.log("Form is invalid");
          }
        }}
       


