import { Routes } from '@angular/router';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


export const routes: Routes = [
    { 
        path: '', 
        component: DashboardComponent
    },
    { 
        path: 'legal-notice', 
        component: LegalNoticeComponent 
    },
    { 
        path: 'privacy-policy', 
        component: PrivacyPolicyComponent 
    },
];

