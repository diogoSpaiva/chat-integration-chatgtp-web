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
  messages: any[] = [];
  file_ids: string[] = [];
  newMessage: string = '';
  selectedFile: File | null = null;
  progress: number | undefined;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.getMessages();
  }

  loadMessages() {
    this.messageService.run().subscribe(() => this.getMessages());
  }

  getMessages() {
    this.messageService.getMessages().subscribe((messages: any) => {
      this.messages = messages.data;
      if (
        messages.data[0].role === 'assistant' &&
        messages.data[0].content[0].text.value !== ''
      ) {
        return;
      }
      setTimeout(() => {
        this.getMessages();
      }, 1000);
    });
  }

  onSubmit() {
    if (this.newMessage.trim() !== '') {
      this.file_ids = [];
      this.selectedFile ? this.uploadFile() : this.sendMessage();
    }
  }

  sendMessage() {
    this.messageService
      .sendMessage(this.newMessage, this.file_ids)
      .subscribe(() => {
        this.newMessage = '';
        this.loadMessages();
      });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // uploadFile(): void {
  //   if (this.selectedFile) {
  //     this.messageService.sendFile(this.selectedFile).subscribe({
  //       next: (event: any) => {
  //         if (event.type === HttpEventType.UploadProgress) {
  //           this.progress = Math.round((100 * event.loaded) / event.total);
  //         } else if (event.type === HttpEventType.Response) {
  //           this.progress = 100;
  //           console.log('====================================');
  //           console.log(event.body);
  //           console.log('====================================');
  //           console.log('Arquivo enviado com sucesso:', event.body);
  //           this.file_ids.push(event.body.id);
  //           this.sendMessage();
  //           this.selectedFile = null;
  //         }
  //       },
  //       error: (error) => {
  //         console.error('Erro ao enviar o arquivo:', error);
  //       },
  //     });
  //   }
  // }

  uploadFile() {
    if (this.selectedFile) {
      this.messageService.sendFile(this.selectedFile).subscribe((res: any) => {
        this.selectedFile = null;
        this.file_ids.push(res.id);
        this.sendMessage();
      });
    }
  }
}
