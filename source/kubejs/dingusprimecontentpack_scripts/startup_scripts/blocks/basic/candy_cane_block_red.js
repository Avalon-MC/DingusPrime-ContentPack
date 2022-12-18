onEvent('block.registry', event => {
	event.create('candy_cane_block_red', 'basic').displayName('Candy Cane Block Red').material('vegetable').lightLevel(5).defaultCutout().notSolid().noValidSpawns(true).suffocating(false).viewBlocking(false).redstoneConductor(false)
})
