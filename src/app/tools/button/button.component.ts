import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() type: string = '';
  @Input() buttonText: string = '';
  @Input() enable: boolean = false;
  @Output('submit') onClick = new EventEmitter();

  submit() {
    this.onClick.emit();
  }
}
