onEvent('block.registry', event => {
	event.create('bowl_water', 'basic').displayName('Bowl Water').material('metal').speedFactor(0.85).defaultCutout().noValidSpawns(False).suffocating(False).viewBlocking(True).redstoneConductor(False)
})
