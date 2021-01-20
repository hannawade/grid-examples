import { Component } from '@angular/core';

export interface Element {
  taskId: number;
  taskName: string;
  paragraphNum: number;
  text: string;
}

const ELEMENT_DATA: Element[] = [
  {
    taskId: 1.01,
    taskName: 'Planning',
    paragraphNum: 1,
    text: 'Paragraph text here',
  },
  {
    taskId: 1.02,
    taskName: 'Preparation',
    paragraphNum: 2,
    text: 'Paragraph text here',
  },
  {
    taskId: 1.03,
    taskName: 'Proposal',
    paragraphNum: 3,
    text: 'Paragraph text here',
  },
];

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css'],
})
export class MaterialTableComponent {
  displayedColumns: string[] = ['taskId', 'taskName', 'paragraphNum', 'text'];
  dataSource = ELEMENT_DATA;
}
