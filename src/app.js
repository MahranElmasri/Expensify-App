import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import {addExpense} from './actions/expences';
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css'
import './styles/style.scss';

const store=configureStore();

store.dispatch(addExpense({ description: 'Water Bill' }));
store.dispatch(addExpense({ description:'Gas Bill'}))
store.dispatch(setTextFilter('gas'))

const state=store.getState();
const visibleExpense =getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpense)
// console.log(store.getState());

ReactDOM.render(<AppRouter />,document.getElementById('app'))