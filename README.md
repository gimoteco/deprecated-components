# deprecated-components

Simple ways to deprecate a React component. Currently this lib shows a warning on console 

## Getting started

### with high order components (HOC) 

```typescript
import deprecatedComponents from 'deprecated-components'

const MySampleComponent = () => null

export default deprecatedComponents('some reason to deprecate', MySampleComponent) 
```
