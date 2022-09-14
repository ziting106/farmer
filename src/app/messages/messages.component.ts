import { Component, OnInit } from '@angular/core';
// 匯入 MessageService
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}
}