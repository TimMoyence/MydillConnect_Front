import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from '../../shared/services/meta/meta-service.service';
import { CGIComponent } from './cgi/cgi.component';
import { CGUComponent } from './cgu/cgu.component';
import { ConfidentialsPoliticsComponent } from './confidentials-politics/confidentials-politics.component';
@Component({
  selector: 'app-legal-mentions',
  standalone: true,
  imports: [ConfidentialsPoliticsComponent, CGUComponent, CGIComponent],
  templateUrl: './legal-mentions.component.html',
  styleUrl: './legal-mentions.component.css',
})
export default class LegalMentionsComponent {
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
