/*jslint node: true */
/*jslint devel: true */
/*global Game, prettifyNumber, abbreviateNumber, arraysEqual, statValue, clearElementContent, updateElementIDContent, toggleHelpVis, keyBindings*/
"use strict";
/*---------------------------------
strings.js

Constant string values serving as
names and descriptions of various
game objects.
---------------------------------*/
// Weapon name arrays
Game.fast_melee_generic = ["短剑", "匕首", "敏捷之刃", "大刀", "毒刃", "双刃剑"];
Game.mid_melee_generic = ["大宝剑", "长剑", "手斧", "弯刀", "矛", "铜环手套"];
Game.slow_melee_generic = ["星辰", "锋利斧头", "大砍刀", "战锤", "方天画戟", "重刀"];
Game.fast_range_generic = ["袖里剑", "小李飞刀", "飞斧", "小弩", "飞镖"];
Game.mid_range_generic = ["左轮手枪", "短弓", "标枪", "弹弓", "步枪"];
Game.slow_range_generic = ["弩", "长弓", "复合弓", "枪", "迫击炮"];
Game.fast_magic_generic = ["魔法之刃", "雷霆之书", "魔法之杖", "权杖", "风火轮"];
Game.mid_magic_generic = ["魔剑", "火焰之书", "法术专攻", "战斗法杖", "火焰球"];
Game.slow_magic_generic = ["战斗法杖", "冰霜之书", "法典", "木杖", "冰霜之球"];
Game.debuffs_generic = [
  [241, "无情", 10, -1],
  [242, "狂暴", 10, 50],
  [243, "嗜血", 10, 20],
  [244, "消弱", 10, 15],
  [245, "迷惑", 5, -1],
  [246, "毒药", 10, 20],
  [247, "打击", 10, 15],
  [248, "恐惧", 5, 5],
  [249, "缴械", 10, -1],
  [250, "昏睡", 10, 15]
];
Game.debuffs_potion_normal = [
  [241, "Acidic Solution", 15, -1],
  [242, "Twinstrike Tonic", 10, 50],
  [243, "Vampiric Infusion", 10, 20],
  [244, "Frostblood Draught", 10, 15],
  [245, "Cupid's Charm Chalice", 5, -1],
  [246, "Nightshade Potion", 10, 20],
  [247, "Mind-Numbing Mix", 10, 15],
  [248, "Bottled Heart Attack", 5, 5],
  [249, "Butterfinger Brew", 10, -1],
  [250, "Chloroform Concoction", 10, 15]
];
Game.debuffs_potion_superior = [
  [241, "Enhanced Acidic Solution", 15, -1],
  [242, "Enhanced Twinstrike Tonic", 15, 70],
  [243, "Enhanced Vampiric Infusion", 15, 30],
  [244, "Enhanced Frostblood Draught", 15, 25],
  [245, "Cupid's Charm Chalice", 5, -1],
  [246, "Enhanced Nightshade Potion", 15, 30],
  [247, "Enhanced Mind-Numbing Mix", 15, 25],
  [248, "Bottled Double Heart Attack", 5, 7],
  [249, "Enhanced Butterfinger Brew", 15, -1],
  [250, "Enhanced Chloroform Concoction", 15, 10]
];
Game.debuff_names = [
  "装甲碎片",
  "双重攻击",
  "生命恢复",
  "慢速的攻击",
  "混乱",
  "持续伤害",
  "麻痹",
  "厄运",
  "接触武装",
  "昏睡"
];
Game.debuff_descriptions = [
  "使你的攻击忽略目标的装甲强度，持续10(15)秒。",
  "使你的攻击造成二次攻击，造成的伤害是第一次伤害的50%(70%)，持续时间10(15)秒。",
  "每秒恢复等于20%(30%)的武器秒伤害的血量，持续10(15)秒。",
  "减缓敌人攻击速度15%(25%)，持续10(15)秒。",
  "使目标的下一次攻击击中他们自己。",
  "每秒对目标造成20%(30%)的武器秒伤害，10(15)秒。",
  "增加目标攻击失败的几率15%(25%)，持续时间10(15)秒。",
  "给予5%(7%)的机会彻底消灭目标。如果不能杀死的话，可以给予250%(350%)的武器秒伤害。",
  "将目标造成的伤害降低50％，防止目标施放减益效果10（15）秒。",
  "防止目标攻击10(15)秒。有60%(40%)的几率被攻击打断。"
];
Game.potions = [
  [
    [0, "Lesser Healing Potion", 0.2],
    [1, "Healing Potion", 0.3],
    [2, "Greater Healing Potion", 0.4]
  ],
  [
    [0, "Acidic Solution", 0],
    [1, "Twinstrike Tonic", 1],
    [2, "Vampiric Infusion", 2],
    [3, "Frostblood Draught", 3],
    [4, "Cupid's Charm Chalice", 4],
    [5, "Nightshade Potion", 5],
    [6, "Mind-Numbing Mix", 6],
    [7, "Bottled Heart Attack", 7],
    [8, "Butterfinger Brew", 8],
    [9, "Chloroform Concoction", 9]
  ]
];
Game.potions_superior = [
  [
    [0, "Lesser Healing Potion", 0.3],
    [1, "Healing Potion", 0.4],
    [2, "Greater Healing Potion", 0.5]
  ],
  [
    [0, "Enhanced Acidic Solution", 0],
    [1, "Enhanced Twinstrike Tonic", 1],
    [2, "Enhanced Vampiric Infusion", 2],
    [3, "Enhanced Frostblood Draught", 3],
    [4, "Cupid's Charm Chalice", 4],
    [5, "Enhanced Nightshade Potion", 5],
    [6, "Enhanced Mind-Numbing Mix", 6],
    [7, "Enhanced Bottled Heart Attack", 7],
    [8, "Enhanced Butterfinger Brew", 8],
    [9, "Enhanced Chloroform Concoction", 9]
  ]
];
// Always need more names!
Game.fast_melee_special = [
  "Blinkstrike|They'll never know what hit 'em...",
  "Adder's Fang|Not to scale.",
  "Torturer's Poker|Tell me, tell me everything...",
  "Excalibur|Straight outta the lake.",
  "Sword Breaker|Serrated for your pleasure.",
  "Ether-Soaked Rag|\"Hey, does this cloth smell like chloroform to you?\""
];
Game.fast_melee_debuffs = [
  [242, "狂暴", 15, 70],
  [246, "毒药", 15, 30],
  [245, "支配", 5, -1],
  [243, "圣光", 15, 30],
  [249, "缴械", 15, -1],
  [250, "麻痹", 15, 10]
];
Game.mid_melee_special = [
  "Edge of Depravity|I think it's just misunderstood...",
  "Storm's Herald|Whatever you do, don't hold it above your head.",
  "Flametongue|Good for those long cold nights in camp.",
  "Zenith Blade|Glows brighter than the sun.",
  "Gunblade|Bringing a sword to a gunfight.",
  "Concrete Pillowcase|GO TO SLEEP DAMN YOU!"
];
Game.mid_melee_debuffs = [
  [241, "无情", 15, -1],
  [247, "冲击", 15, 25],
  [243, "腐蚀", 15, 30],
  [249, "眩光", 15, -1],
  [247, "蹒跚", 15, 25],
  [250, "震荡", 15, 10]
];
Game.slow_melee_special = [
  "Planetary Edge|Rare, because planets aren't edgy.",
  "Death Sentence|The Grim Reaper has arrived.",
  "The Ambassador|Diplomatic immunity!",
  "Excalibur II|Do it the same, but better!",
  "Mjolnir|They're not worthy!",
  "Generic Melee Weapon|Relic of a bygone era."
];
Game.slow_melee_debuffs = [
  [244, "断筋", 15, 25],
  [248, "黑暗", 5, 7],
  [241, "外交", 15, -1],
  [243, "神光", 15, 30],
  [244, "震荡", 15, 25],
  [244, "减速", 15, 25]
];
Game.fast_range_special = [
  "Ace of Spades|Who throws a card? I mean, come on, really?",
  "Tomahawk|Serving native tribes for centuries.",
  "Throat Piercers|Also perfect for piercing other parts.",
  "Miniature Shurikens|Why throw one when you can throw ten?",
  "Tranquilizer Blowpipe|Be very very quiet...",
  "M60 Light Machine Gun|Modern warfare at its finest."
];
Game.fast_range_debuffs = [
  [246, "剪纸", 15, 30],
  [244, "消弱", 15, 25],
  [241, "穿刺", 15, -1],
  [242, "炮火", 15, 70],
  [250, "镇定剂", 15, 10],
  [247, "火力压制", 15, 25]
];
Game.mid_range_special = [
  "死神降临|Or below, or far away, depending on where you stand.",
  "破浪者的鱼叉|They might want it back at some point.",
  "梦想家|Shoots rainbows and sunshine.",
  "人马座|Making the stars align for you.",
  "远程武器|Relic of a bygone era.",
  "催泪瓦斯|Hold your breath."
];
Game.mid_range_debuffs = [
  [248, "末日", 5, 7],
  [243, "嗜血", 15, 30],
  [250, "绵羊", 15, 10],
  [242, "星落", 15, 70],
  [246, "出血", 15, 30],
  [250, "睡眠", 15, 10]
];
Game.slow_range_special = [
  "利益相关者|Raising the stakes, one corpse at a time.",
  "阿蒂米斯弓|Comes with a free built in harp, no strings attached.",
  "分开射击|Something to remember them by.",
  "飞碟|I wonder what we'll find today?",
  "c4炸药包|It better not come back...",
  "矮人投掷炮|Apparently, dwarves had really big hands.",
  "催泪瓦斯发射器|Illegal for use in Canada. Caution advised."
];
Game.slow_range_debuffs = [
  [247, "不平衡的", 15, 20],
  [245, "符咒", 5, -1],
  [241, "无情", 15, -1],
  [249, "射击", 15, -1],
  [246, "弹片", 15, 30],
  [248, "爆炸弹", 5, 7],
  [249, "丧失能力", 15, -1]
];
Game.fast_magic_special = [
  "Thundercaller|A lightning rod, for all intents and purposes.",
  "Cosmic Fury|Dr. Tyson would like a word with you...",
  "Spark-Touched Fetish|Rubber gloves are strongly recommended.",
  "\"The Theory of Everything\"|It works! At least in theory...",
  "Generic Magic Weapon|Relic of a bygone era.",
  "Contagion|Spreading the love."
];
Game.fast_magic_debuffs = [
  [247, "Static Shock", 15, 20],
  [242, "Frenzy", 15, 65],
  [245, "Confuse", 5, -1],
  [243, "Expert Strategy", 15, 30],
  [243, "Generic Heal", 15, 30],
  [246, "Poison Cloud", 15, 30]
];
Game.mid_magic_special = [
  "Flamecore Battlestaff|Still warm to the touch.",
  "Gift of the Cosmos|Just keeps on giving.",
  "Emberleaf War Tome|Not actually made of embers, which are terrible for books.",
  "Encyclopedia of the Realm|Knowledge is power.",
  "\"How to Maim Your Dragon\"|Now featuring step by step guides!",
  "Hypnotist's Watch|Your eyelids are getting heavy..."
];
Game.mid_magic_debuffs = [
  [246, "缓慢烧伤", 15, 30],
  [244, "消弱", 15, 25],
  [243, "吸血", 15, 30],
  [241, "寻找弱点", 15, -1],
  [249, "翅膀", 15, -1],
  [250, "催眠术", 15, 10]
];
Game.slow_magic_special = [
  "四元素者|Written and bound by Tetradigm. Mostly incomprehensible.",
  "猎人|Note: Comets are dangerous, DO NOT TRY THIS AT HOME.",
  "绝对零度|Not quite. But it's close!",
  "审判者|Bear the weight of your crimes!",
  "无限法师|I put on my robe and wizard hat.",
  "\"A Brief History of Magic\"|1,600 pages of sheer drivel."
];
Game.slow_magic_debuffs = [
  [248, "火焰迸发", 5, 7],
  [246, "缓慢燃烧", 15, 30],
  [247, "苦寒之地", 15, 25],
  [248, "判决螺栓", 5, 10],
  [241, "突破洞察", 15, -1],
  [250, "极度厌倦", 15, 10]
];
// Prefixes for non-great items
// Yes there's a blank one, it's so the item has no prefix :)
Game.weaponQualityDescriptors = [
  ["一文不值的", "损坏的", "笨拙的", "腐烂的", "有缺陷的", "破旧的", "一文不值的"],
  ["平均的", "平凡的", "", "过得去的", "基本的", "简单的", "可用的", "适当的"],
  ["原始的", "增强的", "强大的", "保养良好的", "强大的", "优越的", "杰出的"]
];
Game.armourQualityDescriptors = [
  ["破烂的", "磨损的", "破旧的", "破裂的", "战斗磨损的", "无用的", "一文不值的"],
  ["平均的", "平凡的", "", "过得去的", "基本的", "简单的", "可用的", "适当的"],
  ["擦亮的", "保存完好的", "加固的", "缓和的", "沉重的", "一尘不染的", "杰出的"]
];
Game.armour_generic = [
  "长袍",
  "短衣",
  "斗篷",
  "外套",
  "短袍",
  "胸甲",
  "铠甲",
  "胸甲",
  "圆盾",
  "瞄准",
  "大衣",
  "披肩",
  "塔盾",
  "轻盾",
  "护腿",
  "短裤",
  "连裤",
  "帽子",
  "便帽",
  "短裙",
  "风衣"
];
Game.armour_special = [
  "The Blue Collar|If this won't stop attackers, the one wearing it will.",
  "Xena's Breastplate|It was padded all along!",
  "Dual-Wielded Shields|But how am I meant to attack?",
  "Steel Cage|Especially effective against shark attacks.",
  "Golden Helmet|Unrealistically heavy.",
  "Iron Boots|Definitely not made for walking.",
  "The Emperor's Clothes|Trust me, they're magnificent.",
  "Ze Goggles|Zey do nothing!",
  "Zenith Shield|Glows brighter than the sun.",
  "Generic Armour Name|Relic of a bygone era.",
  "Aegis Shield|Don't stare directly at it.",
  "Planetary Bulwark|You will not go to space today.",
  "Chainmail Bikini|Covers all the important bits.",
  "Cardboard Box|Who in their right mind would attack a harmless box?",
  "Golden Breastplate|Only really good for dying in style.",
  "Turtle Shell|Nature's take on the humble shield.",
  "Dragon Chainmail|Yes, dragon is a metal. It's not made of dragons.",
  "Giant Armour Plate|It's bigger than you, and we all know bigger is better.",
  "Top Hat and Monocle|Stop! Dapper time!",
  "Kevlar Vest|Stops just about anything that doesn't aim for the head.",
  "Mechanical Exoskeleton|Humans are so much more effective when encased in metal.",
  "Overly Elaborate Robe|Washing this thing will be your worst nightmare.",
  "Rune Platebody|At least one dragon died in the making of this armour."
];
Game.SKILL_LIST = [
  ["行窃", "从战斗中增加5%的种子收益.", 101],
  ["尸体搜索", "每一级增加2%的几率，从战斗中获得三倍的种子收益.", 1011],
  ["Bartering", "Reduces seed prices by 3% per rank.", 1012],
  ["Thorough Looting", "Adds a 2% chance per rank to salvage scrap from defeated enemies.", 10111],
  ["Haggling", "Increases seeds received from selling items by 5% per rank.", 10121],
  ["Five-Finger Discount", "Adds a 1% chance per rank to steal seeds equal to your character level when attacking.", 101211],
  ["Patience and Discipline", "Adds a 2% chance per rank to boost a random stat when leveling up.", 101212],
  ["Disassembly", "Guarantees an additional piece of scrap from destroying items.", 101213],
  ["Bountiful Bags", "Adds 3 slots per rank to your inventory limit.", 1012111],
  ["Luck of the Draw", "Adds a 2% chance per rank to gain an additional Stat Point on level up.", 1012121],
  ["Fast Learner", "Adds 5% per rank to experience gained in combat.", 1012122],
  ["Proper Care", "Adds a 3% chance per rank to negate decay on your worn equipment per hit.", 1012123],
  ["Master Tinkerer", "Increases the effectiveness of repair ticks by 20% per rank.", 1012131],
  ["Lucky Star", "Adds a 1% chance per rank to gain an extra Skill Point on level up.", 10121211],
  ["High Maintenance", "Adds a 2% chance per rank to fully repair equipment when defeating an enemy.", 10121231],
  ["Hanging By A Thread", "Adds 10% per rank to a broken weapon's damage output.", 10121232],
  ["Deadly Force", "Adds 3% per rank to all damage dealt by weapons.", 102],
  ["Nimble Fingers", "Adds 3% per rank to attack speeds.", 1021],
  ["Keen Eye", "Adds 3% per rank to critical strike chance.", 1022],
  ["Flurry", "Adds a 2% chance per rank to perform a secondary strike after an attack for 50% damage.", 10211],
  ["Keener Eye", "Adds 10% additional damage per rank to critical strikes.", 10221],
  ["Expose Weakness", "Adds 2% per rank to the debuff application rate.", 10222],
  ["Empowered Flurry", "Adds 5% per level to the damage of Flurry's secondary strike.", 102111],
  ["Sneak Attack", "Adds 10% per rank to your chance to strike first in combat.", 102211],
  ["Bloodlust", "Critical strikes refresh the cooldown on your Burst Attack", 102212],
  ["Press The Advantage", "Using Burst Attack on a debuffed foe reduces its cooldown by 1 second per rank.", 102221],
  ["Terminal Illness", "Allows debuff timers to be refreshed when reapplied.", 102222],
  ["Wild Swings", "Augments your Burst Attack to deal an additional hit per rank, but reduces its damage by 50%.", 1021111],
  ["Adrenaline Rush", "After a critical strike, your next 3 attacks deal 5% additional damage per rank.", 1021112],
  ["Power Surge", "Applies the Adrenaline Rush effect at the start of combat for one attack per rank.", 10211121],
  ["Deadly Momentum", "Stores overkill damage from all other sources (up to 20% per rank of target's max HP) and applies it at the start of combat.", 10211122],
  ["Execute", "Adds a 5% chance per rank to instantly kill an enemy below 25% health.", 1022111],
  ["Turn The Tables", "Adds 20% per rank to the debuff application chance when using Burst Attack.", 1022211],
  ["Overcharge", "Adds 35% damage to attacks at the cost of an extra durability point per attack.", 10211121],
  ["Undermine", "When using Burst Attack, the enemy's resistance to your attack type is treated as a vulnerability.", 10222111],
  ["Armour Mastery", "Increases bonuses on armour by 5% per rank.", 103],
  ["Ancestral Fortitude", "Reduces weapon damage taken by 3% per rank.", 1031],
  ["Survival Instincts", "Adds 4% per rank to health regen and repair ticks.", 1032],
  ["Shield Wall", "Increases block chance by 1% per rank.", 10311],
  ["Shield Crush", "Adds a 2% chance per rank to ignore enemy armour bonus against your weapon when attacking.", 10312],
  ["Victory Rush", "Restores 5% health per rank after defeating an enemy.", 10321],
  ["Vengeance", "Adds a 2% chance per rank to return 50% of damage taken to the target.", 103111],
  ["Last Bastion", "Reduces damage taken by 10% per rank when your health is below 30%.", 103112],
  ["Bladed Armour", "Deal 2% damage taken per rank back to the attacker.", 103113],
  ["Hold The Line", "Guarantees a block after Shield Crush activates.", 103121],
  ["Stand Your Ground", "Clears your current debuff when Shield Crush activates.", 103122],
  ["Artful Dodger", "Refreshes your Burst Attack cooldown when you dodge an attack.", 103211],
  ["Eye for an Eye", "Deals 100% of blocked damage to the attacker after a successful block.", 103212],
  ["Divine Shield", "Adds a 2% chance per rank to completely negate an enemy attack.", 1031121],
  ["Second Wind", "Causes a blow that would kill you to instead restore 6% health per rank, once per battle.", 1031122],
  ["Riposte", "Adds a 5% chance per rank that a successful block will Disarm the attacker.", 1031211],
  ["Absorption Shield", "Your Divine Shield now heals you for the damage you would have taken.", 10311211],
  ["Reflective Shield", "Your Divine Shield now deals the damage you would have taken to the enemy.", 10311212],
  ["Reclaimed Knowledge", "Increases experience gained in combat by up to 50% by draining the experience overflow pool.", 104]
 // ["Brewmaster", "Grants a 1% chance per rank to ignore the single-use limitation on a potion when using it in combat.",115],
 // ["Medic's Intuition", "Causes healing potions to restore an additional 10% of your health.", 1151],
 // ["Saboteur's Intuition", "Causes your debuffing potions to apply the superior versions of their respective debuffs.", 1152]
];
Game.BADGE_LIST = [
  ["私人关怀", "Give your character a name.", "See that? That's you, right there.", 2001],
  ["God Complex", "Name your character after Psychemaster, the game's developer.", "Shhh... this one's a nod to Orteil.", 2002],
  ["We've Got You Covered", "Have the game autosave 100 times.", "Your data is safe in our hands.", 2003],
  ["Trust Issues", "Use the manual save feature.", "Do you think I can't write a working autosave feature? DO YOU?", 2004],
  ["Aversion To Clicking", "Activate the autobattle system.", "Do it for me, I'm too... tired. Yeah. Tired.", 2005],
  ["Keyboard Cat", "Use keybindings to perform game actions 1,000 times.", "Play it again, Sam!", 2006],
  ["Broken Mouse Convention", "Enter 1,000 battles without enabling the autobattle feature.", "It's OK, your keyboard still works. Mousekeys to the rescue!", 2007],
  ["What Does This Button Do?", "Reset the game to gain prestige.", "Oh, that was underwhelming.", 2008],
  ["Baby Steps", "Enter combat for the first time.", "There's a first time for everything.", 2009],
  ["Skullcrusher Mountain", "Defeat 1,000 enemies.", "You know what this world could use? A skull fortress!", 2010],
  ["Like a Boss", "Equip both a weapon and a piece of armour of Great or higher quality.", "PROMOTE SYNERGY!", 2011],
  ["Jack of All Trades", "Deal 1,000,000 damage with all three weapon types.", "Master of none.", 2012],
  ["Coup de Grace", "Deliver the finishing blow to a foe with a Burst Attack.", "Sometimes you just need a personal touch.", 2013],
  ["Manual Labour", "Deliver 1,000 Burst Attacks.", "Taking a more direct approach to mindless violence.", 2014],
  ["Living on a Prayer", "Win a fight with less than 5% of your total health remaining.", "Take my hand and we'll make it, I swear!", 2015],
  ["The Survivalist", "Win a fight having entered it with less than 25% health.", "Just don't start drinking your own urine.", 2016],
  ["Flawless Victory", "Defeat an enemy without taking any damage.", "I am invincible!", 2017],
  ["MC Hammer Special", "Defeat a boss without taking any damage.", "Can't touch this, na na na na, na na, na na.", 2018],
  ["War of Attrition", "Take at least 25 attacks in one battle.", "I could do this ALL DAY!.", 2019],
  ["The Unstoppable Force", "Defeat 1,000 consecutive enemies without dying or fleeing.", "Glad there's no immovable objects here.", 2020],
  ["Alchemical Bombardment", "Use potions to inflict debuffs on enemies 100 times.", "Death from above!", 2021],
  ["Hoisted By My Own Petard", "Inflict your own weapon's debuff on yourself.", "So this is how it feels...", 2022],
  ["Punching Mirrors", "Die from an attack delivered to yourself.", "Stop hitting yourself!", 2023],
  ["Tarred With Their Own Brush", "Cause an enemy to apply their own weapon's debuff to themselves.", "Now you know how it feels!", 2024],
  ["Assisted Suicide", "Cause an enemy to deal the killing blow to itself.", "I promise this won't hurt. Much.", 2025],
  ["Vampirism", "End a fight with more health than you started it with.", "Tonight I'm going to suck... your blood!", 2026],
  ["Wherefore Art Thou, Romeo?", "Die from a Damage over Time effect while your enemy is suffering from Sleep.", "This, do I drink to thee...", 2027],
  ["Divine Intervention", "Use Divine Shield to survive a blow that would otherwise have killed you.", "Praise be to RNGesus!", 2028],
  ["Where We're Going, We Don't Need Weapons", "Deal the killing blow to an enemy while your weapon is broken.", "You know there were guys who used to fight EXCLUSIVELY with their fists?", 2029],
  ["Where We're Going, We Don't Need Armour", "Deal the killing blow to an enemy while your armour is broken.", "Ever heard of 'distraction value'?", 2030],
  ["Where We're Going, We Don't Need Gear", "Deal the killing blow to an enemy while your weapon and armour are broken.", "Any Scotsman will tell you nakedness is an incredible deterrent.", 2031],
  ["A Good Offense", "Spend 100 stat points in Strength.", "That's the best defence, you know!", 2032],
  ["Pinpoint Accuracy", "Spend 100 stat points in Dexterity.", "He shoots... and hits the barn door this time!", 2033],
  ["Bookish Type", "Spend 100 stat points in Intelligence.", "Curl up in an armchair with your favourite read - you deserve it.", 2034],
  ["Defence of the Ancients", "Spend 100 stat points in Constitution.", "Definitely not getting carried.", 2035],
  ["The Only Way is Up", "Spend 200 stat points across all stats.", "Gravity can go ahead and bite me.", 2036],
  ["Unlimited Power!", "Spend 100 skill points.", "OK, so 100 isn't unlimited, so what! It sounded cool, okay?", 2037],
  ["Indecisive", "Reset your stats or skills a total of 100 times.", "I used to be indecisive, but now I'm not so sure.", 2038],
  ["Rolling the Bones", "Apply random debuffs to your weapons 100 times.", "Maybe this one will be worth it?", 2039],
  ["Happy Customer", "Spend 500 scrap applying debuffs to weapons", "ALL HAIL THE ALMIGHTY STORE GOD!", 2040],
  ["Unimaginative", "Promote an item to Great quality without providing a name.", "Original badge, do not steal.", 2041],
  ["Lacking in Flavour", "Promote an item to Great quality without providing flavour text.", "Mmm... bland...", 2042],
  ["Broken In", "Make your first purchase from the store.", "Now you'll never leave. Muahahahahahahahaha!!!", 2043],
  ["The Trade Parade", "Spend at least 10,000 seeds on items in the store.", "Here's to the next 10k!", 2044],
  ["Sucker", "Spend at least 100,000 seeds on items in the store.", "If you're interested, I also have this rock that wards off tigers.", 2045],
  ["CAPITALISM!", "Spend at least 1,000,000 seeds on items in the store.", "With all the seeds you've provided, we hired some dancers to work out front. You're welcome.", 2046],
  ["The Trade Blockade", "Reach level 50 without spending any seeds in the store.", "You'll come crawling back soon enough!", 2047],
  ["Rags to Riches", "Gain 1,000,000 seeds from selling items.", "What use is being a millionaire when society as we know it has collapsed?", 2048],
  ["Heavy Metal", "Gain 1,000 scrap from converting items.", "Violent headbanging not required.", 2049],
  ["Disposable Income", "Throw away 1,000 items.", "I have no use for these pathetic toys!", 2050],
  ["A Habit is Born", "Initiate a repair of your equipment", "Once you start, you just can't stop! Until it's fixed.", 2051],
  ["Blue in the Face", "Have at least three Great quality items in your inventory.", "That's from talking about it, by the way.", 2052],
  ["Tastes like Purple", "Have at least three Amazing quality items in your inventory", "I don't recommend trying to verify the taste of purple.", 2053],
  ["Full House", "Have all of your inventory sections filled to maximum capacity.", "This bag is really, REALLY heavy.", 2054],
  ["Weapon Hoarder", "Have a full inventory of Great or better quality weapons.", "You never run out of ways to murder things, do you?", 2055],
  ["Armour Hoarder", "Have a full inventory of Great or better quality armours.", "Now if only you could wear them all at once...", 2056],
  ["Potion Hoarder", "Own one of every type of potion.", "Concoctions for all occasions!", 2057],
  ["Expensive Tastes", "Fill your weapon and armour inventories with only Amazing quality items.", "Your collection is worth HOW MUCH?!?!?", 2058],
  ["Chasing Shadows", "Reach an elite appearance chance of 20% or more.", "I'm not afraid of the dark, I'm afraid of what it hides...", 2059],
  ["Terminally Unimaginative", "Reach level 50 without providing custom names or descriptions for anything.", "Maybe it's best you leave everything at defaults after all...", 2060],
  ["Trolling the Troll", "Defeat Massive Cave Troll Tetradigm in the Whispering Cave.", "Maybe if he'd read that book, he would have learned how to not die.", 2061],
  ["Calm Down Dear", "Defeat Ashen Berserker Ragekai in the Ash Cultist Outpost.", "It's just a stab in the face, that's all. You won't feel a thing.", 2062],
  ["Time For A Shower", "Defeat Swamp Behemoth Sythek in the Dawn's Light Swamp.", "With this level of filth, you'll see me again in about a week.", 2063],
  ["All Change, Please", "Defeat the Ethereal Train Driver at The Final Stop.", "This service will terminate here. Please check all personal belongings when leaving the train.", 2064],
  ["Outgrown", "Defeat the Lumbering Spore Giant within the Echoing Passage.", "I'm bigger than you and I'm higher in the food chain!", 2065],
  ["Problem Solved", "Defeat Chief Engineer DeSolver in The Swiftsteel Workshop.", "May we all be blessed with everlasting prosperity.", 2066],
  ["Beyond Divinity", "Defeat Archbishop Raferty in the Weary Hollow Chapel.", "Where is your god now, eh?", 2067],
  ["Surpassing The Master", "Defeat Bandit Mastermind Seiyria at The Fallen Pillar.", "Banditry isn't a good career path, 0/10, would not recommend.", 2068],
  ["Feeling Broody", "Defeat Chromega, The Broodmother, atop the Dragons' Crown.", "If you had several thousand kids, you would too.", 2069],
  ["Coming To A Point", "Defeat Grand Archsage Reelix in the Ley Line Research Facility.", "All the magical power in the world still couldn't stop you from killing him.", 2070],
  ["Too Hot To Handle", "Defeat Magma Wyrm Mordoth deep within The Smouldering Heart.", "Burning things are notoriously hard to loot.", 2071],
  ["High and Mighty", "Defeat High Ashlord Kryzodoze atop the Pillar of Ash.", "Knocking him off his several hundred foot high horse.", 2072]
];

document.getElementById("loadedStrings").style.display = "";
