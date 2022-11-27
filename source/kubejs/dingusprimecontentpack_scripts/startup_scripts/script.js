
onEvent('block.registry', event => {
	// Register new blocks here
	event.create('petercashel_cashelcoinblock').material('wood').hardness(1.0).displayName('CashelCoin Block')
	

	//TODO Convert to customcardinal by creating blockstates for them and renaming
	//  SAVED ID ->  BLOCK NAME 			 MAT                                                         
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
	event.create('tombstone_1', 'customcardinal').material('stone').hardness(1.0).displayName('Decorative Tombstone 1').defaultCutout().box(2, 0, 10, 14, 16, 14, true)	
	
	
	//Chair
	//event.create('tombstone_1_sit', 'chair').material('stone').hardness(1.0).displayName('Decorative Tombstone 1 chair').defaultCutout().box(2, 0, 10, 14, 16, 14, true).sitOffset(-0.5)
		
	
	//Shelf
	//event.create('gameshelf', 'shelf').material('wood').hardness(1.0).displayName('Cart Shelf').defaultCutout().box(0, 0, 12, 16, 16, 16, true)

	
	//Cabnet
	event.create('cabinet', 'cabinet').material('wood').hardness(1.0).displayName('cabnet').defaultCutout().addBox(2, 0, 2, 12, 16, 4, true)

	//Lamp
	event.create('lamp_base', 'lamp_post').material('wood').hardness(1.0).displayName('lamp_base').addBox(7, 1, 7, 2, 15, 2, false).addBox(1,0,1,14,1,14, false)
	event.create('lamp_post', 'lamp_post').material('wood').hardness(1.0).displayName('lamp_post').addBox(7, 0, 7, 2, 16, 2, false)
	event.create('lamp_top', 'lamp_top').material('wood').hardness(1.0).displayName('lamp_top')


	//Flatpack
    event.create('pak_lamptest', 'flatpack').displayName('LampPack').AddItem('lamp_base', 1).AddItem('lamp_post', 2).AddItem('lamp_top', 1)
	
    event.create('pak_tombstone_4', 'flatpack').displayName('Decorative Tombstone 4').AddItem('tombstone_4_bottom', 1).AddItem('tombstone_4_top', 1)
    event.create('pak_tombstone_5', 'flatpack').displayName('Decorative Tombstone 5').AddItem('tombstone_5_bottom', 1).AddItem('tombstone_5_top', 1)
    event.create('pak_tombstone_7', 'flatpack').displayName('Decorative Tombstone 7').AddItem('tombstone_7_bottom', 1).AddItem('tombstone_7_top', 1)

})


onEvent('item.registry', event => {
	// Register new items here
	event.create('petercashel_cashelcoin').displayName('CashelCoin').tooltip("A rare and exceptionally valueless coin. Destroying it would make someone sad though.")
	
})


onEvent('shoptrade_registry', event => {
	// Register new Shop Trades here
	event.create('tombstone_1').shopType('furniture').result('kubejs:tombstone_1').shopResultType('block').count(1).cost(75)
	event.create('tombstone_2').shopType('furniture').result('kubejs:tombstone_2').shopResultType('block').count(1).cost(75)
	event.create('tombstone_3').shopType('furniture').result('kubejs:tombstone_3').shopResultType('block').count(1).cost(75)
	event.create('tombstone_6').shopType('furniture').result('kubejs:tombstone_6').shopResultType('block').count(1).cost(75)
	
	event.create('pak_tombstone_4').shopType('furniture').result('kubejs:pak_tombstone_4').shopResultType('block').count(1).cost(75)
	event.create('pak_tombstone_5').shopType('furniture').result('kubejs:pak_tombstone_5').shopResultType('block').count(1).cost(75)
	event.create('pak_tombstone_7').shopType('furniture').result('kubejs:pak_tombstone_7').shopResultType('block').count(1).cost(75)

})