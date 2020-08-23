import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'; 
import { FormRestService } from '../restService/form-rest.service';
import { format } from 'url';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})

export class SubmitComponent implements OnInit {
  submitForm: FormGroup;
  submitted = false;

  private jsonString : String;


  constructor(private formService: FormRestService, private formBuilder: FormBuilder) {
    //formService.postItems(this.);

  }

  ngOnInit(): void {
    
    this.submitForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      phone: ['', [Validators.required,Validators.email]],
      email: ['', Validators.required],
      model: ['', Validators.required],
      service: ['', Validators.required],
      quality: ['', Validators.required],
      comments: ['']
    });
  }

  submitData(){
    let formObj = this.submitForm.getRawValue(); // {name: '', description: ''}

    let serializedForm = JSON.stringify(formObj);

    alert(serializedForm);
  }

  get fval() {
    return this.submitForm.controls;
  }

}
