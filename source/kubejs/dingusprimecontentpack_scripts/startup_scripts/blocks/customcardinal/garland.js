onEvent('block.registry', event => {
	event.create('garland', 'customcardinal').displayName('Garland').material('wood').defaultCutout().notSolid().noValidSpawns(true).suffocating(false).viewBlocking(false).redstoneConductor(false).noCollision().box(0, 7, 14, 16, 9, 16, true)
})
