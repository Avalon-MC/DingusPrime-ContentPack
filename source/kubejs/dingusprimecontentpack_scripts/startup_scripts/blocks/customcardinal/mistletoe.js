onEvent('block.registry', event => {
	event.create('mistletoe', 'customcardinal').displayName('Mistletoe').material('wood').defaultCutout().noCollision().noValidSpawns(true).suffocating(false).viewBlocking(false).redstoneConductor(false).box(0, 0, 0, 16, 16, 16, true)
})
