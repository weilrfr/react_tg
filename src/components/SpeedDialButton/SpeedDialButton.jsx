import './SpeedDialButton.css';
import { SpeedDial } from 'primereact/speeddial';
import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";


export const SpeedDialButton = ({products}) => {
    const [visibleUpdate, setVisibleUpdate] = useState(false);
    const [visibleAdd , setVisibleAdd] = useState(false);
    const [visibleTrash, setVisibleTrash] = useState(false);

    const [updatevalue, updateSetValue] = useState('');
    const [addValue, addSetValue] = useState('');
    const [trashValue, trashSetValue] = useState('');


    const actionItems = [
        { icon: 'pi pi-pencil', command: () => { setVisibleUpdate(true) } },
        { icon: 'pi pi-cart-plus', command: () => { setVisibleAdd(true) } },
        { icon: 'pi pi-trash', command: () => { setVisibleTrash(true) } },
    ];

    const addHelicopter = (data) => {
        products.push(data)
    }

    const deleteHelicopter = (id) => {
        products = products.filter(item => item.id !== id)
    }

    const updateHelicopter = (id, data) => {
        products = products.map(item => {
            if (item.id === id) {
                return data
            }
            return item
        })
    }
    
    return (
        <div>
            <SpeedDial model={actionItems}  radius={120} type="quarter-circle" direction="down-left" style={{ right: 0, top: 0 }} buttonClassName="p-button-help" />
            <div className="card flex justify-content-center">
                <Dialog header="Введите ID для изменения" visible={visibleUpdate} style={{ width: '50vw' }} onHide={() => setVisibleUpdate(false)}>
                    <span className="p-float-label">
                        <InputText id="updateHel" value={updatevalue} onChange={(e) => updateSetValue(e.target.value)} />
                        <label htmlFor="updateHel">id</label>
                    </span>
                </Dialog>
            </div>
            <div className="card flex justify-content-center">
                <Dialog header="Новое объявление" visible={visibleAdd} style={{ width: '50vw' }} onHide={() => setVisibleAdd(false)}>
                    <span className="p-float-label">
                        <InputText id="addHel" value={addValue} onChange={(e) => addSetValue(e.target.value)} />
                        <label htmlFor="addHel">Название</label>
                    </span>
                </Dialog>
            </div>
            <div className="card flex justify-content-center">
                <Dialog header="Введите ID для удаления объявления" visible={visibleTrash} style={{ width: '50vw' }} onHide={() => setVisibleTrash(false)}>
                    <span className="p-float-label">
                        <InputText id="delHel" value={trashValue} onChange={(e) => trashSetValue(e.target.value)} />
                        <label htmlFor="delHel">id</label>
                    </span>
                </Dialog>
            </div>
        </div>
    )
}