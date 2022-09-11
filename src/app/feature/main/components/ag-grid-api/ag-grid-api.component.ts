import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-ag-grid-api',
  templateUrl: './ag-grid-api.component.html',
  styleUrls: ['./ag-grid-api.component.css'],
})
export class AgGridApiComponent implements OnInit {
  constructor(private userService: UserService) {}
  public rowData$: any;
  public rowdata: any[];
  public columnDefs: ColDef[] = [
    { field: 'API' },
    { field: 'Auth' },
    { field: 'Category' },
    { field: 'Cors' },
    { field: 'Description' },
    { field: 'HTTPS' },
    { field: 'Link' },
  ];

  ngOnInit() {
    this.rowData$ = new Observable((observer) => {
      this.userService.getUsers().subscribe((res: any) => {
        observer.next(res.entries);
      });
    });
  }
}
