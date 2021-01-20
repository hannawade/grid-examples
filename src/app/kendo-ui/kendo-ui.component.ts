import { Component } from '@angular/core';

const data = [
  {
    taskId: '1.01',
    taskName: 'Planning',
    paragraph: '1',
    text: 'Paragraph text here',
  },
  {
    taskId: '1.02',
    taskName: 'Preparation',
    paragraph: '2',
    text: 'Paragraph text here',
  },
  {
    taskId: '1.03',
    taskName: 'Proposal',
    paragraph: '3',
    text: 'Paragraph text here',
  },
];

@Component({
  selector: 'app-kendo-ui',
  templateUrl: './kendo-ui.component.html',
  styleUrls: ['./kendo-ui.component.css'],
})
export class KendoUiComponent {
  public gridData: any[] = data;
}
