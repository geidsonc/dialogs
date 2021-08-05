$(function() {
	$('[name=info]').click(function() {
		dialog.info('Titulo do Diálogo', 'Corpo do Diálogo', function() {
			alert('Callback ao clicar em fechar');
		});
	});

	$('[name=confirm]').click(function() {
		dialog.confirm({
			title: 'Titulo do diálogo',
			message: 'Corpo do diálogo',
			confirm: {
				label: 'SIM',
				event: function() {
					alert('Callback ao clicar em SIM');
				}
			},
			cancel: {
				label: 'NÃO',
				event: function() {
					alert('Callback ao clicar em NÃO');
				}
			}
		});
	});

	$('[name="menu"]').click(function () {
		dialog.menu('Title',
			[
				{
					value: '1',
					label: 'Opção 1'
				},

				{
					value: '2',
					label: 'Opção 2'
				}
			],

			function (e) {
				var value = $(e.currentTarget).data('value');

				alert("Callback ao clicar na opção de valor " + value);
			}
		);
	});
});
