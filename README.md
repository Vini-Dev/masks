# Masks

### Using

Simple use
```js
import masks from './masks';

const zipcodeMasked = masks.zipcode('00000000');

console.log(zipcodeMasked); // Output is 00000-000

console.log(masks.unmask(zipcodeMasked)); // Output is 00000000;
```

You can use with anything

### ReactJS (uncontroled input)
```jsx
import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

import masks from './masks';

const Input = ({ name, mask }) => {
  const inputRef = useRef();

  const handleChnageInput = useCallback(e => {
    const { value } = e.target;

    if (mask && masks[mask]) e.target.value = masks[mask](value);
  });

  return (
    <input
      ref={inputRef}
      type="text"
      name={name}
      onChange={handleChnageInput}
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
  return <Input name="zipcode" mask="zipcode" />;
};

export default App;
```
