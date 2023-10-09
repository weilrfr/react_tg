import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './Practice.css';


const columns = [
    {field: 'id', header: 'ID'},
    {field: 'name', header: 'Имя'},
    {field: 'pain', header: 'Коэффициент боли'},
    {field: 'difficulty', header: 'Коэффициент сложности'},
    {field: 'chaos', header: 'Коэффициент хаоса'},
    {field: 'beaty', header: 'Коэффициент красоты кода'},
]

const products = [
    {
      id: 1,
      name: 'Vue',
      pain: 0.3,
      difficulty: 0.6,
      chaos: 0.3,
      beaty: 0.7,
    },
    {
      id: 2,
      name: 'React',
      pain: 0.7,
      difficulty: 0.3,
      chaos: 1.0,
      beaty: 0.3,
    },
    {
      id: 3,
      name: 'Angular',
      pain: 1.0,
      difficulty: 0.5,
      chaos: 0.1,
      beaty: 0.05,
    },
    {
      id: 4,
      name: 'Django',
      pain: 0.4,
      difficulty: 0.5,
      chaos: 0.6,
      beaty: 0.2,
    },
    {
      id: 4,
      name: 'Node.js',
      pain: 1.0,
      difficulty: 1.0,
      chaos: 1.0,
      beaty: 0.0,
    },
    {
      id: 5,
      name: 'FastAPI',
      pain: 0.1,
      difficulty: 0.2,
      chaos: 0.2,
      beaty: 0.5,
    }
];

const productsRemake = products.map(product => {
    product.difficulty = `${product.difficulty * 100}%`;
    product.pain = `${product.pain * 100}%`;
    product.chaos = `${product.chaos * 100}%`;
    product.beaty = `${product.beaty * 100}%`;
    return product;
})

export function Practice() {
    return (
        <div className="card flex justify-content-center">
            <div className="card">
                <DataTable value={productsRemake} tableStyle={{ minWidth: '50rem' }}>
                    {columns.map(column => (
                        <Column  field={column.field} header={column.header}></Column>
                    ))}
                </DataTable>
            </div>
        </div>
    )
}