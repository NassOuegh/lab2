import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'OM', url: '/folder/OM', icon: '/assets/om.png' },
    { title: 'PSG', url: '/folder/PSG', icon: '/assets/psg.png' },
    { title: 'Real Madrid', url: '/folder/Real', icon: '/assets/real.png' },
    { title: 'OL', url: '/folder/OL', icon: '/assets/ol.png' },
  ];

  public joueursPages = [
    { nom: 'Dimitri Payet', url: '/joueurs/payet', photo: '/assets/payet.png', bio: "Attaquant", birthdate: "20/01/1985"}
  ]
  constructor() {}
}
