import './SpeedDialButton.css';
import { SpeedDial } from 'primereact/speeddial';
import React, { useState } from "react";
import { ModalDelete } from '../Modals/ModalDelete';
import { ModalEdit } from '../Modals/ModalEdit';
import { ModalAdd } from '../Modals/ModalAdd'


export const SpeedDialButton = ({products}) => {
    const [visibleUpdate, setVisibleUpdate] = useState(false);
    const [visibleAdd , setVisibleAdd] = useState(false);
    const [visibleTrash, setVisibleTrash] = useState(false);

    console.log(products);

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
            <ModalDelete product={products} onChange={deleteHelicopter} visible={visibleTrash} setVisible={setVisibleTrash} />
            <ModalEdit product={products} onChange={updateHelicopter} visible={visibleUpdate} setVisible={setVisibleUpdate} />
            <ModalAdd product={products} onChange={addHelicopter} visible={visibleAdd} setVisible={setVisibleAdd} />
        </div>
    )
}