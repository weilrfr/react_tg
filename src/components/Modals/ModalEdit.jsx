import { Dialog } from 'primereact/dialog';

export const ModalEdit = ({product, onChange, visible, setVisible}) => {
    return (
        <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
            Изменить {product.name}?
        </Dialog>
    )
}
