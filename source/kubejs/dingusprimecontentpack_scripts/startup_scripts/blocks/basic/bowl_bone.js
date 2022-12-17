onEvent('block.registry', event => {
	event.create('bowl_bone', 'basic').displayName('Bowl Bone').material('metal').speedFactor(0.85).defaultCutout().notSolid().noValidSpawns(True).suffocating(False).viewBlocking(False).redstoneConductor(False)
})
