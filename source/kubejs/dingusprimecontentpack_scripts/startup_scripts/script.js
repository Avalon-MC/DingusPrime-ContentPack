
onEvent('block.registry', event => {
	// Register new blocks here
	event.create('petercashel_cashelcoinblock').material('wood').hardness(1.0).displayName('CashelCoin Block')
	
	
	//  SAVED ID ->  BLOCK NAME 			 MAT                                                         
	event.create('tombstone_1').material('stone').hardness(1.0).displayName('Decorative Tombstone 1').defaultCutout()
	event.create('tombstone_2').material('stone').hardness(1.0).displayName('Decorative Tombstone 2').defaultCutout()
	event.create('tombstone_3').material('stone').hardness(1.0).displayName('Decorative Tombstone 3').defaultCutout()
	event.create('tombstone_4_bottom').material('stone').hardness(1.0).displayName('Decorative Tombstone 4').defaultCutout()
	event.create('tombstone_5_bottom').material('stone').hardness(1.0).displayName('Decorative Tombstone 5').defaultCutout()
	event.create('tombstone_6').material('stone').hardness(1.0).displayName('Decorative Tombstone 6').defaultCutout()
	event.create('tombstone_7_bottom').material('stone').hardness(1.0).displayName('Decorative Tombstone 7').defaultCutout()
	event.create('tombstone_4_top').material('stone').hardness(1.0).displayName('Decorative Tombstone 4 Top').defaultCutout()
	event.create('tombstone_5_top').material('stone').hardness(1.0).displayName('Decorative Tombstone 5 Top').defaultCutout()
	event.create('tombstone_7_top').material('stone').hardness(1.0).displayName('Decorative Tombstone 7 Top').defaultCutout()
	
	//customcardinal
	event.create('tombstone_1_new', 'customcardinal').material('stone').hardness(1.0).displayName('Decorative Tombstone 1').defaultCutout()
})


onEvent('item.registry', event => {
	// Register new items here
	event.create('petercashel_cashelcoin').displayName('CashelCoin').tooltip("A rare and exceptionally valueless coin. Destroying it would make someone sad though.")
	
	
	event.create('hamazon_flint', 'gameboy').displayName('hamazon FLINT').tooltip("A rare and exceptionally... wait this has batteries in it...")
	event.create('hamazon_flint_red', 'gameboy').displayName('Red hamazon FLINT').tooltip("A rare and exceptionally... wait this has batteries in it...").guiBG('red')
	event.create('hamazon_flint_purple', 'gameboy').displayName('Purple hamazon FLINT').tooltip("A rare and exceptionally... wait this has batteries in it...").guiBG('purple')

	//event.create('testgame', 'gbcart').displayName('TestGame').gameID('testgame').parentModel('kubejs:item/gbcart')
	//event.create('tetrisdx', 'gbcart').displayName('Tetris DX').gameID('tetrisdx')
	//event.create('pkmonred', 'gbcart').displayName('Pokemon Red').gameID('pkmonred').parentModel('kubejs:item/gbcart')
	
})

onEvent('rom_registry', event => {
	// Register new Roms here
	//event.create('testgame').romPath('kubejs:rom/testgame.gb')
	//event.create('tetrisdx').romPath('kubejs:rom/tetrisdx.gbc')
	//event.create('pkmonred').romPath('kubejs:rom/pkmonred.gbc')
})

onEvent('shoptrade_registry', event => {
	// Register new Shop Trades here
	event.create('tombstone_1').shopType('furniture').result('kubejs:tombstone_1').shopResultType('block').count(3).cost(5)
	event.create('tombstone_2').shopType('furniture').result('kubejs:tombstone_2').shopResultType('block').count(2).cost(2)
	event.create('tombstone_3').shopType('furniture').result('kubejs:tombstone_3').shopResultType('block').count(3).cost(6)
	event.create('cobblestone').shopType('general').result('cobblestone').shopResultType('block').count(64).cost(1).always()
})