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

2. dialog.**confirm**('Title', 'Message', function(){ `// confirm` }, function(){ `// cancel` }, 'CSS Classes');

3. dialog.**prompt**('Title', 'Message', 'Label', 'Selector', function(){ `// done` }, function(){ `// cancel` }, 'CSS Classes');

4. dialog.**modal**('Title', 'Message', function(){ `...` });

5. dialog.**info**('Title', 'Message', function(){ `...` }, 'CSS Classes');

6. dialog.**help**('Title', 'Message', { class: `...`, func: `...` });

7. dialog.**menu**('Title', [{ value: `...`, label: `...` }, `...` ], function(e){ `...` }, 'CSS Classes');

8. dialog.**close**('Type');

> For a while, only **confirm** method acceps an object as parameter (see the example below).

> The methods that accepts CSS classes will apply the classes on element contains the .modal class. Many classes can be passed as a string separated by empty spaces.

## Default CSS size classes
```css
	.modal-sm
		width: 300px
	.modal-md
		width: 500px
	.modal-lg
		width: 800px
	.dialog-full
		width: calc(100% - 30px);
```
> If no size class is passed as paremeter to the method, the size of dialog will be 350px.

> As long as the screen width is less than 800px, size classes will not have any effect. The dialog size will be 90% of the screen size.

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
	},
	classes: 'dialog-lg',
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
