import './SpeedDialButton.css';
import { SpeedDial } from 'primereact/speeddial';

export const SpeedDialButton = ({products}) => {
    
    const actionItems = [
        { icon: 'pi pi-pencil', command: () => { } },
        { icon: 'pi pi-cart-plus', command: () => { } },
        { icon: 'pi pi-trash', command: () => { } },
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
        </div>
    )
}