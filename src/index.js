// Standard imports
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Local imports
import reducer from './reducers';
import App from './app';

// Pages
import PageHome from './pages/home';
import PageSVM from './pages/demos/svm';
import PageKNN from './pages/demos/knn';
import PageLogisticRegression from './pages/demos/logistic-regression';
import PagePerceptron from './pages/demos/perceptron';

// Styles
import './style/index.scss';

// Store
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App>
        <Route exact path="/" component={PageHome} />
        <Route exact path="/demos/svm" component={PageSVM} />
        <Route exact path="/demos/knn" component={PageKNN} />
        <Route exact path="/demos/logistic-regression" component={PageLogisticRegression} />
        <Route exact path="/demos/perceptron" component={PagePerceptron} />
      </App>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
