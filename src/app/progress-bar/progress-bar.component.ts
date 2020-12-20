import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {


  constructor() {
    // this.faCheck = faCheck;
  }

  faCheck;
  @Input() currentPage = 0;
  @Input() pages = ['page1', 'page2', 'page3'];
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  @Input() nextPage(): void {
    if (this.currentPage + 1 === this.pages.length) { return; }
    this.currentPage++;
    this.select(this.currentPage);
  }

  @Input() prevPage(): void {
    if (this.currentPage === 0) { return; }
    this.currentPage--;
    this.select(this.currentPage);
  }

  ngOnInit(): void {
  }

  select(index): void {
    this.currentPage = index;
    this.pageChange.emit(this.currentPage);
    console.log(this.currentPage);
  }

  clickSelect(index): void {
    // *** decidir se vai poder navegar pela barra ***
    // this.select(index);
  }
}
