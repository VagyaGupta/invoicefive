import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LatestService {

  private apiUrl = 'http://localhost:3000/invoices'; 
  private companyApiUrl='http://localhost:3000/companyDetails';
  private vendorApiUrl='http://localhost:3000/buyerDetails';
  private bankApiUrl='http://localhost:3000/bankDetails';

  constructor(private http: HttpClient) {}

  
  addInvoice(invoice: any): Observable<any> {
    return this.http.post(this.apiUrl, invoice);
  }

  getCompanyDetails(): Observable<any> {
    return this.http.get<any>(this.companyApiUrl);
  }


  getVendorDetails(): Observable<any> {
    return this.http.get<any>(this.vendorApiUrl);
  }

  getInvoiceDetails(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  
  getbankDetails(): Observable<any> {
    return this.http.get<any>(this.bankApiUrl);
  }



}




