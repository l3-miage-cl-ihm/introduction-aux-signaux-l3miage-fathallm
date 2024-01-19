import { Injectable, NgZone } from '@angular/core';

export type ActionFunction = () => void;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private L: ActionFunction[] = [];

  constructor(private ngZ: NgZone) {
    this.processActions();
  }

  process(...Lf: ActionFunction[]): void {
    this.L.push(...Lf);
  }

  private processActions(): void {
    const f = this.L.shift();
    if (f) this.ngZ.run( f );
    requestAnimationFrame( () => this.processActions() );
  }

}
