import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {
  id: any;
  user = new User();

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Récupérer les données
    this.id = this.activatedRoute.snapshot.params['id'];
    this.userService.findUserById(this.id).subscribe(
      (userData) => {
        if (userData.present) {
          // Les données de l'utilisateur sont présentes, les affecter à user
          this.user = userData;
        } else {
          // Les données de l'utilisateur ne sont pas présentes, rediriger ou afficher un message
          console.error('Les données de l\'utilisateur ne sont pas présentes.');
          this.router.navigate(['notfound']);
        }
      },
      (error) => {
        switch (error.status) {
          case 404:
            console.log('Utilisateur non trouvé');
            this.router.navigate(['notfound']);
            break;
        }
      },
      () => {
        console.log('Complété');
      }
    );
  }
}
