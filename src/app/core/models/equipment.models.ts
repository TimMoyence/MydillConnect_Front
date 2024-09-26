// equipment.model.ts
export interface Equipment {
  equipment_id: number;
  name: string;
  description: string;
  category: string;
  availability: boolean;
  status: string;
  reserfation_date: string;
  return_date: string;
  state: string;
}
