import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MetaService } from '../../shared/services/meta/meta-service.service';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export default class AccueilComponent {
  constructor(
    private metaService: MetaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.metaService.setMetaData(data['meta']);
    });
  }
}
