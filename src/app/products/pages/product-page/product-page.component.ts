import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  public isProductVisible: boolean = false;
  public currentPrice: number = 10;

  constructor() {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit()');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    console.log('ngOnChanges()');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck()');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked()');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit()');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked()');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy()');
  }

  increasePrice() {
    this.currentPrice++;
  }
}
