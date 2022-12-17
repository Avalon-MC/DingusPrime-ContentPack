onEvent('block.registry', event => {
	event.create('bowl_water', 'basic').displayName('Bowl Water').material('metal').speedFactor(0.85).defaultCutout().notSolid().noValidSpawns(True).suffocating(False).viewBlocking(False).redstoneConductor(False)
})
