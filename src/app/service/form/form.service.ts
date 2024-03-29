import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private api : HttpClient,
  ) { }

  // getattendancedata():Observable<any>{
  //   return this.http.get<any>(environment.apiurl + 'attendance.php');
  // }

  feedbackformdata(name:any, location: any, designation: any, no_of_vehicles: any, duration:any, any_other_vehicle: any, features:any, improvement: any, p_remark: any,
    t_remark:any,s_remark:any,spare_part_remark:any,f_remark:any,rating:any):Observable<any>{
    const formData = new FormData();
    formData.append('name', name);
    formData.append('location', location);
    formData.append('designation', designation);
    formData.append('no_of_vehicles' , no_of_vehicles);
    formData.append('duration', duration);
    formData.append('any_other_vehicle', any_other_vehicle);
    formData.append('features', features);
    formData.append('improvement',improvement);
    formData.append('p_remark',p_remark);
    formData.append('t_remark',t_remark);
    formData.append('s_remark',s_remark);
    formData.append('spare_part_remark',spare_part_remark);
    formData.append('f_remark',f_remark);
    formData.append('rating',rating);

    return this.api.post<any>(environment.apiurl + 'feedbackform.php',  formData);
  }

  complaintsformdata(name:any, location:any, designation: any, topic : any, remark: any, filename:any,file: any):Observable<any>{
    const formData = new FormData();
    formData.append('name', name);
    formData.append('location', location);
    formData.append('designation', designation);
    formData.append('topic', topic);
    formData.append('remark', remark);
    formData.append('photo', filename);
    formData.append('file', file);
    return this.api.post<any>(environment.apiurl + 'add_complaints.php',  formData);
  }

  //  uploadImg(formData: any ) {
  //   return this.api.post('http://localhost/api/file.php',  formData);
  // }
  
  uploadImg(formData: any ) {
    return this.api.post(environment.apiurl + 'file.php',  formData)
  }

  updatePassformdata(o_pass: any,n_pass: any, r_n_pass:any):Observable<any>{
    const formData = new FormData();
    formData.append('o_pass', o_pass);
    formData.append('n_pass', n_pass);
    formData.append('r_n_pass', r_n_pass);

    return this.api.post<any>(environment.apiurl + 'update_pass.php',  formData);
  }
  
  getOpenComplaints(id : any):Observable<any>{
    return this.api.get<any>(environment.apiurl + 'open_complaints.php?d_id=' + id);
  }

  getClosedComplaints(id: any):Observable<any>{
    return this.api.get<any>(environment.apiurl + 'closed_complaint.php?d_id=' + id);
  }
  getComplaints(id:any):Observable<any>{
    return this.api.get<any>(environment.apiurl + 'getallcomplaint.php?d_id=' + id);
  }

  getComplaintById(id : any):Observable<any>{
    return this.api.get<any>(environment.apiurl + 'getcomplaintbyid.php?c_id=' + id);
  }

  addsaleformdata(name:any, c_name:any, c_mobile: any, location : any, model_name: any,color:any, chassis:any,amount : any,discount:any, a_mobile:any, test:any,battery:any,motor:any,charger:any,controller:any,
    city:any,state:any,pan:any,dist:any,pincode:any,email:any,battery_type:any):Observable<any>{
    const formData = new FormData();
    formData.append('name', name);
    formData.append('a_mobile', a_mobile);
    formData.append('c_name', c_name);
    formData.append('c_mobile', c_mobile);
    formData.append('location', location);
    formData.append('model_name', model_name);
    formData.append('color',color);
    formData.append('chassis', chassis);
    formData.append('amount' , amount);
    formData.append('discount',discount);
    formData.append('test' , test);
    formData.append('battery',battery);
    formData.append('motor',motor);
    formData.append('charger',charger);
    formData.append('controller',controller);
    formData.append('city',city);
    formData.append('state',state);
    formData.append('pan',pan);
    formData.append('dist',dist);
    formData.append('pincode',pincode);
    formData.append('email',email);
    formData.append('battery_type',battery_type);

    return this.api.post<any>(environment.apiurl + 'customer_sale.php',  formData);
  }

  getSales(id:any):Observable<any>{
    return this.api.get<any>(environment.apiurl + 'getallsale.php?d_id=' + id);
  }

  postPodata(name : any,model_name: any, unit_price: any,amount :any ,quantity:any):Observable<any>{
    const formData = new FormData();
    formData.append('name', name);
    formData.append('model', model_name);
    formData.append('unit_price', unit_price);
    formData.append('amount', amount);
    formData.append('quantity', quantity);
    return this.api.post<any>(environment.apiurl + 'add_po.php', formData);
  }

  getInventory(id : any):Observable<any>{
    return this.api.get<any>(environment.apiurl + 'inventory_count.php?d_id=' + id);
  }

  getCart(id : any):Observable<any>{
    return this.api.get<any>(environment.apiurl + 'cart_count.php?d_id=' + id);
  }

  getAllCartData(id : any):Observable<any>{
    return this.api.get<any>(environment.apiurl + 'get_cart.php?d_id=' + id);
  }

  getdashdata(id:any):Observable<any>{
    return this.api.get<any>(environment.apiurl + 'dashboard_data.php?d_id=' + id);
  }

  updatecomplaintStatus(id:any,d_id:any):Observable<any>{
    return this.api.get<any>(environment.apiurl + 'reopencomplaint.php?c_id=' + id + '&d_id='+ d_id) ;
  }
  
  getAllProduct():Observable<any>{
    return this.api.get<any>(environment.apiurl + 'get_all_products.php');
  }

  getAllProduct_with_inv(d_id:any):Observable<any>{
    const formData = new FormData();
    formData.append('d_id', d_id);
    return this.api.post<any>(environment.apiurl + 'dealer_model_inv.php' , formData);
  }
  getVarient(model : any,id:any):Observable<any>{
    const formData = new FormData();
    formData.append('model', model);
    formData.append('id', id);
    return this.api.post<any>(environment.apiurl + 'dealer_varient_check.php', formData);
  
  }

  getVarientscount(model : any, d_id : any):Observable<any>{
    const formData = new FormData();
    formData.append('model', model);
   
    formData.append('d_id',d_id);
    return this.api.post<any>(environment.apiurl + 'dealer_color_inv.php', formData);
  }

  check(model:any, color:any, id:any):Observable<any>{
    const formData = new FormData();
    formData.append('model', model);
    formData.append('color' ,color);
    formData.append('d_id',id);
    return this.api.post<any>(environment.apiurl + 'checkinventory.php', formData)
    // return this.api.get<any>(environment.apiurl + 'checkinventory.php?model='+ model + '&color=' + color + '&d_id=' + id)
  }

  getSaleBydealerId(id:any):Observable<any>{
    return this.api.get<any>(environment.apiurl + 'get_sale_by_dealer.php?d_id=' + id);
  }

  getSaleById(id:any,d_id:any):Observable<any>{
    return this.api.get<any>(environment.apiurl + 'get_sale_by_id.php?id=' + id +'&d_id=' + d_id);
  }

  send_pay(dealerid:any,remarks:any,trans_detail:any,po_id:any):Observable<any>{
    const formData = new FormData();
    formData.append('dealerid', dealerid);
    formData.append('remarks' ,remarks);
    formData.append('trans_details', trans_detail);
    formData.append('po_id',po_id);
    return this.api.post<any>(environment.apiurl + 'dealer_pay_details.php', formData)
  }

  getpodashcount(id:any):Observable<any>{
    return this.api.get<any>(environment.apiurl + 'po_dash_data.php?d_id=' + id);
  }

  profiledata(id:any):Observable<any>{
    return this.api.get<any>(environment.apiurl + 'dealer_profile.php?u_id=' + id);
  }

  get_customer_sale_price(model:any,color:any,battery_type:any):Observable<any>{
    const formData = new FormData();
    formData.append('model', model);
    formData.append('color' ,color);
    formData.append('battery' ,battery_type);


    return this.api.post<any>(environment.apiurl + 'get_customer_sales_price.php', formData)
  }


  requestcallformdata(data:any):Observable<any>{
    const formData = new FormData();
    formData.append('d_id', data.name);
    formData.append('location', data.location);
    formData.append('designation', data.designation);
    formData.append('topic',data.topic);
    formData.append('remark', data.remark);
    formData.append('dealership', data.dealership_name);


    return this.api.post<any>(environment.apiurl + 'add_call_request.php',  formData);
  }

  mobile_van_date(data:any):Observable<any>{
    const formData = new FormData();
    formData.append('d_id', data.name);
    formData.append('location', data.location);
    formData.append('dealership_name', data.dealership_name);
    formData.append('date', data.date);
    formData.append('endingdate', data.endingdate);


    return this.api.post<any>(environment.apiurl + 'add_mobile_van_date.php',  formData);
  }

  advertisement_name(){
    return this.api.get<any>(environment.apiurl + 'get_dealer_ads.php' );
  }
  adv_select(data:any):Observable<any>{
    const formData = new FormData();
    formData.append('d_id', data.name);
    formData.append('advertisement', data.advertisement);
  
    return this.api.post<any>(environment.apiurl + 'update_dealer_ads_type.php',  formData);
  }

  advertisement_dashdash_data(d_id:any):Observable<any>{
    const formData = new FormData();
    formData.append('d_id', d_id);

  
    return this.api.post<any>(environment.apiurl + 'advertisement_module_dash_data.php',  formData);
  }

  adv_reimbursement(data:any):Observable<any>{
    const formData = new FormData();
    formData.append('d_id', data.name);
    formData.append('advertisement', data.advertisement);
    formData.append('amount', data.amount);
    formData.append('file', data.file);

  
    return this.api.post<any>(environment.apiurl + 'dealer_reimbursement.php',  formData);
  }

  add_signature(data:any,d_id:any):Observable<any>{
    const formData = new FormData();
    formData.append('file', data.signature);
    formData.append('d_id', d_id); 

    return this.api.post<any>(environment.apiurl + 'dealer_add_signature.php',  formData);

  }
  candf_dash_data(data:any):Observable<any>{
    const formData = new FormData();
    formData.append('cnf',data);
    return this.api.post<any>(environment.apiurl + 'candf_dash_data.php', formData);
  }

  candf_dash_count(data:any):Observable<any>{
    const formData = new FormData();
    formData.append('cnf',data);
    return this.api.post<any>(environment.apiurl + 'get_cnf_sales_count.php', formData);
  }

  get_cnf_partner_inv(data:any):Observable<any>{
    const formData = new FormData();
    formData.append('cnf',data);
    return this.api.post<any>(environment.apiurl + 'get_partners_list_with_inv.php', formData);
  }

  view_cnf_partner_inv(data:any):Observable<any>{
    
    return this.api.get<any>(environment.apiurl + 'inventory_count.php?d_id='+ data);
  }

  view_cnf_partner_sale(data:any):Observable<any>{
    const formData = new FormData();
    formData.append('cnf',data);
    return this.api.post<any>(environment.apiurl + 'get_partners_list_sales.php', formData);
  }

  candf_ptr_ticket_count(data:any):Observable<any>{
    const formData = new FormData();
    formData.append('cnf',data);
    return this.api.post<any>(environment.apiurl + 'cnf_get_ptr_complaints_count.php', formData);
  }

  candf_ptr_po_count(data:any):Observable<any>{
    const formData = new FormData();
    formData.append('cnf',data);
    return this.api.post<any>(environment.apiurl + 'cnf_get_ptr_po_count.php', formData);
  }

  candf_ptr_inv_count(data:any):Observable<any>{
    const formData = new FormData();
    formData.append('cnf',data);
    return this.api.post<any>(environment.apiurl + 'cnf_partner_inv_count.php', formData);
  }

}
