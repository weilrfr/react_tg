import { Dialog } from 'primereact/dialog';
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export const ModalAdd = ({product, onChange, visible, setVisible}) => {
    const [helicopterName, setHelicopterName] = useState('');

    return (
        <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
            <InputText value={helicopterName} onChange={(e) => setHelicopterName(e.target.value)} />
        </Dialog>
    )
}
