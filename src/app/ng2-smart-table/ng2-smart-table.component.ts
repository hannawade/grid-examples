import { Component } from '@angular/core';

@Component({
  selector: 'app-ng2-smart-table',
  templateUrl: './ng2-smart-table.component.html',
  styleUrls: ['./ng2-smart-table.component.css'],
})
export class Ng2SmartTableComponent {
  settings = {
    columns: {
      taskId: {
        title: 'Task ID',
      },
      taskName: {
        title: 'Task Number',
      },
      paragraph: {
        title: 'Paragraph #',
      },
      text: {
        title: 'Text',
      },
    },
  };

  data = [
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
}
