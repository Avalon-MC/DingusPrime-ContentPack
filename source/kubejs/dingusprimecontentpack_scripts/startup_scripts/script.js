
onEvent('item.registry', event => {
	// Register new items here
	event.create('petercashel_cashelcoin').displayName('CashelCoin').tooltip("A rare and exceptionally valueless coin. Destroying it would make someone sad though.")
})

onEvent('block.registry', event => {
	// Register new blocks here
	event.create('petercashel_cashelcoinblock').material('wood').hardness(1.0).displayName('CashelCoin Block')
})