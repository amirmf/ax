'use client';
import React from 'react';
import CRUDCompactPage from '../common/crud/crud-compact.page';
import { components as APITYPE } from '@/core-api-type/schema';
import { CoreApiFactory } from '../common/crud/base.crud.api';

type _AboutOneDto = {} & APITYPE['schemas']['AboutOneDto'];
interface AboutOneDto extends _AboutOneDto {};
class AboutOneDto {};

export default function AboutCrudPage() {
    const aboutDataService:any = CoreApiFactory<APITYPE["schemas"]["BaseQueryDto"], AboutOneDto>('about');

    return(
        <CRUDCompactPage<AboutOneDto> 
            oneDto={AboutOneDto} 
            dataService={aboutDataService} 
            title='about title' 
        />
    );
}
