
onEvent('block.registry', event => {
	// Register new blocks here
	event.create('petercashel_cashelcoinblock').material('wood').hardness(1.0).displayName('CashelCoin Block')
	
	
	//  SAVED ID ->  BLOCK NAME 			 MAT                                                         
	event.create('tombstone_1').material('stone').hardness(1.0).displayName('Decorative Tombstone 1').defaultCutout().box(2, 0, 2, 14, 16, 6, true)
	event.create('tombstone_2').material('stone').hardness(1.0).displayName('Decorative Tombstone 2').defaultCutout().box(2, 0, 2, 14, 16, 6, true)
	event.create('tombstone_3').material('stone').hardness(1.0).displayName('Decorative Tombstone 3').defaultCutout().box(2, 0, 2, 14, 16, 6, true)
	event.create('tombstone_4_bottom').material('stone').hardness(1.0).displayName('Decorative Tombstone 4').defaultCutout().box(1, 0, 1, 15, 4, 15, true).box(4, 0, 4, 12, 16, 12, true)
	event.create('tombstone_5_bottom').material('stone').hardness(1.0).displayName('Decorative Tombstone 5').defaultCutout().box(1, 0, 1, 15, 4, 15, true).box(4, 0, 4, 12, 16, 12, true)
	event.create('tombstone_6').material('stone').hardness(1.0).displayName('Decorative Tombstone 6').defaultCutout().box(2, 0, 2, 14, 16, 6, true)
	event.create('tombstone_7_bottom').material('stone').hardness(1.0).displayName('Decorative Tombstone 7').defaultCutout().box(1, 0, 1, 15, 4, 15, true).box(4, 0, 4, 12, 16, 12,  true)
	event.create('tombstone_4_top').material('stone').hardness(1.0).displayName('Decorative Tombstone 4 Top').defaultCutout().box(2, 0, 5, 14, 9, 11, true)
	event.create('tombstone_5_top').material('stone').hardness(1.0).displayName('Decorative Tombstone 5 Top').defaultCutout().box(2, 0, 5, 14, 9, 11, true)
	event.create('tombstone_7_top').material('stone').hardness(1.0).displayName('Decorative Tombstone 7 Top').defaultCutout().box(2, 0, 5, 14, 9, 11, true)
	
	//customcardinal
	event.create('tombstone_1_new', 'customcardinal').material('stone').hardness(1.0).displayName('Decorative Tombstone 1').defaultCutout().box(2, 0, 10, 14, 16, 14, true)
})


onEvent('item.registry', event => {
	// Register new items here
	event.create('petercashel_cashelcoin').displayName('CashelCoin').tooltip("A rare and exceptionally valueless coin. Destroying it would make someone sad though.")
	
	
	event.create('gameboy_grey', 'gameboy').displayName('Grey hamazon FLINT').guiBG('default').tooltip("A handheld game player. Takes carts, Volume adjustable via the 'Voice\/Speech' slider")
	event.create('gameboy_red', 'gameboy').displayName('Red hamazon FLINT').guiBG('red').tooltip("A handheld game player. Takes carts, Volume adjustable via the 'Voice\/Speech' slider")
	event.create('gameboy_red_clear', 'gameboy').displayName('Red hamazon FLINT').guiBG('red_clear').tooltip("A handheld game player. Takes carts, Volume adjustable via the 'Voice\/Speech' slider")
	event.create('gameboy_purple', 'gameboy').displayName('Purple hamazon FLINT').guiBG('purple').tooltip("A handheld game player. Takes carts, Volume adjustable via the 'Voice\/Speech' slider")
	event.create('gameboy_purple_clear', 'gameboy').displayName('Purple hamazon FLINT').guiBG('purple_clear').tooltip("A handheld game player. Takes carts, Volume adjustable via the 'Voice\/Speech' slider")

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