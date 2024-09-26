// equipment-category.component.ts
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipmentService } from '../../core/adapters/equipment.getaway';
import { Equipment } from '../../core/models/equipment.models';

@Component({
  selector: 'app-equipment-category',
  standalone: true,
  imports: [NgFor, NgClass, CommonModule],
  templateUrl: './equipment-category.component.html',
  styleUrls: ['./equipment-category.component.css'],
})
export default class EquipmentCategoryComponent implements OnInit {
  equipment: Equipment[] = [];
  category: string = '';

  constructor(
    private equipmentService: EquipmentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.category = data['category'];
      this.loadEquipment();
    });
  }

  loadEquipment(): void {
    this.equipmentService.getByCategory(this.category).subscribe(
      (data) => {
        this.equipment = data;
        console.log('Equipment fetched', this.equipment);
      },
      (error) => {
        console.error('Error fetching equipment', error);
      }
    );
  }
}
