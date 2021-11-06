import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSequenceComponent } from './components/add-sequence/add-sequence.component';
import { SequencesComponent } from './components/sequences/sequences.component';

const routes: Routes = [
  {
    path: '',
    component: SequencesComponent
  },
  {
    path: 'add',
    component: AddSequenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
