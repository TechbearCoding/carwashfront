import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TimeService } from '../restService/time.service';
@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {

  @Input()
  result$: Observable<any>;

  constructor(private timeService: TimeService) {
    this.result$ = timeService.resolveItems();
  }


  ngOnInit(): void {
  }

}
