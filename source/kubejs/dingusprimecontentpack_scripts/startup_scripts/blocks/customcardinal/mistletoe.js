onEvent('block.registry', event => {
	event.create('mistletoe', 'customcardinal').displayName('Mistletoe').material('wood').defaultCutout().notSolid().noValidSpawns(true).suffocating(false).viewBlocking(false).redstoneConductor(false)
})
