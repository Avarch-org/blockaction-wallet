import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { BitcoinRoutingModule } from './bitcoin-routing.module';
import {SharedModule} from '../shared/shared.module';

import {NgxPaginationModule} from 'ngx-pagination';

import {WalletComponent} from './wallet/wallet.component';
import { WalletInfoComponent } from './wallet-info/wallet-info.component';


import {WalletService} from './services/wallet.service';
import { TransactionService } from './services/transaction.service';

@NgModule({
  imports: [
    BitcoinRoutingModule,
    SharedModule,
    NgxPaginationModule
  ],
  declarations: [
    WalletComponent,
    WalletInfoComponent
  ],
  providers: [WalletService, TransactionService],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BitcoinModule { }
