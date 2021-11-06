import { Component, Input, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  @Input() isMutation: number = 0;
  @Input() noMutation: number = 0;
  @Input() ratio: number = 0;
  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.reportService.getStats().subscribe(data => {
      this.isMutation = data.count_mutations;
      this.noMutation = data.count_no_mutation;
      this.ratio = data.ratio;
    });
  }
}
