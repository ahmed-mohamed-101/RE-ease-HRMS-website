// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-document-view',
//   templateUrl: './document-view.component.html',
//   styleUrls: ['./document-view.component.css']
// })
// export class DocumentViewComponent {

// }



import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.css']
})
export class DocumentViewComponent implements OnInit{

  documentUrl: string = '';
  constructor(private _ActivatedRoute:ActivatedRoute){}


  ngOnInit() {
    this._ActivatedRoute.params.subscribe(params => {
      this.documentUrl = params['url'];
    });
  }
}
