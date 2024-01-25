// chat.component.ts
import { Component, OnInit } from '@angular/core';
import { MessageService } from './../../services/message.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [MessageService],
})
export class ChatComponent implements OnInit {
  messageInit: any = {
    role: 'assistant',
    content: [
      {
        type: 'text',
        text: {
          value:
            'Olá, eu sou Wauto e estou aqui para te ajudar a renovar o seu seguro auto. <br>Poderia me enviar a apólice atual?',
        },
      },
    ],
  };

  messages: any[] = [this.messageInit];
  file_ids: string[] = [];
  newMessage: string = '';
  selectedFile: File | null = null;
  progress: number | undefined;
  loadResponse: boolean = false;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.getMessages();
  }

  runMessages() {
    this.messageService.run().subscribe(() => this.getRunMessages());
  }

  getRunMessages() {
    this.messageService.getRun().subscribe((res: any) => {
      if (res.data[0].status === 'in_progress') {
        setTimeout(() => this.getRunMessages(), 6 * 1000);
      } else {
        this.getMessages();
      }
    });
  }

  getMessages() {
    this.messageService.getMessages().subscribe((messages: any) => {
      this.messages = [
        ...messages.data,
        ...[this.messageInit],
      ];
      this.loadResponse = false;
    });
  }

  onSubmit() {
    if (this.newMessage.trim() !== '') {
      this.messages.unshift({
        role: 'user',
        content: [
          {
            type: 'text',
            text: {
              value: this.newMessage,
            },
          },
        ],
      });
    }
    if (this.newMessage.trim() !== '' || this.selectedFile) {
      this.loadResponse = true;
      this.file_ids = [];
      this.selectedFile ? this.uploadFile() : this.sendMessage();
    }
  }

  sendMessage() {
    this.messageService
      .sendMessage(this.newMessage, this.file_ids)
      .subscribe(() => {
        this.newMessage = '';
        this.runMessages();
      });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile) {
      this.messageService.sendFile(this.selectedFile).subscribe((res: any) => {
        this.selectedFile = null;
        this.file_ids.push(res.id);
        this.sendMessage();
      });
    }
  }

  handleText(text: string): string {
    const textTemp: string[] = /【\d*†source】/.test(text)
      ? text.split('\n\n')
      : [];
    if (textTemp.length > 1) {
      let htmlTemp: string = '';
      textTemp.forEach((element, index) => {
        if (index !== 0 && index !== textTemp.length - 1) {
          console.log(element);

          htmlTemp += element
            .replace(/^\*\*/g, '<p class="title">')
            .replace(/\*\*/g, '</p>')
            .replaceAll('\n', '<p class="item">')
            .replace(/【\d*†source】\./g, '.</p>')
            .replace(/【\d*†source】/g, '');
          return;
        }
        htmlTemp += `<p>${element}</p>`;
      });
      return htmlTemp;
    }
    return text;
  }
}
