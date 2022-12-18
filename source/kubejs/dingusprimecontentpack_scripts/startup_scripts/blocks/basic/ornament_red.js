onEvent('block.registry', event => {
	event.create('ornament_red', 'basic').displayName('Ornament Red').material('metal').lightLevel(5).defaultCutout().notSolid().noValidSpawns(true).suffocating(false).viewBlocking(false).redstoneConductor(false).box(6, 6, 6, 10, 10, 10, true).box(7, 10, 7, 9, 11, 9, true)
})
