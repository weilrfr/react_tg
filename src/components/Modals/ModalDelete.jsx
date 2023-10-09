import { Dialog } from 'primereact/dialog';

export const ModalDelete = ({product, onChange, visible, setVisible}) => {
    return (
        <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
            Удалить {product.name}?
        </Dialog>
    )
}
