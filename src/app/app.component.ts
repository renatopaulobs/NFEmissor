import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  routeLinks: any[];
  activeLinkIndex = -1;

  constructor(private auth: AuthService, private router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.routeLinks = [
      {
        label: 'NFe',
        link: './home',
        index: 0
      }
    ];

    iconRegistry.addSvgIcon('settings', sanitizer.bypassSecurityTrustUrl('assets/images/settings.svg'));
  }

  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}
