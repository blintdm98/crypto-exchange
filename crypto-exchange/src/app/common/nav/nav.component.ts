import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isModalOpen = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  openModal() {
    this.isModalOpen = true;
    this.renderer.setStyle(this.elRef.nativeElement.querySelector('.modal'), 'display', 'block');
  }

  closeModal() {
    this.isModalOpen = false;
    this.renderer.setStyle(this.elRef.nativeElement.querySelector('.modal'), 'display', 'none');
  }
}
