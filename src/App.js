import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductList/ProductList';
import { Form } from './components/Form/Form';
// import { useTelegram } from './hooks/useTelegram';
import { SpeedDialButton } from './components/SpeedDialButton/SpeedDialButton';


const products = [
  {id: '1', title: "Helicopter#1", price: 350000000, description: "Летает, не бит не крашен", image: "https://gtaman.ru/sites/default/files/styles/large/public/field/image/n4tiyp.jpg?itok=pZZPPjMP"},
  {id: '2', title: "Helicopter#2", price: 450000000, description: "Летала девушка, один хозяин", image: "https://libertycity.ru/uploads/posts/2022-11/thumbs/1668709782_1427654193_policemaverick-gtasa-front.jpg"},
  {id: '3', title: "Helicopter#3", price: 550000000, description: "Летал только в выходные", image: "https://gtaman.ru/sites/default/files/styles/large/public/field/image/n4tiyp.jpg?itok=pZZPPjMP"},
  {id: '4', title: "Helicopter#4", price: 650000000, description: "Заливали только ракетное топливо", image: "https://gtaman.ru/sites/default/files/styles/large/public/field/image/n4tiyp.jpg?itok=pZZPPjMP"},
  {id: '5', title: "Helicopter#5", price: 750000000, description: "Обмен на квартиру", image: "https://gtaman.ru/sites/default/files/styles/large/public/field/image/n4tiyp.jpg?itok=pZZPPjMP"},
  {id: '6', title: "Helicopter#6", price: 850000000, description: "Продам гараж, в подарок вертолет, торг, обмен, рассрочка, кредит, лизинг", image: "https://gtaman.ru/sites/default/files/styles/large/public/field/image/n4tiyp.jpg?itok=pZZPPjMP"},
]

function App() {

  // const { tg } = useTelegram()

  useEffect(() => {
    const tg = window.Telegram.WebApp
    tg.ready()
  }, [])

  return (
    <div className="App">
      <Header>Заголовок</Header>
      <Routes>
        <Route index element={<ProductList products={ products }/>}></Route>
        <Route path={'form'} element={<Form />}></Route>
      </Routes>
      <SpeedDialButton products={products}/>
    </div>
  );
}

export default App;
