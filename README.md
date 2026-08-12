# @Girish/buttonpackage

Reusable React Button component.

## Installation

```bash
npm install @Girish/buttonpackage
```

## Usage

```tsx
import React from 'react';
import { Button } from '@Girish/buttonpackage';

export default function App() {
  return (
    <Button
      id="primary-btn"
      className="btn btn-primary"
      label="Click me"
      onClick={() => console.log('clicked')}
    />
  );
}
```

## Props

- label: string | React.ReactNode (required)
- id?: string
- className?: string
- onClick?: () => void
- disabled?: boolean
- Supports native button attributes via React.ButtonHTMLAttributes

## Development

```bash
npm run build
npm run pack:check
```

## License

ISC
