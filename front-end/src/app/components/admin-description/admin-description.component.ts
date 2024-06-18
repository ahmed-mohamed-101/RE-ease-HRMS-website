import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManageusersService } from 'src/app/shared/services/manageusers.service';

@Component({
  selector: 'app-admin-description',
  templateUrl: './admin-description.component.html',
  styleUrls: ['./admin-description.component.css'],
})
export class AdminDescriptionComponent implements OnInit {
  constructor(
    private _ManageusersService: ManageusersService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getId();
  }

  leaves: any = {};

  getId() {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        let id: any = params.get('id');
        this._ManageusersService.getDescription(id).subscribe({
          next: (response) => {
            console.log(response);
            this.leaves = response.description;
          },
        });
      },
    });
  }
}
