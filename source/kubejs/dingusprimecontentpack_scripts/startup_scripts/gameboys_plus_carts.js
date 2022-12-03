
onEvent('block.registry', event => {

	//Shelf
	event.create('oakshelf', 'shelf').material('wood').hardness(1.0).displayName('Oak Shelf').defaultCutout().box(0, 0, 12, 16, 16, 16, true)
	event.create('warped_shelf', 'shelf').material('wood').hardness(1.0).displayName('Warped Shelf').defaultCutout().box(0, 0, 12, 16, 16, 16, true)
	event.create('spruce_shelf', 'shelf').material('wood').hardness(1.0).displayName('Spruce Shelf').defaultCutout().box(0, 0, 12, 16, 16, 16, true)
	event.create('jungle_shelf', 'shelf').material('wood').hardness(1.0).displayName('Jungle Shelf').defaultCutout().box(0, 0, 12, 16, 16, 16, true)
	event.create('dark_oak_shelf', 'shelf').material('wood').hardness(1.0).displayName('Dark Oak Shelf').defaultCutout().box(0, 0, 12, 16, 16, 16, true)
	event.create('birch_shelf', 'shelf').material('wood').hardness(1.0).displayName('Birch Shelf').defaultCutout().box(0, 0, 12, 16, 16, 16, true)
	event.create('acacia_shelf', 'shelf').material('wood').hardness(1.0).displayName('Acacia Shelf').defaultCutout().box(0, 0, 12, 16, 16, 16, true)
	event.create('crimson_shelf', 'shelf').material('wood').hardness(1.0).displayName('Crimson Shelf').defaultCutout().box(0, 0, 12, 16, 16, 16, true)
	
})

onEvent('item.registry', event => {
	// Register new items here


	//Hand Helds
	
	event.create('gameboy_grey', 'gameboy').displayName('Grey hamazon FLINT').guiBG('default').tooltip("A handheld game player. Takes carts, Volume adjustable via the 'Voice\/Speech' slider")
	event.create('gameboy_red', 'gameboy').displayName('Red hamazon FLINT').guiBG('red').tooltip("A handheld game player. Takes carts, Volume adjustable via the 'Voice\/Speech' slider")
	event.create('gameboy_red_clear', 'gameboy').displayName('Red hamazon FLINT').guiBG('red_clear').tooltip("A handheld game player. Takes carts, Volume adjustable via the 'Voice\/Speech' slider")
	event.create('gameboy_purple', 'gameboy').displayName('Purple hamazon FLINT').guiBG('purple').tooltip("A handheld game player. Takes carts, Volume adjustable via the 'Voice\/Speech' slider")
	event.create('gameboy_purple_clear', 'gameboy').displayName('Purple hamazon FLINT').guiBG('purple_clear').tooltip("A handheld game player. Takes carts, Volume adjustable via the 'Voice\/Speech' slider")

	//Wave 1 - Homebrew

	event.create('flooder', 'gbcart').displayName('Flooder').gameID('flooder')
	event.create('gbcorp', 'gbcart').displayName('GB Corp').gameID('gbcorp')
	event.create('gb_wordyl_en', 'gbcart').displayName('GB Wordyl').gameID('gb_wordyl_en')
	event.create('mud_warriors', 'gbcart').displayName('Mud Warriors').gameID('mud_warriors')
	event.create('murdermansion', 'gbcart').displayName('Murder Mansion').gameID('murdermansion')
	event.create('petris', 'gbcart').displayName('Petris').gameID('petris')
	event.create('tinkercore', 'gbcart').displayName('TinkerCore').gameID('tinkercore')
	
	//
	event.create('tetris', 'gbcart').displayName('Tetris').gameID('tetris')
	
})

onEvent('shoptrade_registry', event => {
	// Register new Shop Trades here
	event.create('flooder').always().count(1).cost(110).shopResultType('item').shopType('custom2').result('kubejs:flooder')
	event.create('gbcorp').always().count(1).cost(120).shopResultType('item').shopType('custom2').result('kubejs:gbcorp')
	event.create('gb_wordyl_en').always().count(1).cost(100).shopResultType('item').shopType('custom2').result('kubejs:gb_wordyl_en')
	event.create('mud_warriors').always().count(1).cost(100).shopResultType('item').shopType('custom2').result('kubejs:mud_warriors')
	event.create('murdermansion').always().count(1).cost(90).shopResultType('item').shopType('custom2').result('kubejs:murdermansion')
	event.create('petris').always().count(1).cost(105).shopResultType('item').shopType('custom2').result('kubejs:petris')
	event.create('tinkercore').always().count(1).cost(130).shopResultType('item').shopType('custom2').result('kubejs:tinkercore')
	event.create('tetris').always().count(1).cost(150).shopResultType('item').shopType('custom2').result('kubejs:tetris')

	event.create('oakshelf_game').always().count(1).cost(25).shopResultType('block').shopType('custom2').result('kubejs:oakshelf')
	event.create('birch_shelf').always().count(1).cost(25).shopResultType('block').shopType('custom2').result('kubejs:birch_shelf')
	event.create('spruce_shelf').always().count(1).cost(25).shopResultType('block').shopType('custom2').result('kubejs:spruce_shelf')
	event.create('jungle_shelf').always().count(1).cost(25).shopResultType('block').shopType('custom2').result('kubejs:jungle_shelf')
	event.create('acacia_shelf').always().count(1).cost(25).shopResultType('block').shopType('custom2').result('kubejs:acacia_shelf')
	event.create('dark_oak_shelf').always().count(1).cost(25).shopResultType('block').shopType('custom2').result('kubejs:dark_oak_shelf')
	
	event.create('warped_shelf').always().count(1).cost(35).shopResultType('block').shopType('custom2').result('kubejs:warped_shelf')
	event.create('crimson_shelf').always().count(1).cost(35).shopResultType('block').shopType('custom2').result('kubejs:crimson_shelf')
	

	
	event.create('gameboy_grey').always().count(1).cost(1000).shopResultType('item').shopType('custom2').result('kubejs:gameboy_grey')
	event.create('gameboy_red').always().count(1).cost(1000).shopResultType('item').shopType('custom2').result('kubejs:gameboy_red')
	event.create('gameboy_red_clear').always().count(1).cost(1650).shopResultType('item').shopType('custom2').result('kubejs:gameboy_red_clear')
	event.create('gameboy_purple').always().count(1).cost(1000).shopResultType('item').shopType('custom2').result('kubejs:gameboy_purple')
	event.create('gameboy_purple_clear').always().count(1).cost(1650).shopResultType('item').shopType('custom2').result('kubejs:gameboy_purple_clear')

})


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

