import { Component, Input, OnInit, Output } from '@angular/core';
import { Sequence } from 'src/app/models/sequence';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.css']
})
export class SequenceComponent implements OnInit {
  @Input() sequence: Sequence = new Sequence();
  @Output() toggleSequence: EventEmitter<Sequence> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onToggle(sequence: Sequence) {
    this.toggleSequence.emit(sequence);
  }

}
