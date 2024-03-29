import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'signup',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'dietplan',
    loadChildren: () => import('./pages/dietplan/dietplan.module').then( m => m.DietplanPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('./pages/inventory/inventory.module').then( m => m.InventoryPageModule)
  },
  {
    path: 'complaints',
    loadChildren: () => import('./pages/complaints/complaints.module').then( m => m.ComplaintsPageModule)
  },
  {
    path: 'sales',
    loadChildren: () => import('./pages/sales/sales.module').then( m => m.SalesPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./pages/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'addcomplaints',
    loadChildren: () => import('./pages/addcomplaints/addcomplaints.module').then( m => m.AddcomplaintsPageModule)
  },
  {
    path: 'opencomplaints',
    loadChildren: () => import('./pages/opencomplaints/opencomplaints.module').then( m => m.OpencomplaintsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'saleform',
    loadChildren: () => import('./pages/saleform/saleform.module').then( m => m.SaleformPageModule)
  },
  {
    path: 'po',
    loadChildren: () => import('./pages/po/po.module').then( m => m.PoPageModule)
  },
  {
    path: 'poinvoice',
    loadChildren: () => import('./pages/poinvoice/poinvoice.module').then( m => m.PoinvoicePageModule)
  },
  {
    path: 'closedcomplaint',
    loadChildren: () => import('./pages/closedcomplaint/closedcomplaint.module').then( m => m.ClosedcomplaintPageModule)
  },
  {
    path: 'viewcomplaint',
    loadChildren: () => import('./pages/viewcomplaint/viewcomplaint.module').then( m => m.ViewcomplaintPageModule)
  },
  {
    path: 'cart1',
    loadChildren: () => import('./pages/cart/cart1/cart1.module').then( m => m.Cart1PageModule)
  },
  {
    path: 'cartview',
    loadChildren: () => import('./pages/cart/cartview/cartview.module').then( m => m.CartviewPageModule)
  },
  {
    path: 'varientinventory',
    loadChildren: () => import('./pages/varientinventory/varientinventory.module').then( m => m.VarientinventoryPageModule)
  },
  {
    path: 'repair',
    loadChildren: () => import('./pages/replace/repair/repair.module').then( m => m.RepairPageModule)
  },
  {
    path: 'salerecord',
    loadChildren: () => import('./sales/salerecord/salerecord.module').then( m => m.SalerecordPageModule)
  },
  {
    path: 'replaceitems',
    loadChildren: () => import('./pages/replace/replaceitems/replaceitems.module').then( m => m.ReplaceitemsPageModule)
  },
  {
    path: 'viewpo',
    loadChildren: () => import('./pages/viewpo/viewpo.module').then( m => m.ViewpoPageModule)
  },
  {
    path: 'viewpobyid',
    loadChildren: () => import('./pages/viewpobyid/viewpobyid.module').then( m => m.ViewpobyidPageModule)
  },
  {
    path: 'spinner',
    loadChildren: () => import('./spinner/spinner.module').then( m => m.SpinnerPageModule)
  },
  {
    path: 'interceptor',
    loadChildren: () => import('./interceptor/interceptor.module').then( m => m.InterceptorPageModule)
  },
  {
    path: 'ad-dash',
    loadChildren: () => import('./advertisement/ad-dash/ad-dash.module').then( m => m.AdDashPageModule)
  },
  {
    path: 'requestcallback',
    loadChildren: () => import('./pages/requestcallback/requestcallback.module').then( m => m.RequestcallbackPageModule)
  },
  {
    path: 'insurance',
    loadChildren: () => import('./pages/insurance/insurance.module').then( m => m.InsurancePageModule)
  },
  {
    path: 'finance',
    loadChildren: () => import('./pages/finance/finance.module').then( m => m.FinancePageModule)
  },
  {
    path: 'sparepart-catalog',
    loadChildren: () => import('./pages/sparepart-catalog/sparepart-catalog.module').then( m => m.SparepartCatalogPageModule)
  },
  {
    path: 'uploadsignature',
    loadChildren: () => import('./pages/uploadsignature/uploadsignature.module').then( m => m.UploadsignaturePageModule)
  },
  {
    path: 'patnerinv',
    loadChildren: () => import('./pages/patnerinv/patnerinv.module').then( m => m.PatnerinvPageModule)
  },
  {
    path: 'viewpartnerinv',
    loadChildren: () => import('./pages/viewpartnerinv/viewpartnerinv.module').then( m => m.ViewpartnerinvPageModule)
  },
  {
    path: 'viewpartnersales',
    loadChildren: () => import('./pages/viewpartnersales/viewpartnersales.module').then( m => m.ViewpartnersalesPageModule)
  },
  {
    path: 'viewfinancepartner',
    loadChildren: () => import('./pages/viewfinancepartner/viewfinancepartner.module').then( m => m.ViewfinancepartnerPageModule)
  },
  {
    path: 'partnertickets',
    loadChildren: () => import('./pages/cnf/partnertickets/partnertickets.module').then( m => m.PartnerticketsPageModule)
  },
  {
    path: 'partnerpo',
    loadChildren: () => import('./pages/cnf/partnerpo/partnerpo.module').then( m => m.PartnerpoPageModule)
  },
  {
    path: 'partnersinfo',
    loadChildren: () => import('./pages/cnf/partnersinfo/partnersinfo.module').then( m => m.PartnersinfoPageModule)
  },
  {
    path: 'p-complaints',
    loadChildren: () => import('./pages/cnf/p-complaints/p-complaints.module').then( m => m.PComplaintsPageModule)
  },
  {
    path: 'p-open-complaints',
    loadChildren: () => import('./pages/cnf/p-open-complaints/p-open-complaints.module').then( m => m.POpenComplaintsPageModule)
  },
  {
    path: 'p-closed-complaints',
    loadChildren: () => import('./pages/cnf/p-closed-complaints/p-closed-complaints.module').then( m => m.PClosedComplaintsPageModule)
  },
  // {
  //   path: 'tab4',
  //   loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
