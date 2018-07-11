import { MemberService } from './../common/services/member.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, HostBinding } from '@angular/core';
import 'rxjs/Rx';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  users: any [];
  constructor(private memberService: MemberService) { }
  @HostBinding('attr.class') cssClass = 'row';
  
  ngOnInit() {
    this.loadMembers();
  }

  loadMembers(){
    this.memberService.getAll().subscribe(users=> this.users = users);
  }
}
