# Masks

### Using

Simple use
```js
import masks from './masks';

const zipCodeMasked = masks.zip_code('00000000');

console.log(zipCodeMasked); // Output is 00000-000

console.log(masks.unmask(zipCodeMasked)); // Output is 00000000;
```

You can use with anything

### ReactJS (uncontroled input)
```jsx
import React, { useRef, useCallback } from 'react';

import PropTypes from 'prop-types';

import masks from './masks';

const Input = ({ name, mask }) => {
  const inputRef = useRef();

  const handleChangeInput = useCallback(e => {
    const { value } = e.target;

    if (mask) {
      if (!masks[mask]) throw new Error('Máscara não definida'); 
      
      e.target.value = masks[mask](value)
    };

  }), [masks, mask];

  return (
    <input
      ref={inputRef}
      type="text"
      name={name}
      onChange={handleChangeInput}
    />
  );
};

Input.defaultProps = {
  mask: '',
};

Input.propTypes = {
  mask: PropTypes.string,
  name: PropTypes.string.isRequired,
};

const App = () => {
  return <Input name="zipCode" mask="zip_code" />;
};

export default App;
```

### React Native (uncontroled input)
```jsx
import React, { useRef, useCallback } from 'react';

import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import masks from './masks';

const Input = ({ name, mask }) => {
  const inputRef = useRef();

  const handleOnChange = useCallback((text) => {
    if (mask) {
      if (!masks[mask]) throw new Error('Máscara não definida');

      const maskedValue = masks[mask](text);
      inputRef.current.value = maskedValue;
      inputRef.current.setNativeProps({
        text: maskedValue,
      });
    }
  }, []);

  return (
    <TextInput
      ref={inputRef}
      onChange={handleChangeInput}
    />
  );
};

Input.defaultProps = {
  mask: '',
};

Input.propTypes = {
  mask: PropTypes.string,
  name: PropTypes.string.isRequired,
};

const App = () => {
  return <Input name="zipCode" mask="zip_code" />;
};

export default App;
```
