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
});
