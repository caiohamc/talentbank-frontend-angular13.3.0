import { Component, OnInit } from '@angular/core';
import { Candidate } from './candidate';
import { CandidateService } from './candidate.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  candidates !: Candidate[];

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.candidateService.getUsers().subscribe((data: Candidate[]) => {
      console.log(data);
      this.candidates = data;
    });
  }
}
