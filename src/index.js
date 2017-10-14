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
import PageSVM from './pages/demos/classification/svm';
import PageKNN from './pages/demos/classification/knn';
import PageLogisticRegression from './pages/demos/classification/logistic-regression';
import PagePerceptron from './pages/demos/classification/perceptron';
import PageKMeans from './pages/demos/clustering/k-means';

// Styles
import './style/index.scss';

// Store
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App>
        <Route exact path="/" component={PageHome} />
        <Route exact path="/demos/classification/svm" component={PageSVM} />
        <Route exact path="/demos/classification/knn" component={PageKNN} />
        <Route exact path="/demos/classification/logistic-regression" component={PageLogisticRegression} />
        <Route exact path="/demos/classification/perceptron" component={PagePerceptron} />
        <Route exact path="/demos/clustering/k-means" component={PageKMeans} />
      </App>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
