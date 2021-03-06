import { Component, OnInit, OnDestroy, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { LoginModalService } from 'app/core/login/login-modal.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  account: Account;
  authSubscription: Subscription;
  modalRef: NgbModalRef;

  constructor(
    private accountService: AccountService,
    private loginModalService: LoginModalService,
    private eventManager: JhiEventManager,
    private elementRef: ElementRef,
    private renderer2: Renderer2
  ) { }

  ngOnInit() {
    this.accountService.identity().then((account: Account) => {
      this.account = account;
    });
    this.registerAuthenticationSuccess();
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#808080';
    this.elementRef.nativeElement.ownerDocument.querySelector(".jh-card").style.padding = '0';
  }

  registerAuthenticationSuccess() {
    this.authSubscription = this.eventManager.subscribe('authenticationSuccess', message => {
      this.accountService.identity().then(account => {
        this.account = account;
      });
    });
  }

  isAuthenticated() {
    return this.accountService.isAuthenticated();
  }

  login() {
    this.modalRef = this.loginModalService.open();
  }

  ngOnDestroy() {
    this.renderer2.removeAttribute(this.elementRef.nativeElement.ownerDocument.body,'style')
    this.renderer2.removeAttribute(this.elementRef.nativeElement.ownerDocument.querySelector(".jh-card"),'style')
    if (this.authSubscription) {
      this.eventManager.destroy(this.authSubscription);
    }
  }
}
