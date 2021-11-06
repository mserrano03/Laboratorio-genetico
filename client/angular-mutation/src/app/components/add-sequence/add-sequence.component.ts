import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sequence } from 'src/app/models/sequence';
import { SequenceService } from 'src/app/services/sequence.service';

@Component({
  selector: 'app-add-sequence',
  templateUrl: './add-sequence.component.html',
  styleUrls: ['./add-sequence.component.css']
})
export class AddSequenceComponent implements OnInit {
  sequence: Array<string>=[];
  constructor(private sequenceService: SequenceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const sequence = new Sequence();
    sequence.string = this.sequence;

    this.sequenceService.addSequence(sequence).subscribe(i => {
      if (i) {
        alert("¡Secuencia de ADN con mutación!");
      } else if (i === 0) {
        alert("¡Favor de escribir solor bases validas 'A', 'C', 'T' o 'G'!");
      } else {
        alert("¡Secuencia de ADN sin mutación!");
      }
    });
  }

}
