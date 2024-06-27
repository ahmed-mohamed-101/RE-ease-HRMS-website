import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/shared/services/employees.service';

@Component({
  selector: 'app-document-re',
  templateUrl: './document-re.component.html',
  styleUrls: ['./document-re.component.css']
})
export class DocumentReComponent implements OnInit {
  token: string | null;
  constructor(
    private _EmployeesService: EmployeesService,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.token = localStorage.getItem('etoken');
  }
  ngOnInit(): void {
    this.getId();
  }

  RE:any={}

  // getId
  getId() {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        let leaveId: any = params.get('id');
        this._EmployeesService.viewReDoc(leaveId).subscribe({
          next: (response) => {
            this.RE = response.document;
            console.log(response.document);
          },
        });
      },
    });
  }


 
}

