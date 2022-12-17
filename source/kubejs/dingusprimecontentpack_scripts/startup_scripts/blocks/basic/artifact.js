onEvent('block.registry', event => {
	event.create('artifact', 'basic').displayName('Artifact').material('metal').hardness(2.50).noValidSpawns(false).suffocating(true).viewBlocking(true).redstoneConductor(true)
})
