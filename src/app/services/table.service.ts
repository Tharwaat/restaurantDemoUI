import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getAllTables, postCreateTable, getAvailableTables } from './requests/tableRequests';
import { Table } from '../models/tableModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  getAllTables(): Observable<Table[]>{
    //const headers = new HttpHeaders({ Authorization: 'Bearer ',});
    const response = this.http.get<Table[]>(getAllTables);
    return response;
  }

  getAvailableTables(date: string): Observable<Table[]>{
    const response = this.http.get<Table[]>(getAvailableTables(date));
    return response;
  }

  addTable(tablePayLoad){
    this.http.post(postCreateTable, tablePayLoad);
  }
}
