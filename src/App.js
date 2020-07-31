import React, { useState } from 'react'
import './App.css'
import './components/Burger.css'
import Menu from './components/Menu'
import Ingredients from './components/ingredients/Ingredients'
import BreadTop from './components/ingredients/BreadTop'
import BreadBottom from './components/ingredients/BreadBottom'
import Price from './components/ingredients/Price'
import Meat from './components/ingredientIcons/meat.jpeg'
import Bacon from './components/ingredientIcons/bacon.png'
import Cheese from './components/ingredientIcons/cheese.jpeg'
import Salad from './components/ingredientIcons/salad.jpg'

const INGREDIENTS = [
  { name: 'Meat', price: 50, image: Meat },
  { name: 'Bacon', price: 30, image: Bacon },
  { name: 'Cheese', price: 20, image: Cheese },
  { name: 'Salad', price: 5, image: Salad }
]

const App = () => {

  const [ingredients, setIngredients] = useState([
    { name: 'Meat', count: 0 },
    { name: 'Bacon', count: 0 },
    { name: 'Cheese', count: 0 },
    { name: 'Salad', count: 0 },
  ])

  const [price, setPrice] = useState(0);

  const [menu, setMenu] = useState([
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
  ])

  const addMenu = (i) => {
    let arr = [...menu]
    arr.push({ name: i })
    setMenu(arr)
  };

  const removeMenu = (e) => {
    let arr = [...menu];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === e) {
        arr.splice(i, 1);
        break;
      }
    }
    setMenu(arr);
  };

  const addCount = (i) => {
    const copyMenu = [...ingredients];
    const copyIngredient = { ...ingredients[i] };
    copyMenu[i] = copyIngredient;
    copyMenu[i].count++;
    setIngredients(copyMenu);
  };

  const removeCount = (i) => {
    const copyMenu = [...ingredients];
    const copyIngredient = { ...ingredients[i] };
    copyMenu[i] = copyIngredient;
    if (copyMenu[i].count > 0) {
      copyMenu[i].count--;
      setIngredients(copyMenu);
    }
  };

  const addPrice = (i) => {
    setPrice(price + INGREDIENTS[i].price);
  };

  const removePrice = (i) => {
    if (ingredients[i].count > 0) {
      setPrice(price - INGREDIENTS[i].price);
    }
  };

  return (
    <div className="App">
      <div className='Menu'>
        <p style={{ paddingBottom: '20px', textAlign: 'center' }}>Choose
          Ingredients</p>
        {INGREDIENTS.sort(
          (a, b) => {return ('' + a.name).localeCompare(b.name)})
          .map((elem, index) => {
            return (<Menu
              key={index}
              icon={elem.image}
              name={elem.name}
              counter={ingredients[index].count}
              addClick={() => {
                addMenu(elem.name)
                addCount(index)
                addPrice(index)
              }}
              removeClick={() => {
                removeMenu(elem.name)
                removeCount(index)
                removePrice(index)
              }}
            />);
          })}
      </div>
      <div>
        <p style={{ paddingBottom: '20px', textAlign: 'center' }}>You Burger</p>
        <div className='Burger'>
          <BreadTop/>
          {menu.sort((a, b) => {return ('' + a.name).localeCompare(b.name)})
            .map((item, index) => {
              return (<Ingredients
                key={index}
                ingredients={item.name}
              />);
            })}
          <BreadBottom/>
        </div>
        <Price price={price + 20}/>
      </div>
    </div>
  )
}

export default App
