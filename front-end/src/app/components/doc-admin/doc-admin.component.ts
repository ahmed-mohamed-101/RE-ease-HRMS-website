import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManageusersService } from 'src/app/shared/services/manageusers.service';

@Component({
  selector: 'app-doc-admin',
  templateUrl: './doc-admin.component.html',
  styleUrls: ['./doc-admin.component.css']
})
export class DocAdminComponent implements OnInit {
  token: string | null;
  constructor(
    private _ManageusersService: ManageusersService,
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
        let docId: any = params.get('id');
        this._ManageusersService.viewRE(docId).subscribe({
          next: (response) => {
            this.RE = response.document;
            console.log(response.document);
          },
        });
      },
    });
  }
}


