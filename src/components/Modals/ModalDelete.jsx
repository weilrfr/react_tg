import { Dialog } from 'primereact/dialog';
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import './Modal.css';
import { Button } from 'primereact/button';

export const ModalDelete = ({product, onChange, visible, setVisible}) => {
    const [helicopterId, setHelicopterId] = useState('');

    console.log(product);

    const footerContent = (
        <div>
            <Button label="Добавить" icon="pi pi-check" onClick={onChange(helicopterId)} autoFocus />
        </div>
    );

    return (
        <Dialog header="Введите ID объявления для его удаления" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
            <InputText value={helicopterId} onChange={(e) => setHelicopterId(e.target.value)} />
        </Dialog>
    )
}
