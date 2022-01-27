import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { AudiovisualComponent } from './audiovisual/audio.component';
import { BradingComponent } from './branding/branding.component';
import { LogoFolioComponent } from './logofolio/logofolio.component';
import { PackagingComponent } from './packaging/packaging.component';
import { PortafolioComponent } from './portafolio.component';
import { SocialComponent } from './social/social.component';
import { WebComponent } from './web/web.component';

export const PortafolioRouting: Route[] = [
    {
        path:'',
        component: PortafolioComponent,
    },
    {
        path: 'social',
        component: SocialComponent,
    },
    {
        path: 'web',
        component: WebComponent,
    },
    {
        path: 'audiovisual',
        component: AudiovisualComponent,
    },
    {
        path: 'logofolio',
        component: LogoFolioComponent,
    },
    {
        path: 'packaging',
        component: PackagingComponent,
    },
    {
        path: 'branding',
        loadChildren: () => import('src/app/pages/portafolio/branding/branding.module').then(m => m.BrandingModule),
    },
];
