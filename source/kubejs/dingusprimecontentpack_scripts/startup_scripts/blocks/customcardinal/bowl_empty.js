onEvent('block.registry', event => {
	event.create('bowl_empty', 'customcardinal').displayName('Bowl Empty').material('metal').speedFactor(0.85).defaultCutout().noValidSpawns(true).suffocating(false).viewBlocking(false).redstoneConductor(false).box(0, 0, 0, 16, 2, 16, true).box(0, 2, 0, 16, 5, 1, true).box(0, 2, 15, 16, 5, 16, true).box(15, 2, 1, 16, 5, 15, true).box(0, 2, 1, 1, 5, 15, true)
})

onEvent('shoptrade_registry', event => {
	event.create('shop_furniture_bowl_empty').shopType('furniture').result('kubejs:bowl_empty').shopResultType('block').count('1').cost('10')
})

