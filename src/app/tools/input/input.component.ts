import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() inputId: string = '';

  @Input() name: string = '';
  @Input() required: boolean = false;
  @Input() formGroupName!: FormGroup;

  constructor() {
    if (this.name === 'email') {
      this.formGroupName = new FormGroup({
        [this.name]: new FormControl('', Validators.email),
      });
    }

    if (this.required) {
      this.formGroupName = new FormGroup({
        [this.name]: new FormControl('', [Validators.required]),
      });
    } else {
      this.formGroupName = new FormGroup({
        [this.name]: new FormControl(''),
      });
    }
  }
}
