# Dialogs
Dialogs for web and mobile

## Dependency

1. [jQuery](https://jquery.com/download/)

## Use

Simple and beautiful.

### Download

1. bower
```sh
bower install geidsonbc/dialogs --save
```

or

2. npm
```sh
npm install dialogsjs
```

or

3. yarn
```sh
yarn add dialogsjs
```

### Import

Use:
```html
<script src="{your-url}/dialogs.min.js" charset="utf-8"></script>
<link rel="stylesheet" href="{your-url}/dialogs.min.css">
```

### Methods
1. Info
```js
dialog.info('Titulo do diálogo', 'Corpo do diálogo', function() {
	alert('callback ao clicar em fechar');
});
```

2. Confirm
```js
dialog.confirm({
	title: 'Titulo do diálogo',
	message: 'Corpo do diálogo',
	confirm: {
		label: 'SIM',
		event: function() {
			alert('callback ao clicar em sim');
		}
	},
	cancel: {
		label: 'NÃO',
		event: function() {
			alert('callback ao clicar em não');
		}
	}
});
```

```js
dialog.confirm('Titulo do diálogo', 'Corpo do diálogo', function(){ console.log('confirmação') }, function(){ console.log('cancelar') });
```
