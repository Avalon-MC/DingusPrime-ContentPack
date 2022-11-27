

onEvent('rom_registry', event => {
	// Register new Roms here
	
	//Wave 1 - Homebrew
	
	event.create('flooder').romPath('kubejs:rom/flooder.gb')
	event.create('gbcorp').romPath('kubejs:rom/gbcorp.gb')
	event.create('gb_wordyl_en').romPath('kubejs:rom/gb_wordyl_en.gb')
	event.create('mud_warriors').romPath('kubejs:rom/mud_warriors.gb')
	event.create('murdermansion').romPath('kubejs:rom/murdermansion.gb')
	event.create('petris').romPath('kubejs:rom/petris_1_1.gbc')
	event.create('tinkercore').romPath('kubejs:rom/tinkercore.gb')
	
	//	
	event.create('tetris').romPath('kubejs:rom/tetris.gb')
})

