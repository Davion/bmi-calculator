import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatDialog } from '@angular/material/dialog';
import { UpdateModalComponent } from './update-modal/update-modal.component'

@Injectable({
  providedIn: 'root'
})
export class PwaService {

  promptEvent;

  constructor(private swUpdate: SwUpdate, private modal: MatDialog) { 
    swUpdate.available.subscribe(event => {
      
      const modalRef = this.modal.open(UpdateModalComponent, {
        data:{
          title: 'Update Available',
          message: 'Click Ok to update'
        },
        disableClose: true,
        autoFocus: true
      });

      modalRef.afterClosed().subscribe(result => {
        if(result) {
          window.location.reload();
        }
      });
    })

    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
  }
}
