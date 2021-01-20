import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-datatable',
  templateUrl: './ngx-datatable.component.html',
})
export class NgxDatatableComponent implements OnInit {
  ngOnInit(): void {}

  rows = [
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
  columns = [
    { prop: 'taskId' },
    { name: 'Task Name' },
    { name: 'Paragraph #' },
    { name: 'Text' },
  ];
}
