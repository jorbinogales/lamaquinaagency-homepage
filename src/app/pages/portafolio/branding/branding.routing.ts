import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { BrandComponent } from './brand/brand.component';
import { BrandResolver } from './brand/brand.resolver';
import { BradingComponent } from './branding.component';

export const BrandingRouter: Route[] = [
    {
        path:'branding',
        component: BradingComponent,
    },
    {
        path: 'branding/:brand',
        component: BrandComponent,
        resolve: {
            brand: BrandResolver
        }
    }
];
