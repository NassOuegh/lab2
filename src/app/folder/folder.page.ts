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
    { nom: 'Dimitri Payet', num: 10, url: 'assets/payet.png', bio: 'Milieu de terrain' },
    { nom: 'Steve Mandanda', num: 1, url: 'assets/mandanda.png', bio: 'Gardien de but' },
    { nom: 'Florian Thauvin', num: 26, url: 'assets/thauvin.png', bio: 'Attaquant' },
  ];
  public JPSG = [
    { nom: 'Neymar', num: 10, url: 'assets/neymar.png', bio: 'Attaquant' },
    { nom: 'Killian Mbappe', num: 7, url: 'assets/mbappe.png', bio: 'Attaquant' },
    { nom: 'Marquinhos', num: 5, url: 'assets/marquinhos.png', bio: 'Defenseur' },
  ];
  public JOL = [
    { nom: 'Anthony Lopes', num: 1, url: 'assets/lopes.png', bio: 'Gardien de but' },
    { nom: 'Houssem Aouar', num: 8, url: 'assets/aouar.png', bio: 'Milieu de terrain' },
    { nom: 'Memphis Depay', num: 11, url: 'assets/depay.png', bio: 'Attaquant' },
  ];
  public JReal = [
    { nom: 'Karim Benzema', num: 9, url: 'assets/benzema.png', bio: 'Attaquant' },
    { nom: 'Eden Hazard', num: 7, url: 'assets/hazard.png', bio: 'Attaquant' },
    { nom: 'Sergio Ramos', num: 4, url: 'assets/bale.png', bio: 'Defenseur' },
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
