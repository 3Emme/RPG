export class AbilityScores {
  constructor(str,dex,con,wis,int,chr,lck) {
    this.str = str
    this.dex = dex
    this.con = con
    this.wis = wis
    this.int = int
    this.chr = chr
    this.lck = lck 
  }

  scoreMod (score) {
    let mod = (this[score]-10)/2
    if (mod < 0) {
      return Math.floor(mod)
    } else {
      return parseInt(mod)
    }
  }  
}

export class Status{
  constructor(){
    this.blinded = false,
    this.charmed = false,
    this.deafened = false,
    this.dehydrated = false,
    this.enraged = false,
    this.exhausted = false,
    this.flying = false,
    this.freezing = false,
    this.frightened = false,
    this.grappled = false,
    this.hidden = false,
    this.incapacitated = false,
    this.invisible = false,
    this.paralyzed = false,
    this.petrified = false,
    this.poisoned = false,
    this.prone = false,
    this.restrained = false,
    this.starving = false,
    this.stunned = false,
    this.surprised = false,
    this.unconscious = false
  }
}

export class Equip{
  constructor(){
    this.head = [],
    this.face = [],
    this.torso = [],
    this.back = [],
    this.neck = [],
    this.arm = [],
    this.hand = [],
    this.rings = [],
    this.body = [],
    this.waist = [],
    this.legs = [],
    this.mainHand = [],
    this.offHand = []
  }
};

export class Character { 

  //super(id,name,abilityScores,hp,mp,inv); ref for eventual add
    addItemInv(item) {
      this.inv.push (item);
    }
  
    addItemEquip(item) {
      let slot = item.slot;
      this.equip[slot].push(item);
    }
  
    abilityScoreCheck(score,target) {
      let abilityScores = this.abilityScores
      let checked = abilityScores[score]
      if (checked >= target){
        return true;
      } else {
        return false;
      }
    }

  //   equipCheck(){ ////actually worked once
  //   let totalAcBonus = 0;
  //   for (let eqpiece of this.equip){
  //     totalAcBonus += eqpiece.acBonus;
  //     console.log(`${eqpiece.name} has an ac bonus of ${eqpiece.acBonus}, increasing total ac bonus to ${totalAcBonus}`)
  //   }
  //   this.baseAc += totalAcBonus;
  //   console.log(`all equip has been checked, and after adding total ac is now ${this.baseAc}`)
  // }
  
  equipCheck(){
    let totalAcBonus = 0;
    for (let equipSlot in this.equip){
      console.log(equipSlot)
      for (let eqpiece of this.equip[equipSlot]){
        console.log(`eqpiece.name:${eqpiece.name} eqpiece.acBonus:${eqpiece.acBonus}`)
        // console.log(equipSlot[eqpiece])
        //console.log(`totalAcBonus is currently: ${totalAcBonus}, about to add eqpiece.acBonus, which is ${eqpiece.acBonus}`)
        totalAcBonus += eqpiece.acBonus;
        //console.log(`After that, totalAcBonus is now: ${totalAcBonus}, after adding eqpiece.acBonus, which was ${eqpiece.acBonus}`)
        // console.log(`${eqpiece.name} has an ac bonus of ${eqpiece.acBonus}, increasing total ac bonus to ${totalAcBonus}`)
      }
    }
    this.baseAc += totalAcBonus;
    console.log(`all equip has been checked, and after adding total ac is now ${this.baseAc}`)
  }
}