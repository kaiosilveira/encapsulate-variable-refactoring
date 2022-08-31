# encapsulate-variable-refactoring

🚧 **WORK IN PROGRESS** 🚧

Working example with detailed commit history on the "encapsulate variable" refactoring from the Refactoring book by Fowler

## Working example

### Before

- `caller.js`:

```javascript
let defaultOwner = { firstName: 'Kaio', lastName: 'Silveira' };
let spaceship = { name: 'Nebuchadnezzar' };

spaceship.owner = defaultOwner;

defaultOwner.firstName = 'Morpheus';
defaultOwner.lastName = '';

console.log(spaceship.owner);
```

### After

### Commit history

### Test suite

### Steps
