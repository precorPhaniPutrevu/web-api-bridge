import React, { useState, useEffect } from 'react';
import { startApis } from 'webapp-library';
import Type1 from './Type1';
import Type2 from './Type2';
import './App.css';

const parentOrigin = process.env.REACT_APP_PARENT_ORIGIN;

const App = () => {
  console.log('webapp1 render');
  const [loadedType, setLoadedType] = useState();
  const [canModPhotos, setCanModPhotos] = useState();

  useEffect(() => {
    console.log('Calling startApis in webapp1');
    startApis(parentOrigin, (message) => {console.log(message);}).then(({ type, apis }) => {
      console.log(`webapp1 type = ${type}`);
      setCanModPhotos(!!apis.find(api => api === 'Api3'));
      setLoadedType(type);
    });
  }, []);

  if (!loadedType) return null;
  if (loadedType === 'LibType1') return <Type1 />;
  return <Type2 canModPhotos={canModPhotos} />;
};

export default App;
