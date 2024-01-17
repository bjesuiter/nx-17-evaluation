import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class SumService {
  constructor() {}

  sum(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}
