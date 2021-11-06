import { Component, OnInit } from '@angular/core';
import { Sequence } from '../../models/sequence';
import { SequenceService } from 'src/app/services/sequence.service';

@Component({
  selector: 'app-sequences',
  templateUrl: './sequences.component.html',
  styleUrls: ['./sequences.component.css']
})
export class SequencesComponent implements OnInit {
  sequences: Sequence[] = [];

  constructor(private sequenceService: SequenceService) {}

  ngOnInit(): void {
    this.sequenceService.getSequences().subscribe(data => {
      this.sequences = data;
    });
  }
}
