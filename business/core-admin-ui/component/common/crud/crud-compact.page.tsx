/* eslint-disable @next/next/no-img-element */
'use client';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { Toast } from 'primereact/toast';
import { Toolbar } from 'primereact/toolbar';
import { classNames } from 'primereact/utils';
import React, { useRef, useState } from 'react';
import { Type } from '@/types/type.interface';
import MyDataTable from '../data-table/data-table.component';
import { components as APITYPE } from '@/core-api-type/schema';
import { IDataservice } from './base.crud.api';

export interface CRUDCompactPageProps<OneDto extends APITYPE['schemas']['BaseOneDto']> {
    oneDto: Type<OneDto>;
    dataService: IDataservice;
    title: string;
}

export default function CRUDCompactPage<OneDto extends APITYPE['schemas']['BaseOneDto']>(props: CRUDCompactPageProps<OneDto>) {
    const { oneDto, dataService, title} = props;
    let emptyOne: OneDto = new oneDto();

    const [oneDialog, setOneDialog] = useState(false);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [deleteManyDialog, setDeleteManyDialog] = useState(false);
    const [oneData, setOneData] = useState<OneDto>(emptyOne);
    const [submitted, setSubmitted] = useState(false);
    const toast = useRef<Toast>(null);

    const openNew = () => {
        setOneData(emptyOne);
        setSubmitted(false);
        setOneDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setOneDialog(false);
    };

    const hideDeleteOneDialog = () => {
        setDeleteDialog(false);
    };

    const hideDeleteManyDialog = () => {
        setDeleteManyDialog(false);
    };

    const createOne = () => {
        setSubmitted(true);

        let _oneData = { ...oneData };    
        const createRes: OneDto = dataService.createOne(_oneData);
        if(!!createRes?.id){
            toast.current?.show({
                severity: 'success',
                summary: 'Successful',
                detail: 'Create Completed',
                life: 3000
            });
            // TODO: refresh the list
            setOneData(emptyOne);
        }else{ // on error TODO: handle error and response better??
            toast.current?.show({
                severity: 'error',
                summary: 'Error',
                detail: 'Error occured',
                life: 3000
            });
        }
        setOneDialog(false);
    };
    
    const updateOne = () => {
        setSubmitted(true);

        let _oneData = { ...oneData };
        const updateRes: OneDto = dataService.updateOne(_oneData);
        if(!!updateRes?.id){
            toast.current?.show({
                severity: 'success',
                summary: 'Successful',
                detail: 'Update Completed',
                life: 3000
            });
            // TODO: refresh the list
            setOneData(emptyOne);
        }else{ // on error TODO: handle error and response better??
            toast.current?.show({
                severity: 'error',
                summary: 'Error',
                detail: 'Error occured',
                life: 3000
            });
        }
        setOneDialog(false);
    };
    
    const saveOne = () => {
        if (oneData.id) updateOne();
        else createOne();
    };

    const editOne = (oneData: OneDto) => {
        setOneData({ ...oneData });
        setOneDialog(true);
    };
    const confirmDeleteOne = (oneData: OneDto) => {
        setOneData(oneData);
        setDeleteDialog(true);
    };

    const deleteOne =  () => {
        const deleteRes: any = dataService.deleteOne(oneData.id);
        if(!!deleteRes?.id){
            toast.current?.show({
                severity: 'success',
                summary: 'Successful',
                detail: 'Delete Completed',
                life: 3000
            });
            // TODO: refresh the list
        }else{ // on error TODO: handle error and response better??
            toast.current?.show({
                severity: 'error',
                summary: 'Error',
                detail: 'Error occured',
                life: 3000
            });
        }
        setDeleteDialog(false);
        setOneData(emptyOne);
    };

    // const confirmDeleteSelected = () => {
    //     setDeleteManyDialog(true);
    // };

    const onCategoryChange = (e: RadioButtonChangeEvent, name?: string) => {
        let _oneData: any = { ...oneData };
        _oneData[`${name}`] = e.value;
        setOneData(_oneData);
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string) => {
        const val = (e.target && e.target.value) || '';
        let _oneData: any = { ...oneData };
        _oneData[`${name}`] = val;

        setOneData(_oneData);
    };

    const onInputNumberChange = (e: InputNumberValueChangeEvent, name: string) => {
        const val = e.value || 0;
        let _oneData: any = { ...oneData };
        _oneData[`${name}`] = val;

        setOneData(_oneData);
    };

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <div className="my-2">
                    <Button label="New" icon="pi pi-plus" severity="success" className=" mr-2" onClick={openNew} />
                    {/* <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedData || !(selectedData as any).length} /> */}
                </div>
                
                    <Dialog visible={oneDialog} style={{ width: '450px' }} header="Detail" modal className="p-fluid" footer={oneDialogFooter} onHide={hideDialog}>
                        {/* <div className="field">
                            <label htmlFor="name">Name</label>
                            <InputText
                                id="name"
                                value={oneData.name}
                                onChange={(e) => onInputChange(e, 'name')}
                                required
                                autoFocus
                                className={classNames({
                                    'p-invalid': submitted && !oneData.name
                                })}
                            />
                            {submitted && !oneData.name && <small className="p-invalid">Name is required.</small>}
                        </div>
                        <div className="field">
                            <label htmlFor="description">Description</label>
                            <InputTextarea id="description" value={oneData.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} />
                        </div>

                        <div className="field">
                            <label className="mb-3">Category</label>
                            <div className="formgrid grid">
                                <div className="field-radiobutton col-6">
                                    <RadioButton inputId="category1" name="category" value="Accessories" onChange={onCategoryChange} checked={oneData.category === 'Accessories'} />
                                    <label htmlFor="category1">Accessories</label>
                                </div>
                                <div className="field-radiobutton col-6">
                                    <RadioButton inputId="category2" name="category" value="Clothing" onChange={onCategoryChange} checked={oneData.category === 'Clothing'} />
                                    <label htmlFor="category2">Clothing</label>
                                </div>
                                <div className="field-radiobutton col-6">
                                    <RadioButton inputId="category3" name="category" value="Electronics" onChange={onCategoryChange} checked={oneData.category === 'Electronics'} />
                                    <label htmlFor="category3">Electronics</label>
                                </div>
                                <div className="field-radiobutton col-6">
                                    <RadioButton inputId="category4" name="category" value="Fitness" onChange={onCategoryChange} checked={oneData.category === 'Fitness'} />
                                    <label htmlFor="category4">Fitness</label>
                                </div>
                            </div>
                        </div>

                        <div className="formgrid grid">
                            <div className="field col">
                                <label htmlFor="price">Price</label>
                                <InputNumber id="price" value={oneData.price} onValueChange={(e) => onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
                            </div>
                            <div className="field col">
                                <label htmlFor="quantity">Quantity</label>
                                <InputNumber id="quantity" value={oneData.quantity} onValueChange={(e) => onInputNumberChange(e, 'quantity')} />
                            </div>
                        </div> */}
                    </Dialog>

                    <Dialog visible={deleteDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteOneDialogFooter} onHide={hideDeleteOneDialog}>
                        {/* <div className="flex align-items-center justify-content-center">
                            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                            {oneData && (
                                <span>
                                    Are you sure you want to delete <b>{oneData.name}({oneData.id})</b>?
                                </span>
                            )}
                        </div> */}
                    </Dialog>
            </React.Fragment>
        );
    };

    const rightToolbarTemplate = () => {
        return (
            <React.Fragment>
                {/* <FileUpload mode="basic" accept="image/*" maxFileSize={1000000} chooseLabel="Import" className="mr-2 inline-block" /> */}
                {/* <Button label="Export" icon="pi pi-upload" severity="help" onClick={exportCSV} /> */}
            </React.Fragment>
        );
    };

    const oneDialogFooter = (
        <>
            <Button label="Cancel" icon="pi pi-times" text onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" text onClick={saveOne} />
        </>
    );
    const deleteOneDialogFooter = (
        <>
            <Button label="No" icon="pi pi-times" text onClick={hideDeleteOneDialog} />
            <Button label="Yes" icon="pi pi-check" text onClick={deleteOne} />
        </>
    );

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <Toast ref={toast} />
                    <Toolbar className="mb-4" start={leftToolbarTemplate} end={rightToolbarTemplate}></Toolbar>
                    <MyDataTable 
                        title={title}
                        dataService={dataService}
                    />
                </div>
            </div>
        </div>
    );
}
