import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirectiveComponent } from './components/directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { TwowayDataBindingComponent } from './components/twoway-data-binding/twoway-data-binding.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { ForAndSwitchComponent } from './components/for-and-switch/for-and-switch.component';

export const routes: Routes = [
  {
    path: 'add-employee',
    component: AddEmployeeComponent,
  },
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent,
  },
  {
    path: 'structural-dir',
    component: StructuralDirectiveComponent,
  },
  {
    path: 'attribute-dir',
    component: AttributeDirectiveComponent,
  },
  {
    path: 'twoway-binding',
    component: TwowayDataBindingComponent,
  },
  {
    path: 'control-flow',
    component: ControlFlowComponent,
  },

  {
    path: 'for-switch',
    component: ForAndSwitchComponent,
  },
];
