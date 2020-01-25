import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor(
    private versionService: VersionService
  ) { }

  version: string;

  ngOnInit() {
    this.versionService.getVersion().subscribe(response => {
      this.version = response.version;
    });
  }
}
