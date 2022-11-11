
onEvent('item.registry', event => {
	// Register new items here
	event.create('petercashel_cashelcoin').displayName('CashelCoin').tooltip("A rare and exceptionally valueless coin. Destroying it would make someone sad though.")
})

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
	
})