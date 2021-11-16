import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthEffects } from '../Effects/auth.effects';
import { authreducer, authFeatureKey } from '../Reducers/auth.reducers';

@NgModule({
  imports: [
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(authFeatureKey, authreducer),
  ],
  exports: [StoreModule, EffectsModule],
})
export class AuthStoreModule {}
