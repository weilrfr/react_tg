import { Dialog } from 'primereact/dialog';
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import './Modal.css';
        


export const ModalAdd = ({product, onChange, visible, setVisible}) => {
    const [helicopterName, setHelicopterName] = useState('');
    const [helicopterPrice, setHelicopterPrice] = useState(0);
    const [helicopterDescription, setHelicopterDescription] = useState('');

    const addHelicopter = () => {
        const data = {
            id: product.length + 1,
            title: helicopterName,
            price: helicopterPrice,
            description: helicopterDescription
        }
        onChange(data)
        setVisible(false)
    }

    const footerContent = (
        <div>
            <Button label="Добавить" icon="pi pi-check" onClick={addHelicopter} autoFocus />
        </div>
    );

    return (
        <Dialog className="modal" header="Добавьте свой вертолет" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
                <InputText value={helicopterName} onChange={(e) => setHelicopterName(e.target.value)} />
                <InputText value={helicopterDescription} onChange={(e) => setHelicopterDescription(e.target.value)}/>
                <InputNumber value={helicopterPrice} onChange={(e) => setHelicopterPrice(e.value)} mode="currency" currency="KZT" locale="de-DE" />
        </Dialog> 
    )
}
