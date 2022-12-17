onEvent('block.registry', event => {
	event.create('bowl_fish', 'basic').displayName('Bowl Fish').material('metal').speedFactor(0.85).defaultCutout().notSolid().noValidSpawns(True).suffocating(False).viewBlocking(False).redstoneConductor(False)
})
