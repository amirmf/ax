'use client';

import useSWR from "swr";
import useSWRMutation from 'swr/mutation'
import SDK_CONSTANT from "./constant.api";
import { components as APITYPE } from '@/core-api-type/schema';

export interface SWRMutateResponse {
  data:any
  error:any
  trigger:any
  reset:any
  isMutating:any
}
export interface SWRFetchResponse {
  data:any;
  error:any;
  isLoading:any;
  isValidating:any;
  mutate:any;
}

export interface IDataservice {
  useItems:(d: any) => SWRFetchResponse;
  [key:string]:any;
}

export function getAuthToken() {
    return window.localStorage.getItem('token');
}

function useHandleErrorResponse(res:any){
  
  if(res.statusCode==401) window.location.href='/auth/login?callback='+window.location.href;
  if(res.statusCode==404) window.location.href='/404';
  if(res.statusCode==400 || res.statusCode==500 || res.statusCode==403) alert(JSON.stringify(res));
  return res;
}

async function fetcherGET(url: string) {
    return fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getAuthToken()}`
      }
    }).then(res => res.json()).then(res => useHandleErrorResponse(res))
}

async function fetcherGETPOST({url, dto}:any) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(dto),
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
          "Content-Type":'application/json'
        }
      }).then(res => res.json()).then(res => useHandleErrorResponse(res))
}

async function fetcherPOST(url: string, { arg }: {arg:any}) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(arg),
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
      "Content-Type":'application/json'
    }
  }).then(res => res.json()).then(res => useHandleErrorResponse(res))
}

async function fetcherPUT(url: string, { arg }: {arg:any}) {
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify(arg),
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
      "Content-Type":'application/json'
    }
  }).then(res => res.json()).then(res => useHandleErrorResponse(res))
}

async function fetcherDELETE(url: string) {
  return fetch(url, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${getAuthToken()}`
    }
  }).then(res => res.json()).then(res => useHandleErrorResponse(res))
}

export function CoreApiFactory<
    QueryDto extends APITYPE["schemas"]["BaseQueryDto"],
    OneDto extends APITYPE["schemas"]["BaseOneDto"],
>(resource: string): IDataservice { 
    const baseUrl = SDK_CONSTANT.CORE_API_URL + resource;
    return {
        useItems: (dto: QueryDto):any => {
            const url = baseUrl + SDK_CONSTANT.CORE_API_LIST_PATH;
            return useSWR<OneDto, string>({url,  dto}, fetcherGETPOST);
        },
        useItem: (id: number):SWRFetchResponse=>{
            const url = baseUrl + SDK_CONSTANT.CORE_API_ONE_PATH + '/' + id;
            return useSWR(url, fetcherGET);
        },
        getSampleDataForList: (token:string):any=>{
          const url = baseUrl + SDK_CONSTANT.CORE_API_LIST_PATH;
          const sampleDataForList = fetch(url, {
            method: 'POST',
            body: JSON.stringify({rows:1, first:0}),
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type":'application/json'
            }
          }).then(res => res.json());
          return sampleDataForList;
            // return {id:1,title:'1',name:'a',txt:'a'};// maybe return static json !!?
        },
        useCreate: (): SWRMutateResponse=>{
            const url = baseUrl + SDK_CONSTANT.CORE_API_CREATE_PATH;
            return useSWRMutation(url, fetcherPOST);
        },
        useUpdate: (): SWRMutateResponse=>{
            const url = baseUrl + SDK_CONSTANT.CORE_API_UPDATE_PATH;
            return useSWRMutation(url, fetcherPUT);
        },
        useDelete: (id:number): SWRMutateResponse =>{
            const url = baseUrl + SDK_CONSTANT.CORE_API_DELETE_PATH + '/' + id;
            return useSWRMutation(url, fetcherDELETE);
        },
        useDeleteMany:(ids:number[]):SWRMutateResponse => {
            const url = baseUrl + SDK_CONSTANT.CORE_API_DELETE_MANY_PATH + '/' + ids.join(',');
            return useSWRMutation(url, fetcherDELETE);
        }
    };
};