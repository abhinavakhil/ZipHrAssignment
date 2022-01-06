import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  sideNavItems: Array<{ name: string; path: string }> = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Posts', path: '/posts' },
    { name: 'Albums', path: '/albums' },
    { name: 'Photos', path: '/photos' },
  ];

  constructor() {
  }

  ngOnInit() {}

}
