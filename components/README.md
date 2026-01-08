# Components

This folder contains reusable React components for your application.

## Structure

```
components/
├── ui/           # Basic UI components (buttons, inputs, etc.)
└── README.md     # This file
```

## Usage

Components are organized by category:

- **ui/**: Basic, reusable UI components (Button, Input, Card, etc.)
- Add more folders as needed: `layout/`, `forms/`, `features/`, etc.

## Example

```tsx
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  );
}
```

## Adding New Components

1. Create component file in appropriate folder
2. Use TypeScript for type safety
3. Export component at the end
4. Follow existing naming conventions
