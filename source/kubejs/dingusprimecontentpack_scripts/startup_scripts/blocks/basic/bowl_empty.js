onEvent('block.registry', event => {
	event.create('bowl_empty', 'basic').displayName('Bowl Empty').material('metal').speedFactor(0.85).defaultCutout().notSolid().noValidSpawns(True).suffocating(False).viewBlocking(False).redstoneConductor(False)
})
