import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public team;
  public JOM = [
    { nom: 'Dimitri Payet', num: 10, photo: 'assets/payet.png', bio: 'Milieu de terrain', url: '/joueurs/payet' },
    { nom: 'Steve Mandanda', num: 1, photo: 'assets/mandanda.png', bio: 'Gardien de but' },
    { nom: 'Florian Thauvin', num: 26, photo: 'assets/thauvin.png', bio: 'Attaquant' },
  ];
  public JPSG = [
    { nom: 'Neymar', num: 10, photo: 'assets/neymar.png', bio: 'Attaquant' },
    { nom: 'Killian Mbappe', num: 7, photo: 'assets/mbappe.png', bio: 'Attaquant' },
    { nom: 'Marquinhos', num: 5, photo: 'assets/marquinhos.png', bio: 'Defenseur' },
  ];
  public JOL = [
    { nom: 'Anthony Lopes', num: 1, photo: 'assets/lopes.png', bio: 'Gardien de but' },
    { nom: 'Houssem Aouar', num: 8, photo: 'assets/aouar.png', bio: 'Milieu de terrain' },
    { nom: 'Memphis Depay', num: 11, photo: 'assets/depay.png', bio: 'Attaquant' },
  ];
  public JReal = [
    { nom: 'Karim Benzema', num: 9, photo: 'assets/benzema.png', bio: 'Attaquant' },
    { nom: 'Eden Hazard', num: 7, photo: 'assets/hazard.png', bio: 'Attaquant' },
    { nom: 'Sergio Ramos', num: 4, photo: 'assets/bale.png', bio: 'Defenseur'  },
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    switch (this.folder) {
      case 'OM':
        this.team = this.JOM;
        break;
      case 'PSG':
        this.team = this.JPSG;
        break;
      case 'Real':
        this.team = this.JReal;
        break;
      case 'OL':
        this.team = this.JOL;
        break;
    }
  }
}
