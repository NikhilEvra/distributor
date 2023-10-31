import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatnersService {

  constructor(
    private http : HttpClient
  ) { }

  getpartnerById(id:any):Observable<any>{
    return this.http.get<any>(environment.apiurl + 'get_finance_partner_by_id.php?d_id=' + id)
  }
  candf_ptr_complaints_count_by_dealername(data:any):Observable<any>{
    const formData = new FormData();
    formData.append('cnf',data);
    return this.http.post<any>(environment.apiurl + 'cnf_ptr_wise_ticket_count.php' , formData)
  }
  candf_ptr_po_count_by_dealername(data:any):Observable<any>{
    const formData = new FormData();
    formData.append('cnf',data);
    return this.http.post<any>(environment.apiurl + 'cnf_ptr_wise_ticket_count.php' , formData)
  }

  candf_ptr_info(data:any):Observable<any>{
    const formData = new FormData();
    formData.append('cnf',data);
    return this.http.post<any>(environment.apiurl + 'cnf_partner_data.php',formData);
  }

}
