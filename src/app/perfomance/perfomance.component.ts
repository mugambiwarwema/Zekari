import { Component, OnInit } from '@angular/core';
import StudentData  from '../data/studentdata.json';

@Component({
  selector: 'app-perfomance',
  templateUrl: './perfomance.component.html',
  styleUrls: ['./perfomance.component.scss']
})
export class PerfomanceComponent {
  studentData: any = StudentData;
  avg_scores:any = this.studentData.student_performance_over_time;

  constructor() {
  }

  chartOptions = {
    responsive: true,
  }

  chartLabels = ['CAT 1 - (2019 Term 1)', 'CAT 2 - (2019 Term 1)', 'CAT 1 - (2019 Term 2)', 'CAT 2 - (2019 Term 2)', 'CAT 1 - (2019 Term 3)', 'CAT 2 - (2019 Term 3)'];
  chartLegend = true;
  chartPlugins = [];

  chartData = [
    { data: [
      this.avg_scores[0].avg_score, 
      this.avg_scores[1].avg_score, 
      this.avg_scores[2].avg_score, 
      this.avg_scores[3].avg_score, 
      this.avg_scores[4].avg_score, 
      this.avg_scores[5].avg_score
    ], label: 'Form 2' }
  ];
}