import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'home' },
    { title: 'Chat', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Contacts', url: '/folder/Favorites', icon: 'heart' },
    //{ title: 'Archived', url: '/folder/Archived', icon: 'archive' },
   // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
   // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Notes'];
  constructor() {}
}
