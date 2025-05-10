import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { AboutUsComponent } from './feature/about-us/about-us.component';
import { ContactUsComponent } from './feature/contact-us/contact-us.component';
import { CamerasComponent } from './category/cameras/cameras.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'category/cameras', component: CamerasComponent },
    { path: '**', redirectTo: '' } // Optional: redirect unknown paths to home
];
