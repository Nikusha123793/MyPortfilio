import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { Certificates } from './components/certificates/certificates';
import { Projects } from './components/projects/projects';
import { Services } from './components/services/services';
import { About } from './components/about/about';
import { Process } from './components/process/process';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'process', component: Process },
  { path: 'services', component: Services },
  { path: 'projects', component: Projects },
  { path: 'certificates', component: Certificates },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
