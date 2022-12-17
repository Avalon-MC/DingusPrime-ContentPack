onEvent('block.registry', event => {
	event.create('bowl_biscuits', 'basic').displayName('Bowl Biscuits').material('metal').speedFactor(0.85).defaultCutout().notSolid().noValidSpawns(True).suffocating(False).viewBlocking(False).redstoneConductor(False)
})
