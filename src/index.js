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
import PageClassifierDemo from './pages/demos/classification';
import PageClustererDemo from './pages/demos/clustering';

// Styles
import './style/index.scss';

// Store
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App>
        <Route exact path="/" component={PageHome} />
        <Route exact path="/demos/classification/decision-tree" render={props => <PageClassifierDemo classifier="DecisionTree" {...props} /> } />
        <Route exact path="/demos/classification/knn" render={props => <PageClassifierDemo classifier="LogisticRegression" {...props} /> } />
        <Route exact path="/demos/classification/logistic-regression" render={props => <PageClassifierDemo classifier="KNN" {...props} /> } />
        <Route exact path="/demos/classification/neural-network" render={props => <PageClassifierDemo classifier="NeuralNetwork" {...props} /> } />
        <Route exact path="/demos/classification/perceptron" render={props => <PageClassifierDemo classifier="Perceptron" {...props} /> } />
        <Route exact path="/demos/classification/random-forest" render={props => <PageClassifierDemo classifier="RandomForest" {...props} /> } />
        <Route exact path="/demos/classification/svm" render={props => <PageClassifierDemo classifier="SVM" {...props} /> } />
        <Route exact path="/demos/clustering/k-means" render={props => <PageClustererDemo clusterer="KMeans" {...props} /> } />
      </App>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
