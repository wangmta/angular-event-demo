import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { restrictedWords } from '../../services/restricted-words.validator';
import { ISession } from '../../models/event.model';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error {
        background-color: #e3c3c5;
      }
      .error::-webkit-input-placeholder {
        color: #999;
      }
      .error::-moz-placeholder {
        color: #999;
      }
      .error:-moz-input-placeholder {
        color: #999;
      }
      .error:-ms-input-placeholder {
        color: #999;
      }
    `
  ]
})
export class CreateSessionComponent implements OnInit {
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  newSessionForm: FormGroup;
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      restrictedWords(['foo', 'bar'])
    ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  saveSession(formValues) {
    let session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      presenter: formValues.presenter,
      level: formValues.level,
      abstract: formValues.abstract,
      voters: []
    };
    this.saveNewSession.emit(session);
  }

  cancel() {
    this.cancelAddSession.emit();
  }
}
