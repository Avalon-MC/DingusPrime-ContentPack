onEvent('recipes', event => {
	
	//Wipe all of a mods recipes
	event.remove({mod: 'fantasyfurniture'})
	event.remove({mod: 'reevesfurniture'})
	
	
	
	// Change recipes here
	event.shapeless("9x kubejs:petercashel_cashelcoin", ["kubejs:petercashel_cashelcoinblock"])
	event.shaped('kubejs:petercashel_cashelcoinblock', [
     'SSS',
     'SSS',
     'SSS'
    ], {
     S: 'kubejs:petercashel_cashelcoin'
  })
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})


onEvent('fluid.tags', event => {
	event.add('create:bottomless/allow', 'tconstruct:molten_iron');
	event.add('create:bottomless/allow', 'tconstruct:molten_copper');
})
