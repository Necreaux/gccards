var LANG_EN = "en";
var LANG_JP = "jp";

var Locale = function(l) {
    if (l == LANG_EN) {
        return {
            getLanguage: function() {
                return l;
            },
            getURLArgs: function(args) {
                return args;
            },
            getImageFolder: function() {
                return "images/en/";
            },
            places: new Array(
                "Berneside Plains",
                "Berneside Plains (Night)",
                "Glaverow Volcanic Zone",
                "Glaverow Volcanic Zone (Night)",
                "Storm Reach Snowfield",
                "Storm Reach Snowfield (Night)",
                "Deadmoon Desert",
                "Deadmoon Desert (Night)",
                "Cerulean Deep",
                "Cerulean Deep (Night)",
                "Invitation Bonus",
                "Coliseum Rewards",
                "Grab-a-Golbez Campaign",
                "Friend Points",
                "Hall of Trials",
                "Hall of Trials II",
                "Special Gold Present",
                "Other Bonus",
                "Quests",
                "Login Rewards",
                "All Hunting Grounds",
                "Crimson Keep",
                "The Guardians Who Stole Christmas",
                "Zeus Nebula",
                "Aedengard",
                "Babylon"
            ),
            events: new Array(
                "None",
                "FFIV",
                "FFV",
                "Wild Dragon Hunter",
                "Bahamut's Descent",
                "Epic of Gilgamesh",
                "Hall of Trials",
                "Rainbow Pixie Event",
                "Sevenstone Serpents Event",
                "Seven Deadly Weapons Event",
                "Mass Slime Panic",
                "Hall of Trials II",
                "Special Gold Present",
                "Dengeki Game Appli Bonus",
                "Okaeri Bonus",
                "Famitsu App Bonus",
                "Chess Guardians",
                "FFXI 10 Years",
                "Bugbear's Nightmare",
                "Kingdom Conquest II",
                "The Angler's Cup",
                "Teeny-weeny Bikinis",
                "On Stinging Tides",
                "Final Fantasy XIV",
                "Tokyo Game Show 2012",
                "The women of my dreams",
                "Tokyo Game Show 2013",
                "Halloween Hunt Event",
                "iPhone Cover",
                "Pretty in Pink",
                "Lightning Returns FFXIII",
                "Crimson Keep",
                "They Came from Nova Chrysalia",
                "The Guardians Who Stole Christmas",
                "ファミ通App vol.10 購入特典",
                "FINAL FANTASY X | X-2 HD Remaster 購入特典",
                "ファミ通App vol.12 購入特典",
                "Winter Hunt",
                "FINAL FANTASY X | X-2 HD Remaster",
                "Guardian Cross Poll 2014",
                "伝説のタイタン",
                "Valentine Hunt Event",
                "Bahamut Returns!",
                "The Coming Sandstorm!",
                "The Grimfort",
                "聖剣伝説 RISE of MANA",
                "Orion Arisen",
                "魔を誘う漁火",
                "The Radiantshade Hunt",
                "Forged in the Frost",
                "Week #2 Spawn rates now doubled",
                "Sylphs in the Sand",
                "The Thundergale Hunt",
                "竜空を生きる者達",
                "Popular Guardians Gather The Goldendawn Hunt!",
                "The Greatest Hits Hunt",
                "Fright of the Valkyrie",
                "The Serpenchanter's Curse",
                "Deathblaze Hunt",
                "Wings of Triumph",
                "Two Ladies Adored",
                "Divine Dancer",
                "Celestial Garden",
                "Protector of the Chalice",
                "Demon of Vengeance", // Arioch
                "Tempestuous Goddess", // Shandian Niangniang
                "拮抗する者達", // Maeve & Varuna
                "Tokyo Game Show 2014",
                "The Seeping Darkness",
                "Witches' Brew"
            ),
            borders: new Array(
                "None",
                "Lesser",
                "Great",
                "Mighty",
                "Almighty"
            ),
            attributes: new Array(
                "Fire",
                "Water",
                "Earth",
                "Lightning",
                "Wind",
                "Poison",
                "Death",
                "Mecha",
                "Light",
                "Darkness",
                "None"
            ),
            types: new Array(
                "Cool",
                "Chaotic",
                "Sexy",
                "Powerful",
                "Brave",
                "Fast",
                "Intelligent",
                "Ace",
                "CoolR",
                "Bold",
                "Erotic",
                "Berserk",
                "Stalwart",
                "Sonic",
                "Wise",
                "AceR",
                "ChaoticR",
                "SexyR",
                "PowerfulR",
                "BraveR",
                "FastR",
                "IntelligentR"
            ),
            skills: new Array(
                new Array("Slash",             "Physical +1"),
                new Array("Cross Slash",       "Physical +2"),
                new Array("Hard Slash",        "Physical +3"),
                new Array("Thousand Slashes",  "Physical +4"),
                new Array("Hard Blow",         "Physical +1"),
                new Array("Heavy Blow",        "Physical +2"),
                new Array("Double Impact",     "Physical +3"),
                new Array("Storm Impact",      "Physical +4"),
                new Array("Burning Beat",      "Fire +1"),
                new Array("Burning Strike",    "Fire +2"),
                new Array("Explosion",         "Fire +3"),
                new Array("Meteor Storm",      "Fire +4"),
                new Array("Meteor Swarm",      "Fire +4↑"),
                new Array("Aqua Splash",       "Water +1"),
                new Array("Aqua Shot",         "Water +2"),
                new Array("Aqua Burst",        "Water +3"),
                new Array("Maelstrom",         "Water +4"),
                new Array("Ice Needle",        "Earth +1"),
                new Array("Ice Spike",         "Earth +2"),
                new Array("Rock Bite",         "Earth +3"),
                new Array("Earthquake",        "Earth +4"),
                new Array("Thunderbolt",       "Lightning +1"),
                new Array("Thunder Strike",    "Lightning +2"),
                new Array("Call Lightning",    "Lightning +3"),
                new Array("Chain Lightning",   "Lightning +4"),
                new Array("Wind Cutter",       "Wind +1"),
                new Array("Wind Edge",         "Wind +2"),
                new Array("Whirlwind",         "Wind +3"),
                new Array("Tornado",           "Wind +4"),
                new Array("Poison Bubble",     "Poison +1"),
                new Array("Poison Mist",       "Poison +2"),
                new Array("Poison Field",      "Poison +3"),
                new Array("Venom Riot",        "Poison +4"),
                new Array("Gaze of Death",     "Death +1"),
                new Array("Touch of Death",    "Death +2"),
                new Array("Embrace of Death",  "Death +3"),
                new Array("Kiss of Death",     "Death +4"),
                new Array("Holy Light",        "Light +1"),
                new Array("Shine Smite",       "Light +2"),
                new Array("Shine Burst",       "Light +3"),
                new Array("Vanish",            "Light +4"),
                new Array("Darkness",          "Darkness +1"),
                new Array("Dark Pain",         "Darkness +2"),
                new Array("Dark Psalm",        "Darkness +3"),
                new Array("Nightmare",         "Darkness +4"),
                new Array("Might",             "ATK +10%"),
                new Array("Greater Might",     "ATK +20%"),
                new Array("Fount of Strength", "ATK +25%"),
                new Array("Protect",           "DEF +10%"),
                new Array("Greater Protect",   "DEF +20%"),
                new Array("Stoic Stance",      "DEF +25%"),
                new Array("Towering Aegis",    "DEF +40%"),
                new Array("Haste",             "AGI +10%"),
                new Array("Greater Haste",     "AGI +20%"),
                new Array("Quickstride",       "AGI +25%"),
                new Array("Cunning",           "WIS +10%"),
                new Array("Greater Cunning",   "WIS +20%"),
                new Array("Mental Geyser",     "WIS +25%"),
                new Array("Ursine Aspect",     "ATK/DEF +10%"),
                new Array("Feline Aspect",     "ATK/AGI +10%"),
                new Array("Simian Aspect",     "ATK/WIS +10%"),
                new Array("Avian Aspect",      "DEF/AGI +10%"),
                new Array("Chelonian Aspect",  "DEF/WIS +10%"),
                new Array("Vulpine Aspect",    "AGI/WIS +10%"),
                new Array("Weakness",          "Enemy ATK -20%"),
                new Array("Lower Defense",     "Enemy DEF -20%"),
                new Array("Slow",              "Enemy AGI -20%"),
                new Array("Shackle",           "Enemy AGI -40%"),
                new Array("Mind Blast",        "Enemy WIS -20%"),
                new Array("Psychic Scythe",    "Enemy WIS -40%"),
                new Array("Heal",              "HP Recovery"),
                new Array("Greater Heal",      "HP Recovery"),
                new Array("Life Drain",        "Absorb enemy HP"),
                new Array("Energy Drain",      "Absorb enemy MP"),
                new Array("Last Stand",        "Endures one attack"),
                new Array("Self-destruct",     "Damage on death"),
                new Array("Quick Strike",      "First attack"),
                new Array("Revival",           "Revive"),
                new Array("Ethereal Pulse",    "Remove Bonuses"),
                new Array("Gigant Smash",      "High Damage Attack"),
                new Array("Deft Step",         "Physical Evasion"),
                new Array("Sap",               "MP Wipe"),
                new Array("Full Barrier",      "Attribute resistance"),
                new Array("Mind Rift",         "Confusion"),
                new Array("Deadly Reflex",     "Counterattack"),
                new Array("Phantom Gear",      "Mecha +4"),
                new Array("Blood Gambit",      "HP consuming attack"),
                new Array("Mana Martyr",       "Deals MP damage on death"),
                new Array("Stifle",            "Enemy ATK -40%"),
                new Array("Lifeleech",         "Absorbs enemy HP"),
                new Array("Toxic Blast"   ,    "Damage over time"),
                new Array("Nerve Pinch",       "Inflicts paralysis"),
                new Array("Ball Lightning",    "Lightning +4↑"),
                new Array("Reaper's Luck",     "+10%/20%/-10% to stats"),
                new Array("Manavita Shift",    "Switches HP for MP"),
                new Array("Might Reave",       "ATK +20%, foe DEF -20%"),
                new Array("Mind Reave",        "WIS +20%, foe WIS -20%"),
                new Array("Impervious",        "Resists effects"),
                new Array("Speed Reave",       "AGI +20%, foe WIS -20%"),
                new Array("Shadow Deft Step",  "Physical Evasion"),
                new Array("Rendburst",         "Unavoidable Damage"),
                new Array("Veil of Deadening", "Attribute Evasion"),
                new Array("Shadow Mind Rift",  "Confusion"),
                new Array("Nimble Jinx",       "Attrbute first attack"),
                new Array("Darkness +4↑",      "Darkness +4↑"),
                new Array("Earth +4↑",         "Earth +4↑"),
                new Array("Shadow Gigant Smash","High Damage Attack"),
                new Array("Shadow Revival",    "Shadow Revive"),
                new Array("Shadow Sap",        "MP Wipe")
            ),
            exskills: new Array(
                "All stats of Fire Guardians increased by 10%.",
                "All stats of Fire Guardians increased by 12%.",
                "All stats of Fire Guardians increased by 15%.",
                "All stats of Earth Guardians increased by 2%.",
                "All stats of Earth Guardians increased by 4%.",
                "All stats of Earth Guardians increased by 6%.",
                "All stats of Wind Guardians increased by 2%.",
                "All stats of Wind Guardians increased by 4%.",
                "All stats of Wind Guardians increased by 6%.",
                "All stats of Poison Guardians increased by 10%.",
                "All stats of Poison Guardians increased by 12%.",
                "All stats of Poison Guardians increased by 15%.",
                "All stats of Mecha Guardians increased by 2%.",
                "All stats of Mecha Guardians increased by 4%.",
                "All stats of Mecha Guardians increased by 6%.",
                "All stats of Light Guardians increased by 2%.",
                "All stats of Light Guardians increased by 4%.",
                "All stats of Light Guardians increased by 6%.",
                "All stats of Darkness Guardians increased by 2%.",
                "All stats of Darkness Guardians increased by 4%.",
                "All stats of Darkness Guardians increased by 6%.",
                "HP of all Guardians increasd by 1%.",
                "HP of all Guardians increasd by 2%.",
                "HP of all Guardians increasd by 3%.",
                "HP of all Guardians increasd by 5%.",
                "HP of all Guardians increasd by 7%.",
                "MP of all Guardians increasd by 5%.",
                "MP of all Guardians increasd by 7%.",
                "MP of all Guardians increasd by 10%.",
                "ATK of all Guardians increasd by 2%.",
                "ATK of all Guardians increasd by 4%.",
                "ATK of all Guardians increasd by 6%.",
                "ATK of all Guardians increasd by 10%.",
                "ATK of all Guardians increasd by 12%.",
                "ATK of all Guardians increasd by 15%.",
                "DEF of all Guardians increasd by 10%.",
                "DEF of all Guardians increasd by 12%.",
                "DEF of all Guardians increasd by 15%.",
                "WIS of all Guardians increasd by 2%.",
                "WIS of all Guardians increasd by 4%.",
                "WIS of all Guardians increasd by 6%.",
                "Chance of Death abilities increased by 1%.",
                "Chance of Death abilities increased by 2%.",
                "Chance of Death abilities increased by 3%.",
                "Self-destruct success rate increased by 3%.",
                "Self-destruct success rate increased by 5%.",
                "Self-destruct success rate increased by 7%.",
                "Quick Strike effect increased by 1%.",
                "Quick Strike effect increased by 2%.",
                "Quick Strike effect increased by 3%.",
                "Gigant Smash success rate increased by 2%.",
                "Gigant Smash success rate increased by 3%.",
                "Gigant Smash success rate increased by 5%.",
                "Deft Step success rate increased by 2%.",
                "Deft Step success rate increased by 3%.",
                "Deft Step success rate increased by 5%.",
                "Effect of Mana Martyr increased by 25%.",
                "Effect of Mana Martyr increased by 40%.",
                "Effect of Mana Martyr increased by 50%.",
                "Revival success rate increased by 10%.",
                "Revival success rate increased by 15%.",
                "Revival success rate increased by 20%.",
                "WIS of all Guardians increasd by 10%.",
                "WIS of all Guardians increasd by 12%.",
                "WIS of all Guardians increasd by 15%.",
                "Quick Strike effect increased by 6%.",
                "Quick Strike effect increased by 8%.",
                "Quick Strike effect increased by 10%.",
                "Self-destruct success rate increased by 10%.",
                "Self-destruct success rate increased by 12%.",
                "Self-destruct success rate increased by 15%.",
                "All stats of Lightning Guardians increased by 10%.",
                "All stats of Lightning Guardians increased by 12%.",
                "All stats of Lightning Guardians increased by 15%.",
                "ATK of all Guardians increasd by 8%.",
                "Blood Gambit HP consumption reduced by 200.",
                "Blood Gambit HP consumption reduced by 300.",
                "Blood Gambit HP consumption reduced by 500.",
                "All stats of Wind Guardians increased by 1%.",
                "All stats of Wind Guardians increased by 3%.",
                "Deft Step success rate increased by 1%.",
                "DEF of all Guardians increasd by 2%.",
                "DEF of all Guardians increasd by 4%.",
                "DEF of all Guardians increasd by 6%.",
                "Blood Gambit HP consumption reduced by 600.",
                "Blood Gambit HP consumption reduced by 700.",
                "Blood Gambit HP consumption reduced by 900.",
                "All stats of Light Guardians increased by 10%.",
                "All stats of Light Guardians increased by 12%.",
                "All stats of Light Guardians increased by 15%.",
                "All stats of Water Guardians increased by 2%.",
                "All stats of Water Guardians increased by 4%.",
                "All stats of Water Guardians increased by 6%.",
                "Last Stand success rate increased by 3%.",
                "Last Stand success rate increased by 5%.",
                "Last Stand success rate increased by 7%.",
                "MP of all Guardians increasd by 2%.",
                "MP of all Guardians increasd by 3%.",
                "Gigant Smash success rate increased by 1%.",
                "HP of all Guardians increasd by 10%.",
                "HP of all Guardians increasd by 12%.",
                "HP of all Guardians increasd by 15%.",
                "Gigant Smash success rate increased by 10%.",
                "Gigant Smash success rate increased by 12%.",
                "Gigant Smash success rate increased by 15%."
            )
        };
    } else if (l == LANG_JP) {
        return {
            getLanguage: function() {
                return l;
            },
            getURLArgs: function(args) {
                return "lang=jp&" + args;
            },
            getImageFolder: function() {
                return "images/jp/";
            },
            places: new Array(
                "バーンサイド平原",
                "バーンサイド平原 (夜)",
                "グレイブロウ火山地帯",
                "グレイブロウ火山地帯 (夜)",
                "ストームリーチ雪原地帯",
                "ストームリーチ雪原地帯 (夜)",
                "ムーンデッド砂漠",
                "ムーンデッド砂漠 (夜)",
                "ガーネット海域",
                "ガーネット海域 (夜)",
                "招待特典",
                "Coliseum Rewards",
                "W チャンスキャンペーン",
                "フレンドポイント特典",
                "試練の神殿",
                "試練の神殿 2",
                "スペシャルコードプレゼント",
                "他の特典",
                "クエスト",
                "Login Rewards",
                "All Hunting Grounds",
                "Crimson Keep",
                "聖夜に舞い散る黒い雪",
                "ゼウス星雲",
                "エデン",
                "バビロン"
            ),
            events: new Array(
                "なし",
                "FFIV",
                "FFV",
                "Wild Dragon Hunter",
                "Bahamut's Descent",
                "Epic of Gilgamesh",
                "試練の神殿",
                "Rainbow Pixie Event",
                "Sevenstone Serpents Event",
                "Seven Deadly Weapons Event",
                "Mass Slime Panic",
                "試練の神殿 2",
                "スペシャルコードプレゼント",
                "電撃ゲームアプリ",
                "おかえり特典",
                "ファミ通App No.006特典",     
                "Chess Guardians",
                "FFXI 10 周年イベント",
                "バグベアの悪夢",
                "Kingdom Conquest II",
                "フィッシャーマンズ・カップ",
                "Summer Hunt",
                "海が真紅に染まった日",
                "Final Fantasy XIV",
                "東京ゲームショウ2012",
                "グライアイの見せる夢",
                "東京ゲームショウ2013",
                "スイートナイトメア",
                "iPhoneカバー購入特典",
                "桃色の花嫁",
                "Lightning Returns FFXIII",
                "Crimson Keep",
                "恐怖！異世界かなの捕食者",
                "聖夜に舞い散る黒い雪",
                "ファミ通App vol.10 購入特典",
                "FINAL FANTASY X | X-2 HD Remaster 購入特典",
                "ファミ通App vol.12 購入特典",
                "新春ハント",
                "FINAL FANTASY X | X-2 HD Remaster",
                "Guardian Cross Poll 2014",
                "伝説のタイタン",
                "Valentine Hunt Event",
                "Bahamut Returns!",
                "月下の砂塵",
                "暗黑の罠",
                "聖剣伝説 RISE of MANA",
                "流星のオリオン",
                "魔を誘う漁火",
                "白光極夜",
                "凍土の機神",
                "Week #2 Spawn rates now doubled!",
                "砂海を彷徨う風精",
                "蒼雷黑風",
                "竜空を生きる者達",
                "Popular Guardians Gather The Goldendawn Hunt!",
                "2nd Anniversary - ゴールドハント",
                "黑翼の墮天使",
                "妖誘の魔道師", // Serpenchanter's Curse
                "死神焔舞", // Death Fire Hunt
                "双翼天臨", // Twin Angels
                "慈しみの女神", // Goddess of Love
                "神代の踊り手", // Dancing God
                "天空の花園", // Garden in the Sky
                "聖杯の守護騎士", // Corbenic Knight
                "復讐の悪魔", // Arioch
                "天界の神娘", // Shandian Niangniang
                "拮抗する者達", // Maeve & Varuna
                "東京ゲームショウ2014", // TGS 2014
                "闇に染まる祝祭", // Seeping Darkness
                "魔女達の狂宴" // Witches' Brew
            ),
            borders: new Array(
                "なし",
                "弱",
                "中",
                "強",
                "最強"
            ),
            attributes: new Array(
                "Fire",
                "Water",
                "Soil",
                "Thunder",
                "Wind",
                "Poison",
                "Undead",
                "Machine",
                "Light",
                "Darkness",
                "Naught"
            ),
            types: new Array(
                "クール",
                "カオス",
                "セクシー",
                "パワフル",
                "ブレイブ",
                "ヘイスト",
                "インテリ",
                "エース",
                "クール",
                "ワイルド",
                "バージン",
                "バーサク",
                "ヒーロー",
                "ソニック",
                "ワイズ",
                "エース",  
                "カオス",
                "セクシー",
                "パワフル",
                "ブレイブ",
                "ヘイスト",
                "インテリ"
          ),
            skills: new Array(
                new Array("スラッシュ",            "強物理+1"),
                new Array("クロススラッシュ",      "強物理+2"),
                new Array("ハードスラッシュ",      "強物理+3"),
                new Array("サウザンドスラッシュ",  "強物理+4"),
                new Array("ハードブロー",          "強物理+1"),
                new Array("ヘビーブロー",          "強物理+2"),
                new Array("ダブルインパクト",      "強物理+3"),
                new Array("ストームインパクト",    "強物理+4"),
                new Array("バーニングビート",      "火+1"),
                new Array("バーニングストライク",  "火+2"),
                new Array("エクスプロージョン",    "火+3"),
                new Array("メテオストーム",        "火+4"),
                new Array("メテオストーム改",      "火+4改"),
                new Array("アクアスプラッシュ",    "水+1"),
                new Array("アクアショット",        "水+2"),
                new Array("アクアバースト",        "水+3"),
                new Array("メイルシュトローム",    "水+4"),
                new Array("アースニードル",        "土+1"),
                new Array("アーススパイク",        "土+2"),
                new Array("ロックバイト",          "土+3"),
                new Array("アースクェイク",        "土+4"),
                new Array("サンダーボルト",        "雷+1"),
                new Array("サンダーストライク",    "雷+2"),
                new Array("コールライトニング",    "雷+3"),
                new Array("チェーンライトニング",  "雷+4"),
                new Array("ウィンドカッター",      "風+1"),
                new Array("ウィンドエッジ",        "風+2"),
                new Array("ワールウィンド",        "風+3"),
                new Array("トルネード",            "風+4"),
                new Array("ポイズンバブル",        "毒+1"),
                new Array("ポイズンミスト",        "毒+2"),
                new Array("ポイズンフィールド",    "毒+3"),
                new Array("ヴェノムライアット",    "毒+4"),
                new Array("デスゲイズ",            "不死+1"),
                new Array("デスタッチ",            "不死+2"),
                new Array("デスホールド",          "不死+3"),
                new Array("デスキッス",            "不死+4"),
                new Array("ホーリーライト",        "光+1"),
                new Array("シャインスマイト",      "光+2"),
                new Array("シャインバースト",      "光+3"),
                new Array("パニッシュ",            "光+4"),
                new Array("ダークネス",            "闇+1"),
                new Array("ダークペイン",          "闇+2"),
                new Array("ダークスォーム",        "闇+3"),
                new Array("ナイトメア",            "闇+4"),
                new Array("マイト",                "攻撃+10%"),
                new Array("グレーターマイト",      "攻撃+20%"),
                new Array("マスマイト",            "攻撃+25%"),
                new Array("プロテクト",            "防御+10%"),
                new Array("グレータープロテクト",  "防御+20%"),
                new Array("マスプロテクト",        "防御+25%"),
                new Array("アルティメットガード",   "防御+40%"),
                new Array("ヘイスト",              "素早さ+10%"),
                new Array("グレーターヘイスト",    "素早さ+20%"),
                new Array("マスヘイスト",          "素早さ+25%"),
                new Array("カニング",              "賢さ+10%"),
                new Array("グレーターカニング",    "賢さ+20%"),
                new Array("マスカニング",          "賢さ+25%"),
                new Array("マイト & プロテクト",   "攻防+10%"),
                new Array("マイト & ヘイスト",     "攻早+10%"),
                new Array("マイト & カニング",     "攻賢+10%"),
                new Array("プロテクト & ヘイスト", "防早+10%"),
                new Array("プロテクト & カニング", "防賢+10%"),
                new Array("ヘイスト & カニング",   "早賢+10%"),
                new Array("ウィークネス",          "敵攻撃力-20%"),
                new Array("ディフェンスダウン",    "敵防御力-20%"),
                new Array("スロー",               "敵素早さ-20%"),
                new Array("グラビティウェーブ",    "敵素早さ-40%"),
                new Array("マインドブラスト",      "敵賢さ-20%"),
                new Array("サイキックブラスト",    "敵賢さ-40%"),
                new Array("ヒール",                "HP 回復"),
                new Array("グレーターヒール",      "HP 回復大"),
                new Array("ライフドレイン",        "敵 HP 吸収"),
                new Array("エナジードレイン",      "敵 MP 吸収"),
                new Array("ラストスタンド",        "一撃耐える"),
                new Array("自爆",                  "敵にダメージ"),
                new Array("クイックストライク",    "先攻"),
                new Array("リバイバル",            "復活"),
                new Array("天界の波動",            "強化無効"),
                new Array("ギガントスラッシュ",    "一撃大ダメージ"),
                new Array("光速ターン",            "物理回避"),
                new Array("アビリティロック",      "MP 無効"),
                new Array("マルチブロック",        "全属性防御"),
                new Array("マインドブレイク",      "混乱"),
                new Array("カウンター",           "反撃"),
                new Array("ファントムギア",        "機械+4"),
                new Array("ソウルスラッシュ",      "HP消費攻撃"),
                new Array("呪縛",                 "呪い"),
                new Array("ハードプレッシャー",   "敵攻撃-40%"),
                new Array("クラッシュドレイン",   "HP吸収大"),
                new Array("ポイズンアタック",     "継続ダメージ"),
                new Array("ディープスリープ",     "行動不能"),
                new Array("チェーンライトニング改", "雷+4改"),
                new Array("デスプレデター",     "捕食"),
                new Array("トランスポジション",  "HP,MP入替"),
                new Array("パワーシフト",        "攻+20%敵防-20％"),
                new Array("マインドシフト",       "賢+20%敵賢-20％"),
                new Array("レジスタント",        "耐性"),
                new Array("ファストシフト",        "素+20%敵賢-20%"),
                new Array("暗黒光速ターン", "絶対物理回避"), // Shadow Deft Step
                new Array("炸裂", "敵に必中ダメージ"), // Detonation
                new Array("ミラージュドライヴ", "属性回避"), // Mirage Drive
                new Array("暗黒マインドブレイク",    "絶対混乱"), // Shadow Mind Rift
                new Array("ワイズスマイト", "先制魔攻"), // Wise Smite
                new Array("ナイトメア改 ", "闇+4改"), // Darkness +4x
                new Array("アースクェイク改", "土+4改"), // Earth +4x
                new Array("暗黒ギガントスラッシュ", "一撃大ダメージ"), // Shadow Gigant Smash
                new Array("暗黒リバイバル", "暗黒復活"), // Shadow Revival
                new Array("暗黒アビリティロック", "MP 無効") // Shadow Sap
            ),
            exskills: new Array(
                "火属性ガーディアンの全ステータスを10%アップ",
                "火属性ガーディアンの全ステータスを12%アップ",
                "火属性ガーディアンの全ステータスを15%アップ",
                "土属性ガーディアンの全ステータスを2%アップ",
                "土属性ガーディアンの全ステータスを4%アップ",
                "土属性ガーディアンの全ステータスを6%アップ",
                "風属性ガーディアンの全ステータスを2%アップ",
                "風属性ガーディアンの全ステータスを4%アップ",
                "風属性ガーディアンの全ステータスを6%アップ",
                "毒属性ガーディアンの全ステータスを10%アップ",
                "毒属性ガーディアンの全ステータスを12%アップ",
                "毒属性ガーディアンの全ステータスを15%アップ",
                "機械属性ガーディアンの全ステータスを2%アップ",
                "機械属性ガーディアンの全ステータスを4%アップ",
                "機械属性ガーディアンの全ステータスを6%アップ",
                "光属性ガーディアンの全ステータスを2%アップ",
                "光属性ガーディアンの全ステータスを4%アップ",
                "光属性ガーディアンの全ステータスを6%アップ",
                "闇属性ガーディアンの全ステータスを2%アップ",
                "闇属性ガーディアンの全ステータスを4%アップ",
                "闇属性ガーディアンの全ステータスを6%アップ",
                "全ガーディアンのHP1%アップ",
                "全ガーディアンのHP2%アップ",
                "全ガーディアンのHP3%アップ",
                "全ガーディアンのHP5%アップ",
                "全ガーディアンのHP7%アップ",
                "全ガーディアンのMP5%アップ",
                "全ガーディアンのMP7%アップ",
                "全ガーディアンのMP10%アップ",
                "全ガーディアンの攻撃力2%アップ",
                "全ガーディアンの攻撃力4%アップ",
                "全ガーディアンの攻撃力6%アップ",
                "全ガーディアンの攻撃力10%アップ",
                "全ガーディアンの攻撃力12%アップ",
                "全ガーディアンの攻撃力15%アップ",
                "全ガーディアンの防御力10%アップ",
                "全ガーディアンの防御力12%アップ",
                "全ガーディアンの防御力15%アップ",
                "全ガーディアンの賢さ2%アップ",
                "全ガーディアンの賢さ4%アップ",
                "全ガーディアンの賢さ6%アップ",
                "不死アビリティの成功率1%アップ",
                "不死アビリティの成功率2%アップ",
                "不死アビリティの成功率3%アップ",
                "自爆の成功率3%アップ",
                "自爆の成功率5%アップ",
                "自爆の成功率7%アップ",
                "クイックストライクの威力1%アップ",
                "クイックストライクの威力2%アップ",
                "クイックストライクの威力3%アップ",
                "ギガントスラッシュの成功率2%アップ",
                "ギガントスラッシュの成功率3%アップ",
                "ギガントスラッシュの成功率5%アップ",
                "光速ターンの成功率2%アップ",
                "光速ターンの成功率3%アップ",
                "光速ターンの成功率5%アップ",
                "呪縛の効果25%アップ",
                "呪縛の効果40%アップ",
                "呪縛の効果50%アップ",
                "リバイバルの成功率10%アップ",
                "リバイバルの成功率15%アップ",
                "リバイバルの成功率20%アップ",
                "全ガーディアンの賢さ10%アップ",
                "全ガーディアンの賢さ12%アップ",
                "全ガーディアンの賢さ15%アップ",
                "クイックストライクの威力6%アップ",
                "クイックストライクの威力8%アップ",
                "クイックストライクの威力10%アップ",
                "自爆の成功率10%アップ",
                "自爆の成功率12%アップ",
                "自爆の成功率15%アップ",
                "雷属性ガーディアンの全ステータスを10%アップ",
                "雷属性ガーディアンの全ステータスを12%アップ",
                "雷属性ガーディアンの全ステータスを15%アップ",
                "全ガーディアンの攻撃力8%アップ",
                "ソウルスラッシュの消費HP200軽減",
                "ソウルスラッシュの消費HP300軽減",
                "ソウルスラッシュの消費HP500軽減",
                "風属性ガーディアンの全ステータスを1%アップ",
                "風属性ガーディアンの全ステータスを3%アップ",
                "光速ターンの成功率1%アップ",
                "全ガーディアンの防御力2%アップ",
                "全ガーディアンの防御力4%アップ",
                "全ガーディアンの防御力6%アップ",
                "ソウルスラッシュの消費HP600軽減",
                "ソウルスラッシュの消費HP700軽減",
                "ソウルスラッシュの消費HP900軽減",
                "光属性ガーディアンの全ステータスを10%アップ",
                "光属性ガーディアンの全ステータスを12%アップ",
                "光属性ガーディアンの全ステータスを15%アップ",
                "水属性ガーディアンの全ステータスを2%アップ",
                "水属性ガーディアンの全ステータスを4%アップ",
                "水属性ガーディアンの全ステータスを6%アップ",
                "ラストスタンドの成功率3%アップ",
                "ラストスタンドの成功率5%アップ",
                "ラストスタンドの成功率7%アップ",
                "全ガーディアンのMP2%アップ",
                "全ガーディアンのMP3%アップ",
                "ギガントスラッシュの成功率1%アップ",
                "ギガントスラッシュの成功率10%アップ",
                "ギガントスラッシュの成功率12%アップ",
                "ギガントスラッシュの成功率15%アップ"
            )
        };
    }
};

/* Default language. */
if (typeof LANG == 'undefined')
    LANG = LANG_EN;

var locale = new Locale(LANG)
