import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { AboutUsComponent } from './feature/about-us/about-us.component';
import { ContactUsComponent } from './feature/contact-us/contact-us.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: '**', redirectTo: '' } // Optional: redirect unknown paths to home
];
