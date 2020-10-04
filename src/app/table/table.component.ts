import {AfterContentChecked, Component, Input} from '@angular/core';

export interface IDayCourses {
  date: string;
  usd: string;
  eur: string;
}

const ELEMENT_DATA: IDayCourses[] = [];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterContentChecked {
  @Input() tableData;

  displayedColumns: string[] = ['date', 'usd', 'eur'];
  dataSource = ELEMENT_DATA;

  ngAfterContentChecked(): void {
    if ( this.tableData) {
      this.tableData.forEach((item) => {
        ELEMENT_DATA.push(item);
      });
    };
  }

}
