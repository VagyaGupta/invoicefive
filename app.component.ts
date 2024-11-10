
import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
;
import { TrynewComponent } from "../src/app/trynew/trynew.component";
import { LatestComponent } from './latest/latest.component';
import { TaxInvoiceComponent } from './tax-invoice/tax-invoice.component';
import { NewComponent } from "../src/app/new/new.component";

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [TrynewComponent, TaxInvoiceComponent, NewComponent],
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.scss']  
})
export class AppComponent {
  title = 'Invoice';
}
