console.log(`
PARTICIPANTES

Agenor Junior
Ector Cunha
Gabriela Schneider
Matheus Braga Dias
Renan de Andrade
Ronaldo Fonseca
`);

console.log(`
SELECIONE O ITEM DO MENU E SEU TEMPO DESEJADO

1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão); 
`);

function selecionaMenu(comida, tempo) {
	const itens = ['Pipoca', 'Macarrão', 'Carne', 'Feijão', 'Brigadeiro'];

	const exibirComida = comida > 5 ? 'Não existe' : itens[comida - 1];

	console.log('COMIDA: ' + exibirComida);
	console.log('TEMPO: ' + tempo);
	console.log('');

	switch (comida) {
		case 1:
			if (tempo >= 10 * 3) {
				console.log('Kabum!');
			} else if (tempo >= 10 * 2) {
				console.log('Comida Queimou!');
			} else if (tempo < 10) {
				console.log('Tempo Insuficiente!');
			} else {
				console.log('Prato Pronto, bom apetite!');
			}

			break;

		case 2:
			if (tempo >= 8 * 3) {
				console.log('Kabum!');
			} else if (tempo >= 8 * 2) {
				console.log('Comida Queimou!');
			} else if (tempo < 8) {
				console.log('Tempo Insuficiente!');
			} else {
				console.log('Prato Pronto, bom apetite!');
			}

			break;

		case 3:
			if (tempo >= 15 * 3) {
				console.log('Kabum!');
			} else if (tempo >= 15 * 2) {
				console.log('Comida Queimou!');
			} else if (tempo < 15) {
				console.log('Tempo Insuficiente!');
			} else {
				console.log('Prato Pronto, bom apetite!');
			}

			break;

		case 4:
			if (tempo >= 12 * 3) {
				console.log('Kabum!');
			} else if (tempo >= 12 * 2) {
				console.log('Comida Queimou!');
			} else if (tempo < 12) {
				console.log('Tempo Insuficiente!');
			} else {
				console.log('Prato Pronto, bom apetite!');
			}

			break;

		case 5:
			if (tempo >= 8 * 3) {
				console.log('Kabum!');
			} else if (tempo >= 8 * 2) {
				console.log('Comida Queimou!');
			} else if (tempo < 8) {
				console.log('Tempo Insuficiente!');
			} else {
				console.log('Prato Pronto, bom apetite!');
			}

			break;

		default:
			console.log('Prato inexistente');
			break;
	}
}

selecionaMenu(5, 10);
