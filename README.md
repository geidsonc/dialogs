# Dialogs
> Dialogs for web and mobile

### Dependency

[jQuery](https://github.com/jquery/jquery)

## Usage

Simple and beautiful.

### Install

Using [bower](https://bower.io/)
```sh
bower install geidsonbc/dialogs --save
```

or [npm](https://npmjs.com/)
```sh
npm install dialogsjs
```

or [yarn](https://yarnpkg.com/)
```sh
yarn add dialogsjs
```

### Setup

Include:
```html
<script src="{your-url}/dialogs.min.js" charset="utf-8"></script>
<link rel="stylesheet" href="{your-url}/dialogs.min.css">
```

## Methods
1. dialog.**waiting**('Message');

2. dialog.**confirm**('Title', 'Message', function(){ `// confirm` }, function(){ `// cancel` });

3. dialog.**prompt**('Title', 'Message', 'Label', 'Selector', function(){ `// done` }, function(){ `// cancel` });

4. dialog.**modal**('Title', 'Message', function(){ `...` });

5. dialog.**info**('Title', 'Message', function(){ `...` });

6. dialog.**help**('Title', 'Message', { class: `...`, func: `...` });

7. dialog.**menu**('Title', [{ value: `...`, label: `...` }, `...` ], function(e){ `...` } );

8. dialog.**close**('Type');

### Examples
1. Info
```js
dialog.info('Titulo', 'Corpo', function() {
	alert('callback');
});
```

2. Confirm
```js
dialog.confirm({
	title: 'Titulo',
	message: 'Corpo',
	confirm: {
		label: 'SIM',
		event: function() {
			alert('callback');
		}
	},
	cancel: {
		label: 'NÃO',
		event: function() {
			alert('callback');
		}
	}
});
```

## Contributing

1. Fork it!
2. Create a new branch
3. Commit your changes
4. Push to the branch
5. Submit a pull request :D

## License
Licensed under the [MIT License](https://opensource.org/licenses/MIT).
