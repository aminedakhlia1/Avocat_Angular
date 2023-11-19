import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Affaire } from 'src/app/models/affaire';
import { AffaireService } from 'src/app/services/affaire.service';

@Component({
  selector: 'app-add-affaire',
  templateUrl: './add-affaire.component.html',
  styleUrls: ['./add-affaire.component.scss']
})
export class AddAffaireComponent implements OnInit {
  public affaire: Affaire = new Affaire();

  constructor(private affaireService: AffaireService,
              private router: Router) {}

  ngOnInit(): void {
  }

  submitForm() {
    this.affaireService.addAffaire(this.affaire).subscribe(
      affaire => {
        console.log('Affaire ajoutée avec succès:', affaire);
        this.router.navigate(['list-affaire']);
      },
      erreur => {
        console.error('Erreur lors de l\'ajout de l\'affaire:', erreur);
      }
    );
  }

}
