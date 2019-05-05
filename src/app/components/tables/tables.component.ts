import { Component, OnInit } from '@angular/core';
import { TableService } from '../../services/table.service';
import { Table } from 'src/app/models/tableModel';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  
  tables: Table[];

  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.tableService.getAllTables().subscribe(tables => {
      this.tables = tables;
    })
  }

}
