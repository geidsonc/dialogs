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

### Import

Use:
```html
<script src="{your-url}/dialogs.min.js" charset="utf-8"></script>
<link rel="stylesheet" href="{your-url}/dialogs.min.css">
```

### Methods
1. Info
```js
dialog.info('Titulo do Alerta', 'Corpo do alerta', function() {
	alert('evento ao clicar em fechar');
});
```

2. Confirm
```js
dialog.confirm({
	title: 'Titulo do Alerta',
	message: 'Corpo do alerta',
	confirm: {
		label: 'SIM',
		event: function() {
			alert('evento ao clicar em sim');
		}
	},
	cancel: {
		label: 'NÃO',
		event: function() {
			alert('evento ao clicar em não');
		}
	}
});
```
