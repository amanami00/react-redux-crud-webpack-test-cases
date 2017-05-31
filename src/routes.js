import React from 'react';
import { Route } from 'react-router';
import Category from './components/category/category';

export default (
    <Route>
        <Route path="/" component={ Category } />
        <Route path="/categories" component={ Category } />
    </Route>
);
