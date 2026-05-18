# HRnet Modal React Component

React Modal component for HRnet.

## Installation

```bash
npm install hrnet-modal-react-component-tz1
```

## Usage

```jsx
import React, { useState } from 'react';
import Modal from 'hrnet-modal-react-component-tz1';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>Employee Created!</p>
      </Modal>
    </div>
  );
};
```

## Props

| Prop | Type | Description |
| --- | --- | --- |
| `isOpen` | `boolean` | Controls whether the modal is visible. |
| `onClose` | `function` | Callback function triggered when the modal is closed (clicking the overlay or close button). |
| `children` | `node` | The content to be displayed inside the modal. |
