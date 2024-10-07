import {
  Component,
  OnInit,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentChecked,
  AfterContentInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-event',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-event.component.html',
  styleUrl: './lifecycle-event.component.css',
})
export class LifecycleEventComponent
  implements
    OnInit,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    AfterContentChecked,
    AfterContentInit,
    OnDestroy
{
  constructor() {
    console.log('Constructor is loaded');
  }

  ngOnInit(): void {
    console.log('Ng OnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
