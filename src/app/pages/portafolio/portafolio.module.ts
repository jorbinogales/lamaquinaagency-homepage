import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortafolioComponent } from './portafolio.component';
import { PortafolioRouting } from './portafolio.routing';
import { SocialModule } from './social/social.module';
import { TirolinaModule } from 'src/app/shared/tirolina/tirolina.module';
import { AudiovisualModule } from './audiovisual/audio.module';
import { WebModule } from './web/web.module';
import { LogoFolioModule } from './logofolio/logofolio.module';
import { BreadCrumbModule } from 'src/app/shared/breadcrumb/breadcrumb.module';
import { SafeUrlModule } from 'src/app/pipes/safe-url/safe-url.module';
import { PackagingModule } from './packaging/packaging.module';
import { BrandingModule } from './branding/branding.module';

@NgModule({
  declarations:[
    PortafolioComponent,
  ],
  imports: [
    SafeUrlModule,
    TirolinaModule,
    CommonModule,
    RouterModule.forChild(PortafolioRouting),
    AudiovisualModule,
    WebModule,
    SocialModule,
    LogoFolioModule,
    PackagingModule,
    BreadCrumbModule,
    BrandingModule,
  ],
})
export class PortafolioModule { }