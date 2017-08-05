$(function() {
	$('[name=info]').click(function() {
		dialog.info('Titulo do Alerta', 'Corpo do alerta', function() {
			alert('evento ao clicar em fechar');
		});
	});

	$('[name=confirm]').click(function() {
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
	});
});
