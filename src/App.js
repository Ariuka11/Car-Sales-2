import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {useDispatch, useSelector} from 'react-redux'
import {removeFeatures, addFeature} from './action/action'

const App = (props) => {
  
  const car = useSelector(state => state.car)
  const additionalFeatures = useSelector(state => state.additionalFeatures)
  const additionalPrice = useSelector(state => state.additionalPrice)
  const dispatch = useDispatch();

  const removeFeature = item => {
    // dispatch an action here to remove an item
    dispatch(removeFeatures(item))
  };

  const buyItem = item => {
    dispatch(addFeature(item))
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeature = {removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures} buyItem = {buyItem}/>
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     car: state.car,
//     additionalFeatures: state.additionalFeatures,
//     additionalPrice: state.additionalPrice
//   }
// }

// export default connect(mapStateToProps, {removeFeature, addFeature})(App);
export default App;