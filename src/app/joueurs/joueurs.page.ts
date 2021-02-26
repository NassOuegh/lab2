import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.page.html',
  styleUrls: ['./joueurs.page.scss'],
})
export class JoueursPage implements OnInit {
  public joueurid: string;
  public joueur;
  public payet = [
    {
      equipe: 'OM',
      nom: 'Dimitri Payet',
      num: 10,
      photo: 'assets/payet.png',
      bio: 'Milieu de terrain',
      url: '/joueurs/payet',
    },
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.joueurid = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.joueurid);
    switch (this.joueurid) {
      case 'payet':
        this.joueur = this.payet;
        break;
    }
  }
}
