import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LatestService } from '../latest.service';


@Component({
  selector: 'app-tax-invoice',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './tax-invoice.component.html',
  styleUrl: './tax-invoice.component.scss'
})
export class TaxInvoiceComponent implements OnInit{



companyObj:any={
"companyName":'',
"companyAddress":'',
"iec":'',
"udyamRegNo":'',
"gstin":'',
"email":'',
"contact":'',
"logo":"",
"companyPAN":''
}




vendorObj:any={
  "companyName":'',
  "companyAddress":'',
  "iec":'',
  "udyamRegNo":'',
  "gstin":'',
  "email":'',
  "contact":'',
  "logo":"",
  "companyPAN":''
  }
  

  bankObj:any={
    
    "id": 1,
    "bankName": "State Bank of India",
    "bankAccountNumber": "1234567890123456",
    "ifscCode": "SBIN0001234",
    "accountHolderName": "John Doe"
  
}







  invoice: any[] = [];


// invoice:any= {
//   "id": "",
//   "invoiceNumber": "",
//   "invoiceDate": "",
//   "paymentDueDate": "",
//   "referenceNumber": "",
//   "referenceDate": "",
//   "deliveryDate": "",
//   "shipTo": "",
//   "gst": "",
//   "sgst": "",
//   "cgst": "",
//   "igst": "",
//   "invoiceAmount": "",
//   "items": [
//     {
//       "name": "",
//       "hsn": "",
//       "gst": "",
//       "quantity": "",
//       "rate": "",
//       "amount": "",
//       "total": ""
//     }
//   ]
// }


constructor(private latest:LatestService) { }
    
ngOnInit(): void {
  
  this.latest.getCompanyDetails().subscribe(data => {
    this.companyObj = data;  
    console.log(this.companyObj);
  }, error => {
    console.error('Error fetching company data:', error);
  });

  this.latest.getVendorDetails().subscribe(data => {
    this.vendorObj = data;  
    console.log(this.vendorObj);
  }, error => {
    console.error('Error fetching vendor data:', error);
  });

  this.latest.getInvoiceDetails().subscribe(data => {
    this.invoice = data;  
   
  }, error => {
    console.error('Error fetching vendor data:', error);
  });

  this.latest.getbankDetails().subscribe(data => {
    this.bankObj = data;  
   
  }, error => {
    console.error('Error fetching vendor data:', error);
  });


}
}