/*==============================BASIC FUNCTIONS===================================*/

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function upright_or_reversed() {
  u = getRndInteger(0, 1);
  if (u == 0) {
    return "upright";
  } else {
    return "reversed";
  }
}

/*=================================MAJOR ARCANA===================================*/

function fool() {
  if (u == 0) {
    return "<p>恋愛運で馬鹿カードは浮かれて即興的だが、少し気まぐれだ。 恋愛運における馬鹿という言葉は、恋に落ちすぎて興奮を抑えることができないことを表している。 シングルの人に衝動的で心配のないロマンスが生まれるだろう. 馬鹿カードが現れたら、楽しみがいっぱいのロマンスに備え、この時間、本当の愛があなたの思い通りになるなら、逃さないように気をつけなさい。</p>";
  } else {
    return "<p>愚かな恋愛は、冒険を追い求めることで、本当に愛情を欲することを妨げることや、現在の関係に不確実性をもたらしていることを表すことができる。 バカがひっくり返ると、二人の関係は興味深いですが危険な行動を伴うこともあります。 ご注意ください、これは不安を招きかねませんし、読者の関係を不安な根拠に置くこともあります。</p>";
  }
}
var Fool = {
  name: "The Fool",
  index: 0,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://upload.wikimedia.org/wikipedia/en/9/90/RWS_Tarot_00_Fool.jpg",
  rw_addendum:
    "어리석음, 조증, 사치, 도취, 정신 착란, 광란, 비통함.\n \
    reversed : 태만, 부재, 분배, 부주의, 무관심, 무효, 허영심.",
  rw_meaning: fool()
};

function Magician() {
  if (u == 0) {
    return "<p>恋愛運で魔術師カードは肯定的なカードです。 恋愛する人たちにとって魔法使い太郎は、より強い献身と幸せを期待できる新しくて深い段階に進む関係を意味する。 あなたが未婚なら、魔法使いは今が新しい人に会う良い時だと言います。 あなたのパートナーは真剣で良い意図を持ってあなたに優しくしてくれるでしょう。</p>";
  } else {
    return "<p>恋愛運を逆にした魔法サガードはあなたの要求と欲望に対してパートナーにより率直で率直である必要があることを表すことができる。 パートナーを操縦したいという誘惑にかられたら，やめてください. 正直さはまやかしよりもずっと役に立つだろう.  それはまた、信頼できるように見えるパートナー恋人が彼らの利己的な理由であなたを操るために、あなたに対する影響力を使うこともできるということを表すことができる。  もしあなたが未婚なら、魔法サガードはあなたが愛とあなたの未来の恋愛生活に対して冷笑的になり、あなたの人生に良い人を引き付けられないような感じを与えることができると言う。 信頼を失わないでください。 もし、皆さんが前向きに考え、愛と光を世の中に送り込んだら、皆さんは結局皆さんに同じものを再び引き込むでしょう！</p>";
  }
}
var Magician = {
  name: "The Magician",
  index: 1,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg",
  rw_addendum:
    "Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; \
    self-confidence, will; the Querent, if male. Reversed: Physician, Magus, mental disease, disgrace, disquiet.",
  rw_meaning: Magician()
};

function HighPriestess() {
  if (u == 0) {
    return "<p>もし、あなたが男であれば、大製糸場カードはあなたが恋に落ちることを表すカードです。 通常、あなたがあなたに到達できないかもしれない魅力的な女性らしい感覚の人にはまるということを意味します。 もし、あなたが女性であれば、大製糸場カードはあなたが1人以上の人々に告白されることを表します。</p>";
  } else {
    return "<p>逆になった大製糸場カードは理性的にあなたを望む人がいるかもしれません。 しかし彼らの動機に疑問を持つかもしれないし，注目を浴びることで気分が悪くなるかもしれない. 統制されない感情爆発と高い性的緊張が予想されます。  もし、あなたがパートナーに対する忍耐力を失ったり、激しい論争を起こしたら、あなた自身のための時間を持ちましょう。</p>";
  }
}
var HighPriestess = {
  name: "The High Priestess",
  index: 2,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://upload.wikimedia.org/wikipedia/en/8/88/RWS_Tarot_02_High_Priestess.jpg",
  rw_addendum:
    "Secrets, mystery, the future as yet unrevealed; the woman who interests the Querent, if male;\n \
    the Querent herself, if female; silence, tenacity; mystery, wisdom, science. Reversed: Passion, moral or physical ardour, conceit, surface knowledge.",
  rw_meaning: HighPriestess()
};

function Empress() {
  if (u == 0) {
    return "<p>恋愛運で皇后カードは理性を得られるとてもポジティブなカードですね。  未婚の人なら恋愛を始める用意をしてください。 なぜなら、皇后カードは本当の愛とロマンスが訪れるということを表しているからです。 恋愛中であれば，それは献身的な関係をますます深め，愛らしく，切なくなる指標だ。</p>";
  } else {
    return "<p>「あなたが独身で男性に関心があるなら、愛のタロットの文脈で皇帝は年配男性とのロマンチックな関係を表すことができます」。 彼の構造，秩序，論理，日常生活は好まれるでしょう. いい影響を及ぼすだろうが、ロマンスは彼女の強みではない。 しかし、彼は実用的で信頼でき、保護的です。 「あなたが独身で女性に関心があるなら、皇帝タロットカードはあなたの感情にもっと開放的になる必要がある」という信号です。 特に誰かに対する感情があるなら、銃弾をかみしめて彼女に言わなければなりません。 彼女が推測するだろうと期待しないでください! すでに関係のある人々にとって、皇帝は一夫一婦の制と長く続く関係の良い兆しです。 関係問題を経験していれば、改善され始め、関係の安定性が回復されるでしょう。</p>";
  }
}
var Empress = {
  name: "The Empress",
  index: 3,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://upload.wikimedia.org/wikipedia/en/d/d2/RWS_Tarot_03_Empress.jpg",
  rw_addendum:
    "Fruitfulness, action, initiative, length of days; the unknown, clandestine; also difficulty, doubt, ignorance.\n\
    Reversed: Light, truth, the unravelling of involved matters, public rejoicings; according to another reading, vacillation.",
  rw_meaning: Empress()
};

function Emperor() {
  if (u == 0) {
    return "<p>「あなたが独身で男性に関心があるなら、愛のタロットの文脈で皇帝は年配男性とのロマンチックな関係を表すことができます」。 彼の構造，秩序，論理，日常生活は好まれるでしょう. いい影響を及ぼすだろうが、ロマンスは彼女の強みではない。 しかし、彼は実用的で信頼でき、保護的です。 「あなたが独身で女性に関心があるなら、皇帝タロットカードはあなたの感情にもっと開放的になる必要がある」という信号です。 特に誰かに対する感情があるなら、銃弾をかみしめて彼女に言わなければなりません。 彼女が推測するだろうと期待しないでください! すでに関係のある人々にとって、皇帝は一夫一婦の制と長く続く関係の良い兆しです。 関係問題を経験していれば、改善され始め、関係の安定性が回復されるでしょう。</p>";
  } else {
    return "<p>恋愛運でひっくり返った皇帝タロットカードは葛藤や不幸を起こす関係の力の不均衡を表すことができます。 それは一人のパートナーが他のパートナーを統制したり、所有欲が強かったり、頑固で威圧的であることを意味することができます。 このようなタイプの行動は、他のパートナーが閉じ込められた感じを受けます。 皇帝の逆転は、関係の構造を望むものと、統制怪物になるものとのバランスが必要だということを示しています。 妥協する方法を学んでください! あなたが独身なら、裏返ったタロットカードはあなたの父親の問題があなたのパートナー選択に良くない影響につながっていることを表すことができます。 あなたを利用しようとする人々の関心を引き付けないためには、このような問題を解決しなければなりません。</p>";
  }
}
var Emperor = {
  name: "The Emperor",
  index: 4,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://upload.wikimedia.org/wikipedia/en/c/c3/RWS_Tarot_04_Emperor.jpg",
  rw_addendum:
    "사회성 권위, 지배, 안정, 행동력, 성취, 달성, 완전 강한 긍정, 능력자, 사업자기질, 완벽주의\n\
    reversed: 낭비하는, 의심 많은, 자기 주장이 강함, 게으름",
  rw_meaning: Emperor()
};

function Hierophant() {
  if (u == 0) {
    return "<p>現在恋愛をしている人々にこのカードは結婚と約束カードだ。 このカードが現れたら、関係がより強固になり、新しい関係に移動し始めることが予想できます。 それは、あなたとパートナーが同じ価値と目標を共有していることを示しているが、もしあなたが献身的な関係を持ちたいなら、非常に良いカードだ。 もしあなたが未婚であれば、このカードは献身、愛、そして安全の上に築かれる新しい関係をすぐに表すでしょう。</p>";
  } else {
    return "<p>独身の場合、慣習的でない関係やそれに対する欲求を意味する。 結婚をしないと選択することで、伝統と決別するのかもしれない。 それは伝統的な性の役割を逆転することもできる. 価値観と目標に関しては、あなたとパートナーが同じ考えを持っていないことを示している。 これは読者の関係に葛藤と不安をもたらしているかもしれません。 皆さん一人一人は心を開いて相手がどこから来たのか理解しようと努力しなければなりません。  どちらか一方を君の安全地帯から押し出さずに合意に達するためには妥協が必要だ。</p>";
  }
}
var Hierophant = {
  name: "The Hierophant",
  index: 5,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://upload.wikimedia.org/wikipedia/en/8/8d/RWS_Tarot_05_Hierophant.jpg",
  rw_addendum:
    "Marriage, alliance, captivity, servitude; by another account, mercy and goodness; inspiration; the man to whom the Querent has recourse.\n\
    Reversed: Society, good understanding, concord, overkindness, weakness.",
  rw_meaning: Hierophant()
};

function Lovers() {
  if (u == 0) {
    return "<p>恋愛運でこのカードは皆さんが得られる最高のカードの中の1つです！ これはソウルメイトカードで、2人の間の絆と同質感を表しています。 もしあなたが未婚なら、近いうちに恋愛を始めることになります！ これは単なる熱愛それ以上になるだろう. ロマンスはもとより強烈な魅力と性的な情熱が、深い絆と相互理解があるだろう。 このメインアルカナカードはあなたとの関係でロマンスに再び火が付くことを期待させます。 あなたとあなたのパートナーとのつながりはあなたが想像したよりも深まり増加するでしょう。 恋人同士はあなたとパートナーがほとんどのカップルが夢見ることができる精神的、感情的、精神的、肉体的関係を持っていることを示します。</p>";
  } else {
    return "<p>逆の恋人カードは性的な面は依然として素晴らしいですが、他の重要な部分であなたとあなたのパートナーが同じ考えをしていないこともあるということを表すことができます。 パートナーが感情的にこの関係に投資している兆候もある. 恐れや信頼の問題は読者の方が完全に飛び込まないようにすることがあり、それは関係が栄えるために必要です。 皆さんは未来について他の目標、価値観、または希望を持つことができます。 その関係は、二人の感情が様々なレベルで結ばれたことから始まったかもしれませんが、あなたは以前ほど親密さを感じていません。 根本原因を確認するには、サポートカードを参考にしてください。 理由が何であれ、関係が生き残るためにはこのような違いが解消されなければなりません。 未婚の場合，恋人たちはあなたと関係があるということを意味するが，すぐに起こらないかもしれない. 間違った理由でパートナーを選ぶことを表すことができます。 もし、皆さんが誰かと一緒になった場合、このMAJorArcanaカードは皆さんが一つ以上の方法で彼らと繋がるよう指示します。 性的関係、強烈な関係すら、それだけで関係を結ぶには十分ではありません。</p>";
  }
}
var Lovers = {
  name: "The Lovers",
  index: 6,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg",
  rw_addendum:
    "Attraction, love, beauty, trials overcome.\n\
    Reversed: Failure, foolish designs. Another account speaks of marriage frustrated and contrarieties of all kinds.",
  rw_meaning: Lovers()
};

function Chariot() {
  if (u == 0) {
    return "<p>恋愛運で電車カードは成功するためには感情を征服するべきだと提案します。 もしあなたとパートナーが苦労しているなら，一緒にコミュニケーションを取り，一生懸命仕事をする必要があるだろう. あなたが直面した挑戦は克服することができません。 彼らはただそれらを解決するために少しの努力と集中が必要です。 もし、あなたやあなたのパートナーの不安が問題になるなら、このカードは成功するために心と心のバランスを取る必要があるので、これらを調節することが重要だ。 もしパートナーが論理を感情的武器として使うなら、関係を作動させるためには防衛線を迂回しなければならないかもしれません。 未婚の場合は，このカードで過去の出来事によって疲れが出たことを示している. このカードは過去の痛みから立ち直って前に進むことができるという意味を盛り込んでいる。</p>";
  } else {
    return "<p>逆さの電車カードの意味は、恋愛のスピードが遅いということです。 もし必要なだけ速く進めないとすれば、あなたは忍耐強く彼らの時間がやっていけるという確信を持つべきです。 仕事を強要することは、災いとなり得る。 同様に、もし読者の方が関係を次の段階に発展させるべきだというプレッシャーを感じたら、読者の方が強要されることを許してはいけません。 一歩下がって、皆さんが何を準備したのか考えてみてください。 パートナーに明確にして警戒を決めてください。 もしあなたが未婚なら、あなたはもうすぐ誰かに会うかもしれませんが、同じメッセージが適用されます、急がないでください。 新しい関係の興奮を楽しみ、プレッシャーを感じず、新しい恋について知る時間を持ちなさい。 時には、ただ流れに任せて、各自の速度に合わせて変化させるのがもっと正しい判断かもしれません。</p>";
  }
}
var Chariot = {
  name: "The Chariot",
  index: 7,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg",
  rw_addendum:
    "Succour, providence; also war, triumph, presumption, vengeance, trouble.\n\
    Reversed: Riot, quarrel, dispute, litigation, defeat.",
  rw_meaning: Chariot() 
  };

function Strength() {
  if (u == 0) {
    return "<p>独身の場合は、強盗カードは自信が光ったときに誰かに会える絶好のチャンスです。 それは少し荒っぽい面のある人との関係指標にもなるかもしれない. これは非常に興味深い予想ですが，もしこの人が乱暴すぎるとしたら，皆さんは彼らを手なずける必要を感じるかもしれません. もし彼らを手なずけたければ、優しく丸めろ、支配しようとするな。 すでに付き合っている人にとって強さは一般的に皆さんが近くて団結した強い夫婦だということを示す良い指標です。 もし読者の方の関係が激しい感情的激変を経験したならば、このカードは読者の方が再びその上に上り始めていて、過去に直面したある問題が実際に読者の方をより近づけたということを暗示しています。</p>";
  } else {
    return "<p>もしあなたが独身なら、引きこもりのタロットカードは過去の失恋や別れの悪さから立ち直るために必要だったかもしれない寂しさと孤独の期間の向こう側に出てくることを示している。 貴方はすぐ新しい出発をする準備が出来るでしょう。 それは純潔や純潔を表すこともできる。 このカードはもっと賢明な年老いたパートナーを表すことができる. パートナーと連絡を取るためにもさらに努力をしなければならないかもしれない. それは，パートナーがあなたと楽しい時間を共に過ごすよりも，あなた自身の仕事に集中しすぎていることを示している.</p>";
  }
}
var Strength = {
  name: "Strength",
  index: 8,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg",
  rw_addendum:
    "Power, energy, action, courage, magnanimity; also complete success and honours.\n\
    Reversed: Despotism, abuse if power, weakness, discord, sometimes even disgrace.",
  rw_meaning: Strength()};

function Hermit() {
  if (u == 0) {
    return "<p>もしあなたが独身なら、引きこもりのタロットカードは過去の失恋や別れの悪さから立ち直るために必要だったかもしれない寂しさと孤独の期間の向こう側に出てくることを示している。 貴方はすぐ新しい出発をする準備が出来るでしょう。 それは純潔や純潔を表すこともできる。 隠遁者カードは年上のもっと賢明なパートナーを表すことができる. パートナーと連絡を取るためにもさらに努力をしなければならないかもしれない. それは，パートナーがあなたと楽しい時間を共に過ごすよりも，あなた自身の仕事に集中しすぎていることを示している.</p>";
  } else {
    return "<p>逆になった隠遁カードは寂しさの強い指標だ。 もし皆さんが付き合っていたら、それは皆さんがパートナーに疎外感を感じたり、拒絶されたりしたことを暗示します。 また、ユーザーとパートナーが忙しすぎて電話をする時間がないことを表すことができます。 これはあなたが恋愛中であるにもかかわらず、あなたを寂しさを感じるのかもしれません。 他人が関係を維持しようとしている間に，それは関係を絶つことを暗示することもできる. 独身の場合、隠れ家はあなたが棚の上に取り残されるのを恐れたり、特別な人に会う機会を逃したと感じることがあることを表すことができる。 このカードは長い独身生活を送った今が愛を探し始める時だということを逆に表している。 恐怖はさておき、また外に出なければならない。もしあなたが最近あなたのパートナーと別れたら、それはあなたが前の彼女とまた会いたいという表れかも知れない。</p>";
  }
}
var Hermit = {
  name: "The Hermit",
  index: 9,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://upload.wikimedia.org/wikipedia/en/4/4d/RWS_Tarot_09_Hermit.jpg",
  rw_addendum:
    "Prudence, circumspection; also and especially treason, dissimulation, roguery, corruption.\n\
    Reversed: Concealment, disguise, policy, fear, unreasoned caution.",
  rw_meaning: Hermit()};

function WheelFortune() {
  if (u == 0) {
    return "<p>幸運の車輪カードは通常肯定的な変化を示すので，次のステップを踏むかパートナーと新しい局面を始めるか，さらにはある種の共同プロジェクトを始めることができる. 同時に、このカードがもたらす変化はあなたにとって難儀に感じられるかもしれない。 もし、異性関係に満足していないと感じたら、このカードは激変の引き金になることがあります。 パートナーが関係改善のために状況を揺るがし、必要な変化をもたらすかもしれないし、そうでなければそれはあなたをより良いものとして自由に動かせる別れになるかもしれない。 どんなことが起ころうとも、それは皆さんの居場所にあなたを導いてくれます。 もしあなたが未婚の場合は、このカードにある幸運の車輪は宇宙があなたに愛をもたらすために働いているが、宇宙と一緒に働かなければならないということを表すことができる。 あなたは恋に落ちる幸運があるから今は自分を表に出して新しい人に会うときです。 運命の車輪は運命のカードであるため、愛の脈絡でそれはソウルメイトを意味することができる。 未婚の場合は異性と付き合うかもしれない. あなたとあなたのパートナーは運命だということを表すかもしれない！</p>";
  } else {
    return "<p>もしあなたが関係にあるならば、幸運の車輪は低迷または関係から抜け出すきらめきを表すことができる。 だからといって、すべての関係には起伏があるため、関係を終わらせるために自動的に性急な決定を下さなければならないわけではない。 関係のある局面から別の局面に移るかもしれないし、これはその間にスランプに陥るかもしれない。 状況を評価してあなたに合うものを探そうと努力してください。 どちらにしてもこの激変の時間は過ぎていくだろう。 以前のミスが戻って問題を起こす可能性があります。 もし未婚で縁がなかったと感じるなら、あなたは自分の選択肢や行動に注意する必要がある。 あなたは愛の機会を捨てたことがありますか? もしそうなら、あなたが間違いから学べば、あなたはまた別の幸せの機会を得るでしょう。 この人生で学ぶべき教訓を選択し、過去から学び、このようなカルミック教訓をあなたの未来に活かすことで、あなたの幸運を変えることができるでしょう。 シングルであれ恋人同士であれ、このカードは狂いや遅れを経験できる合図です。</p>";
  }
}
var WheelFortune = {
  name: "Wheel of Fortune",
  index: 10,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://upload.wikimedia.org/wikipedia/en/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg",
  rw_addendum:
    "Destiny, fortune, success, elevation, luck, felicity.\n\
    Reversed: Increase, abundance, superfluity.",
  rw_meaning: WheelFortune()};

function Justice() {
  if (u == 0) {
    return "<p>独身の場合、このカードは法曹界で働いている人(判事、弁護士、法務秘書など)との関係を表すことができます。 てんびん座と一致するのがタロットカードなので、てんびん座が皆さんの生活に入ってくるかもしれません。 もし、皆さんが他の人たちに誠実で親切に接し、その代価としていい待遇を受けられなかったとしたら、愛のタロット読書での定義は皆さんが皆さんの人生に入ってくる資格のある愛するパートナーと一緒にこの不均衡が即ち矯正されようとしているということを表しています。 それはまた、あなたに対する悪い接し方が代価を受けるということを意味します。 正義が本当に良い兆しなのか悪い兆しなのかはあなたとあなたのパートナーの行動によります。 もし、皆さんが2人とも正直で皆さんの関係で誠実に行動したならば、皆さんは和合の期間、またはより大きな献身という形で補償を受けることになるでしょう。 それは結婚契約を表し、結婚を表すことができます。 しかし、どちらか1人が正直でなかったり、浮気をしたとすれば、真実は究明され、正直ではない人はそれをばら撒くことを示します。</p>";
  } else {
    return "<p>もし、皆さんが関係にあれば、このカードはトリックや嘘がばれるきっかけになることがあります。 ですから、もし皆さんがパートナーに浮気をしたり嘘をついたら、大きな反響を予想しましょう。 あなたとパートナーとのどんな議論もカードとして終わりがないように思えることになるかもしれない. それはまた、皆さんが公正に扱われていないか、関係で同等に扱われていないと感じているという表れかもしれません。 読者の方がパートナーに審判を下す前に、関係で読者の方の役割をよく見て、その責任をパートナーに転嫁することで公正かどうかを自らに問いかけてみてください。 もし読者の方が関係問題を評価して読者の方に問題がないと感じたなら、読者の方は依然としてその状況で学ぼうと努力しなければなりません」 覚えておいてください、私たちは人々に、私たちに接する方法と、私たちが我慢する方法を教えます、私たちは最終的に得られます！ もし、皆さんが未婚であれば、定義が逆になったことは皆さんが当然の関係について準備ができていると感じることができますが、皆さんがこれから進むために必要な過去の関係から教訓を得られず、同じミスを繰り返さないということを表すことができます。 それはまた皆さんの関係バランスが欠けている傾向にあることを表し、関係をこじらせることもできます。 私たちは皆新しい愛の最初の興奮に捕らわれるが、自分を完全に失わないように気をつけろ！ 誰かに会ったとき、あなたが人生と独立した生活のバランスを保つように努力しなさい。そうすればあなたの関係は、彼らが成長するのに必要な空間を与えるだろう。 もし、皆さんが過去のパートナーたちに対して悪く接していたとしたら、定義が逆転することは皆さんが行動による結果を経験しているかもしれないという前兆かもしれません。</p>";
  }
}
var Justice = {
  name: "Justice",
  index: 11,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://upload.wikimedia.org/wikipedia/en/e/e0/RWS_Tarot_11_Justice.jpg",
  rw_addendum:
    "Equity, rightness, probity, executive; triumph of the deserving side in law.\n\
    Reversed: Law in all its departments, legal complications, bigotry, bias, excessive severity.",
  rw_meaning: Justice()};

function HangedMan() {
  if (u == 0) {
    return "<p>このカードは現在あなたの関係がどのように進むかについて不満を示す可能性があると述べた。 これはまた、皆さんや皆さんのパートナーが皆さんの選択肢を評価するため、あるいは皆さんがその関係がどこに進んでいくことを望んでいるのかを評価するために関係から一歩退かなければならない必要性を感じているということを意味することもできます。 どんな決定も先延ばしにして考える時間を持ちなさいと言って皆さんは皆さんの関係がどうあるべきかに対する認識をもう一度考えてみて、関係でないことについて心配する代わりにその関係の肯定的な側面に焦点を合わせる必要があるでしょう。 その代わり、もしあなたが本当に幸せではないと感じたら一人でこの関係を維持していると言っています。 行きたければ去ってもいい、もしあなたが未婚なら、このカードはあなたを幸せにしない状況、アイデア、または人々から自分を解放する必要があるということを表すことができる。 これは、古い否定的な関係パターンを放出することを含むことができます。 もし、皆さんが元彼に対する感情をずっと持っていたとしたら、このカードは皆さんにその感情を打ち明ける時だと言います。 それはまた、皆さんが皆さんの周辺の選択肢に自身を開くために理想的なパートナーに対する厳格な先入観を解く必要があるということを意味することもできます。</p>";
  } else {
    return "<p>もしあなたが未婚であれば，このカードはあなたが間違いから学ばず，継続して同じ否定的な関係を繰り返してきたことを表すことができる. 皆さんは悪い関係から次の関係へと急いでいて、この様な関係を選択するにおいて皆さんの役割に対して決して責任を負わないこともあり得ます。 速度を落とし、なぜこの表現が続くのか、そしてそれを変えるために皆さんの中で解決しなければならないことを見てみましょう。 絞首刑はあなたとの関係がうまくいかないかもしれませんが、あなたやあなたのパートナーは一人になったり再出発するのを恐れてそれを掴んでいるかもしれません。 それはまた、関係を回復することができますが、あなたは現在直面している問題に直面する準備ができていないということを表すことができます。</p>";
  }
}
var HangedMan = {
  name: "The Hanged Man",
  index: 12,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://upload.wikimedia.org/wikipedia/en/2/2b/RWS_Tarot_12_Hanged_Man.jpg",
  rw_addendum:
    "Wisdom, circumspection, discernment, trials, sacrifice, intuition, divination, prophecy.\n\
    Reversed: Selfishness, the crowd, body politic.",
  rw_meaning:HangedMan()};

function Death() {
  if (u == 0) {
    return "<p>パートナーが効果のない関係を維持しているか、あなたの関係が進展することを防いでいる古いパターンに執着していることを意味する。 死はあなたが願おうが願おうが全てが変わるということだ。 変化に抵抗するか、受け入れることができます。 もし、皆さんの関係が上手く解決できなかったら、デスタロットカードは去るべき時ということを表すこともできるし、離婚を表すこともできるし、あるいは皆さんと皆さんのパートナーが大きな変化をしなければならない必要があるということを表すこともできるし、それを成し遂げるために古いパターンやイシューを捨てなければならないということを表すこともできます。 死のカードを変えようとする古い問題は深く根付いていて苦しむかもしれない。 そんなことなら恋愛相談を考慮してみたほうがいいと思う。 結果は，パートナーが本当に喜んで変化を受け入れ，それが生き残ることを望むかにかかっている. デスタロットカードが関係にもたらす変化も前向きであり、突然の婚約や妊娠といった予期せぬ変化を示すことができ、あなたは最初これらの変化を圧倒的に見つけることができる。 未婚の場合、死亡カードはこれ以上使い道のない古い信頼、問題または行動をすぐに捨てることを表します。 人生に新しい愛をもたらすこの変化を受け入れてください。</p>";
  } else {
    return "<p>このカードは強力な指標であなたが関係の変化に抵抗することができる. 読者の方はパートナーに頼られていると感じたり、孤独を怖がっているために昔からの関係を守っているかもしれません。 もしくは義務感でこれ以上愛していないパートナーと一緒にいるかもしれません。 また、ずいぶん前に終わったと思っていた関係が再び現れ、再び火が付く可能性があるということを表すことができます。 未婚の場合は，このカードは恋愛生活に肯定的なものをもたらすための否定的な行動を捨てる必要があるという明確な指標である. たとえば、プライドが低く、悪い相手を選ぶ傾向があるなら、自分を育て、自分を怠る行動を捨ててこそ、あなたを愛と尊重で接するパートナーを人生に引き込むことができる。</p>";
  }
}
var Death = {
  name: "Death",
  index: 13,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://upload.wikimedia.org/wikipedia/en/d/d7/RWS_Tarot_13_Death.jpg",
  rw_addendum:"",
  rw_meaning:Death()};

function Temperance() {
  if (u == 0) {
    return "<p>愛情運でこのカードは最も良いカードの中の一つです。 それはあなたとあなたのパートナーが愛と献身、そして尊敬の完璧なバランスを保つ調和のとれた関係を表しています。 それはまた、ソウルメイトの表れでもある。 もし読者の方が関係に問題があったなら、今週は読者の方が一緒に進むために読者の関係を遅延させていたどんな問題でも一緒に解決できるという指標です。 独身の場合は、節制は、愛するパートナーが生活に立ち入ることのできる空間を作るために、人生の他の領域のバランスの取り方を学ぶ指標である。 一旦これを終えたらあなたはあなたに合ったパートナーを引き込むでしょう。</p>";
  } else {
    return "<p>このカードは節制は関係の不均衡による葛藤と衝突を表すことができます。 皆さんの中の1人が他の1人よりも気にしているように感じたり、皆さんが見せてくれる愛と尊敬に報われていないと感じた結果かもしれません。 関係において、調和不足で、お互いに言い争い、お互いに言葉を聞こうとしないということに気付くかもしれません。 また、皆さんの問題を解決するため、一緒に働くよりは露骨に敵対的で点数をつけようと努力する皆さん自身を発見することもできます。 皆さんの直面している問題に対し、より上手に対処でき、解決策を見つけるのにより開放的になるよう、状況を落ち着かせて皆さん自身のバランスを保つために努力してください。 独身の場合、このカードは皆さんが関心のある人に早く出し過ぎているということを意味することができます。 これは単純に皆さんが頑張りすぎたり、頑張りすぎたりするように近づいてきたり、乱れたり、完全に切迫したものとなってきたりします！ 愛を探しているなら忍耐心を持ってください。 誰かをきちんと知る前に急いだり、無理に関係を持とうとしないでください。 リラックスして内面のバランスを取り戻し、新しいロマンスが自分だけのスピードで展開されるようにしなさい。</p>";
  }
}
var Temperance = {
  name: "Temperance",
  index: 14,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://upload.wikimedia.org/wikipedia/en/f/f8/RWS_Tarot_14_Temperance.jpg",
  rw_addendum:
    "Economy, moderation, frugality, management, accommodation.\n\
  Reversed: Things connected with churches, religions, sects, the priesthood, sometimes even the priest who will marry the Querent;\
  also disunion, unfortunate combinations, competing interests.",
  rw_meaning:Temperance()};

function Devil() {
  if (u == 0) {
    return "<p>あなたやあなたのパートナーがわなにかかったというシグナルかもしれません。 それは関係にとても没頭することで、もたらされた自由の喪失を表すことができます。 悪魔はこの程度の共同依存が健康に悪いことを示している. 読者の方と読者のパートナーは一歩譲り、関係の外でいくつかの関心事を再発見するよう努力する必要があります。 パートナーが精神的健康の問題にかかっているかもしれないこともそれは表せる. それでしたら，この時間に二人をサポートする専門のカウンセラーの助けを求めてください. デビルタロットカードは嫉妬、時期、だまし、支配、不正行為の兆候になり得るし、極度に否定的な脈絡で虐待、暴力または性的暴力の兆候になり得る。 これを確認するため、サポートカードを見てみてください。 自分が虐待のために人間関係に閉じ込められたと感じた場合には，この状況から抜け出すことができることを覚えておいてください. 悪魔を無力に感じさせないでください。 あなたが未婚なら悪魔は愛なしにセックスを表すことができます。 皆さんは達成感を与えられなかったり、危険な性的出会いを持ったかもしれないし、皆さんが切に愛されたりしているので皆さんを気にしない人たちに自分を利用できるよう許可しているかもしれません。 もしそうなら、あなたがプライドを築くまで恋愛をしなさい。 悪魔は、また皆さんに害を及ぼし得る潜在的な関係の指標になり得るのです。 この新しい恋愛への関心は，麻薬中毒や精神的健康問題の結果として，過剰な依存となり，欺瞞的または暴力的または虐待になる可能性があるのです. 最初は彼らが興味津々なように見えても、悪魔は危険を表すので、この人を皆さんの生活に入れることを避けなさい。</p>";
  } else {
    return "<p>デビルタロットカードが裏返されたのは、あなたとパートナーが型にはまった感じか、仲直りしたように感じたかもしれないが、あなたはこれと反対側に出始めたことを表すことができる。 それはまた、あなたの中の1人があなた方の関係を回復できないほど損傷しかねない何かをするところでしたが（例:不倫や不倫）、その代わりにあなた方の関係を尊重すると決定したかもしれません。 もし読者の方が虐待的な関係にあったなら、よりよい待遇を受ける資格があり、読者の方が権力を取り戻す資格があることに気付き始めるかもしれません。 読者の方が選択権があり、読者の方のための助けがあるということに気付き始め、読者の暴力的なパートナーが読者の方に与えた影響力は薄れてきます。 独身の場合、悪魔カードは否定的であったり、虐待的であったり危険な人の類型をストレートな意味で描写してギリギリの危機を表すことができるのです。 それはまた、あなたが独身であるべきだと感じたり、あなたを愛してくれる誰かを必死に探していたため、どんなものでも出す準備ができていたことを表すことができる。 しかし、あなたは自分自身のこと、そしてこれらの行動がどのようにしてあなたの愛を求めることを妨げてきたのかについて、より詳しく知るようになりました。 皆さんは、一人というものがもたらすものに対する答えだけができる自由を楽しむために、しばらくの間、恋愛から一歩退く必要があるかもしれません。 このような新しい態度が登場するのだから、まともなパートナーがそれほど後れないので安心して楽しんでください。</p>";
  }
}
var Devil = {
  name: "The Devil",
  index: 15,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://upload.wikimedia.org/wikipedia/en/5/55/RWS_Tarot_15_Devil.jpg",
  rw_addendum:
    "Ravage, violence, vehemence, extraordinary efforts, force, fatality; that which is predestined but is not for this reason evil.\n\
  Reversed: Evil fatality, weakness, pettiness, blindness.",
  rw_meaning: Devil()};

function Tower() {
  if (u == 0) {
    return "<p>このカードは別れ、別れ、離婚を表す悪い兆候になることがあります。 また、関係を絶対的な限界まで押し通すことが難しいか、衝撃的な事件を経験しながらあなたもパートナーも、その両方を表すことができる。 二人の関係が、このタワーイベントで生き残るためには、お互いのために努力し合い、開かれた正直なコミュニケーションを保たなければなりません。 もしあなたとの関係がこの激変で生き残るなら、タワーはあなたと関係が大きく変わるだろうと言う。 タワーは、誤った信仰の破壊を意味するため、関係が完全に変わったかもしれないが、もっと堅固で正直な土台を持ってくることができるため、これが必ずしも悪いことではないだろう。 ですが、その時点に到達するのはカップルにとって最も難しいことの一つになるでしょう。 もしあなたが未婚であれば，なぜあなたが未婚なのかについての不快な暴露にいきなり直面しなければならないことに気づくだろう. 自尊心や傲慢が健康な関係を築く妨害となるなら，混乱や破壊的な事件が自我を破壊することを示しているかもしれない. これは楽しい経験ではありませんが、これはあなたに謙遜を教え、将来幸せで健康な関係を築く可能性を高めてくれるでしょう。  ロンドン塔はまた、暴力や暴行を示すことができます。 ですから、それはそこに出て新しい人たちに会う時あなたの身に注意を払うようにという警告になるかもしれません。 あまり気をつけずに様子をうかがい、適切な安全措置を取ってください。</p>";
  } else {
    return "<p>このカードは二人の関係が終わったことを知っていながら、その関係がもたらす苦痛を恐れて実際に終えることを避けているということになります。 皆さんは事実を直視し、皆さんが壊れたものを掴んでいる限り、皆さんがより良いものへと進むことを防いでいるということを理解する必要があります。 もし、最近あなたの関係が違うが完全なタワーイベントを通じて行われたなら、このカードはあなたに「関係を以前に戻そうとしないように」ということだ。 あなたの関係は完全に変わったし戻ることはできません。 あなたはこの新しい関係をあなたが望むものか決める必要があります。 もし読者の方が未婚であれば、このカードは読者の方が危険であったり、虐待をしたり、暴力的である可能性のある誰かと悲惨な関係を避けたということを表すことができます。 それはまた、皆さんが外傷性又は苦しい別れを扱うことを延ばしていたり、完全に避けているということを表すことができます。 皆さんが経験したことを直視するよりこのアプローチの方がもっと簡単だと思うかもしれませんが、それは実際皆さんが恋愛生活をすることを止めるようにしています。  何で逃げても立ち止まって向き合い、そこで何を学ぶことができるのかを学び、その下に線を引いて過去に残しておきましょう。 トラックの荷物を引っ張るときは前に進みにくいので、処理しておいてください。</p>";
  }
}
var Tower = {
  name: "The Tower",
  index: 16,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg",
  rw_meaning: "",
  rw_addendum:
    "Misery, distress, indigence, adversity, calamity, disgrace, deception, ruin. It is a card in particular of unforeseen catastrophe.\n\
  Reversed: According to one account, the same in a lesser degree; also, oppression, imprisonment, tyranny.",
  rw_meaning:Tower()};

function Star() {
  if (u == 0) {
    return "<p>もしあなたが未婚なら、このカードはあなたが過去の関係で持っていた荷物を下ろす準備ができているという印だ。 これからの恋愛は肯定的で人々に会うのに良い時間です。 それはまた、皆さんの人生に戻ってくるために、皆さんの過去から誰かを意味することができます。 もしあなたが恋愛中なら、星はあなたの関係がもっと深いところに発展するというシグナルです。 以前に関係に問題があったなら、ヒーリングに心を開けばこのような問題が治癒し、明るい未来を持つことができるとザ·スターは言う。</p>";
  } else {
    return "<p>逆になった星カードは、関係に対する信頼を失ったり、関係の肯定的な側面に焦点を合わせていることを表しています。 読者の関係は、ある程度火種を失っているかもしれませんし、読者の方とパートナーがある程度断絶していると感じるかもしれません。 「このカードは、これらの問題は直せるが、前に進みたいのなら、古い傷を癒し、関係の否定的な気運をきれいに洗い流す準備ができていなければならない」と話す。 もしあなたが未婚の場合、このカードは宇宙の計画に対する寂しさと信念が欠けていることを表しています。 皆さんは、皆さんに合う人に絶対に会えないように感じるかもしれません。 あなたは愛に対して冷笑的になっていると感じるかもしれない. 前に進むためには恐れを取り払い、これまで保っていた否定的な気運を捨てなければならない。 愛はあなたが最も期待していない時に現われるだろう。</p>";
  }
}
var Star = {
  name: "Star",
  index: 17,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_17_Star.jpg",
  rw_addendum:
    "Loss, theft, privation, abandnment; another reading says- hope and bright prospects.\n\
  Reversed: Arrogance, haughtiness, impotence.",
  rw_meaning:Star()};

function Moon() {
  if (u == 0) {
    return "<p>このカードはあなたに大きな喜びと幸せを表します。 それは皆さんの関係で楽しさ、情熱、そして肯定の期間の徴候となるでしょう。 同時に、太陽は直立姿勢でそれの経路にあるすべてのものに光を当て、これは関係を含むので、それはまた皆さんの関係に隠された問題が強調されることを表すことができるでしょう。 「このカードで強調するすべての問題は、皆様の利益のために解決されます」 これは関係がより開放的で正直になる形をとったり、ある場合にはより良い関係を皆さんに知ってもらうために終わることができます。 検証のため、支援カードをご覧ください。 結果がどうであれ、このカードは恋愛生活にプラスの良いものをもたらしてくれる。 このカードは婚約や結婚のような祝賀を表わすこともできる。 もし、皆さんが未婚であれば、このカードは皆さんの道に素敵な関係を築くことができるということを表します。</p>";
  } else {
    return "<p>「恋愛中なら、逆の月」カードは欺瞞や嘘がばれることもある。 不倫が暴露される可能性もあります。 それはまた、単純に二人の関係が明らかになることに対する真実の表れかもしれません。 おそらくあなたは現在の関係について自分をだますことやパートナーについての特定のことをだましてきたのだろう. もしそうだとしたら、このカードではあなたのパートナーの本当の性格や関係についての真実が分かるようになることを示している。 独身の場合、月が逆転するのは不確実性の時期を経て、平常心と自信を取り戻し始めた指標になる。 潜在的なパートナーがあなたに向いていない兆候やあなたの本能を無視しているかもしれない指標になりうる. たとえば、読者の方が付き合っている人が結婚した、またはかかわっているという警告信号に気付きますが、それを信じたくないので無視しているのです。</p>";
  }
}
var Moon = {
  name: "The Moon",
  index: 18,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://upload.wikimedia.org/wikipedia/en/7/7f/RWS_Tarot_18_Moon.jpg",
  rw_addendum:
    "Hidden enemies, danger, calumny, darkness, terror, deception, occult forces, error.\n\
  Reversed: Instability, inconstancy, silence, lesser degrees of deception and error.",
  rw_meaning:Moon()};

function Sun() {
  if (u == 0) {
    return "<p>愛情運において太陽カードは大きな喜びと幸せを表します。 それは皆さんの関係で楽しさ、情熱、そして肯定の期間の徴候となるでしょう。 同時に、太陽は直立姿勢でそれの経路にあるすべてのものに光を当て、これは関係を含むので、それはまた皆さんの関係に隠された問題が強調されることを表すことができるでしょう。 「このカードで強調するすべての問題は、皆様の利益のために解決されます」 これは関係がより開放的で正直になる形をとったり、ある場合にはより良い関係を皆さんに知ってもらうために終わることができます。 検証のため、支援カードをご覧ください。 太陽カードは結果がどうであれ，恋愛生活に好ましいものをもたらしてくれる. 太陽は婚約や結婚などのお祝いを表現することもできる. もし、皆さんが未婚であれば、このカードは皆さんの道に素敵な関係を築くことができるということを表します。</p>";
  } else {
    return "<p>裏返った太陽カードは、あなたがあなたのパートナーから疎外感を感じているということを表しています。 ある花火や情熱はその関係から消えたかもしれません。 それは婚約破棄や取り消しになった結婚式を表すことができます。 それは，あなたとパートナーになるために進むべき道を見つけるのに苦労していることを示しているかもしれない. それは嫉妬し合って点を取ろうとしていることを意味するかもしれない. ポジティブなことに集中し、楽しい時間を一緒に過ごそうと努力して、そもそもなぜ一緒にしたのかを思い出してください。 もしあなたが未婚なら、逆になった太陽は、あなたが自己中心的になりすぎて潜在的なパートナーを先延ばしにしているという指標になり得る。 潜在的なパートナーに深い印象を与えるために努力することは、皆さんが継続して自慢していることを発見することができるため、実際反対の効果をもたらすことがあります。</p>";
  }
}
var Sun = {
  name: "The Sun",
  index: 19,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://upload.wikimedia.org/wikipedia/en/1/17/RWS_Tarot_19_Sun.jpg",
  rw_addendum:
    "Material happiness, fortunate marriage, contentment.\n\
  Reversed: The same in a lesser sense.",
  rw_meaning:Sun()};

function Judgment() {
  if (u == 0) {
    return "<p>愛情運で、このカードはあなたやあなたのパートナーがお互いを悲観的に見ていることを表すことができます。 論争をしている間にお互いに非難や非難を浴びせることを警戒し、反応を起こそうとすると、皆さんは意図したよりも多くの関係を害することがあります。 代わりに、非難の矛先を向けようとせずに、座ってあなたがどのように感じるのかを話そうと努力してください。 関係が進展することを望むなら、過去の過ちは許さなければなりません。 単純で開放的、正直なコミュニケーションで落ち込んだ関係に新たな活力を吹き込むことができます。 また他人があなたとあなたの恋人の悪口を言っている可能性が多分にあります。 こんな時に君ができる最善のことはそれを克服することです。 そのような仕事は、他人の問題であって、あなたの問題ではありません。 またはこのカードはあなたが愛する人と海または海によって離れているということを意味することができ、それはあなたとあなたのパートナーがしばらくの間他の国に住んだり、長距離関係を結ぶことができるということを表すことができる。 あなたが未婚の場合の判断は，潜在的なパートナーを性急に判断するな，というものだ. 彼らがあなたに正しいかどうかを決定する前に、彼らについて理解する機会を自分に与えてください。</p>";
  } else {
    return "<p>このカードは心配事から関係についての決定を回避しているということを表すことができます。 この決定が前に進む関係のことであれ終わりであれ、それは下さなければならない決定なのです。 判断が覆されると、悪意のあるゴシップや虚偽の告発を示すことができるので、あなたがパートナーについて不快な噂を聞いた場合は、急いで判断する前に事実を知るべきだ。 このタロット占いは過去から学べずに発生した問題を表すこともできる。 恐らくあなたとパートナーは大変な時期を経験していて、あなたは今もっと仲良くならなければならないと感じるが、そうではない。 過去の問題から学べることは何でもあるか，関係に当てはまる知識は何か自問しなさい. もしあなたが未婚の人なら、判断が覆されたことは、恥ずかしさや恥ずかしさがあなたが興味のある人に近付かないことを表すことを表すことができる。 恐れのために躊躇ってはいけません！ それがあなたの思い通りになろうとなかろうと、少なくともあなたは努力してきたことに気付くだろうし、「もし？」と永遠に悩む必要はないでしょう。</p>";
  }
}
var Judgment = {
  name: "Judgment",
  index: 20,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img:
    "https://upload.wikimedia.org/wikipedia/en/d/dd/RWS_Tarot_20_Judgement.jpg",
  rw_addendum:
    "Change of position, renewal, outcome. Another account specifies total loss through lawsuit.\n\
  Reversed: Weakness, pusillanimity, simplicity; also deliberation, decision, sentence.",
  rw_meaning:Judgment()};

function World() {
  if (u == 0) {
    return "<p>このカードは目標に到達することを意味する. それは結婚したり、子供を持つか、もしくは皆さんの関係で非常に幸せで、安全で、愛らしく献身的な位置にいるということかもしれません。 あなたとあなたのパートナーに開かれているすべての世界があります。 この時間を楽しんでください。 あなたは、今まであなたの関係を維持するために努力しなければなりませんでした。 未婚の場合にはこのカードは開いている選択肢がたくさんあることを意味する. それは皆さんが世界で自分の位置とともに平和に過ごす段階に到達するために個人的な挑戦を克服するために一生懸命努力したことを暗示する。 これは、ロマンティックに、あなたにとって良いことだけを意味します、まるで惹かれるように。 皆さんが自分自身に安らかである時、幸せでこの人生が皆さんに提供する可能性に開かれている時、皆さんの人生に驚くべき誰かを引き込むでしょう。 旅行中に新しい人に出会えるかもしれないし，職業の一部で旅行をする人に出会えるという前兆にもなるかもしれない. 人気があり、需要があることも示しています。</p>";
  } else {
    return "<p>このカードで、あなたはあなたとの関係が停滞していることを表すことができます。 あなたとパートナーが仕事を無駄にしたかもしれないし、関係を正常軌道に乗せるためにはもっと多くの努力を傾けなければならないかもしれません。 しかし、真摯な努力を傾けてきたけれど、関係が改善しないようなら、あなたはこれがあなたにふさわしい関係であるかを考える必要があるでしょう。 「シングルなら恋愛生活が水の泡になったと感じるかもしれませんが、これまでまともな人に会うために十分な努力をしたのか自問してみる必要があります。 魅力的な姫はただあなたのドアを叩いてあなたの足を撫で下ろすことはないでしょう。 外に出て人々に会ってください。 自分を外に追い出すことを恐れないでください。 世の中があべこべになったということは、あなたが前触れもなく終わった関係から抜け出すために努力していることを示しているかもしれません。 おそらく、以前のパートナーが前触れなく突然関係を絶ったか、あなたが関係の終わりを受け入れるために必要な時間を与えなかったでしょう。 あなたが仕上げる機会がなかったので、これは非常に扱いにくいかもしれません。 彼らが戻ってくるのを待って人生を送らないでください。 あなたは前のパートナーから決して自分が起こっていないかもしれないので、あなたは何が起こったかに対して平穏を保つ別の方法を見つけることに集中しなければなりません。</p>";
  }
}
var World = {
  name: "The World",
  index: 21,
  type: "Major Arcana",
  suit: "NA",
  element: "NA",
  zodiac_sign: "NA",
  direction: upright_or_reversed(),
  img: "https://upload.wikimedia.org/wikipedia/en/f/ff/RWS_Tarot_21_World.jpg",
  rw_addendum:
    "Assured success, recompense, voyage, route, emigration, flight, change of place.\n\
  Reversed: Inertia, fixity, stagnation, permanence.",
  rw_meaning:World()};

/*======================================DECK======================================*/

//creates array with all card objects
var tarotDeck = [
  Fool,
  Magician,
  HighPriestess,
  Empress,
  Emperor,
  Hierophant,
  Lovers,
  Chariot,
  Strength,
  Hermit,
  WheelFortune,
  Justice,
  HangedMan,
  Death,
  Temperance,
  Devil,
  Tower,
  Star,
  Moon,
  Sun,
  Judgment,
  World
];

/*=========================BASIC CARD DRAWING FUNCTIONS===========================*/

//function that draws a specific card from the deck, by index
function draw_indexed_card(index) {
  var rightCard = tarotDeck[index];
  return rightCard;
}

//function to pick random int out of 78
function pick_card_index() {
  return getRndInteger(0, 21);
}

function draw_random_card() {
  index = pick_card_index();
  rightCard = tarotDeck[index];
  console.log("You drew ...", rightCard["name"]);
  console.log("The position of this card is ...", rightCard["direction"]);
  return rightCard;
}

var show_indexed_card = function (index) {
  //identifies correct card from deck!
  var rightCard = tarotDeck[index];
  //generic display message
  // document.getElementById("results").innerHTML +="The card drawn is...<br> <br> <div class='placard-container'><div class='card-container'>";
  //testing reverse or upright
  if (rightCard["direction"] == "reversed") {
    document.getElementById("results").innerHTML +=
      "<img src= '" +
      rightCard["img"] +
      "' class='reversed'>";
  } else {
    document.getElementById("results").innerHTML +=
      "<img src= '" + rightCard["img"] + "' class='card-img'><br>";
  }
  //display card name
  // document.getElementById("results").innerHTML +=
  //   "</div>" + rightCard["name"] + ", " + rightCard["direction"];
  document.getElementById("results").innerHTML +=
    "</div>" +
    "<p>&#x1F31E; &#x1F311; &#x1F312; &#x1F313; &#x1F314; &#x1F315; &#x1F316; &#x1F317; &#x1F318; &#x1F31E;</p>";
  return rightCard;
};

var show_indexed_card_no_reverse = function (i) {
  //like show_indexed_card(), but without reversed parameter
  var rightCard = tarotDeck[i];
  document.getElementById("results").innerHTML +=
    "<h3 id='show-card-num-" + rightCard["index"] + "'>" + rightCard["index"] + ". " + rightCard["name"] +
    "</h3><img src= '" +
    rightCard["img"] +
    "' width=220 height=auto><br><div class='explanation'>" + rightCard["rw_meaning"] +
    "</div><p>&#x1F31E; &#x1F311; &#x1F312; &#x1F313; &#x1F314; &#x1F315; &#x1F316; &#x1F317; &#x1F318; &#x1F31E;</p>";
  return rightCard;
};

//function which shows all cards in Tarot deck!
var show_all_cards = function () {
  var i = 0;
  for (i = 0; i < 22; i++) {
    show_indexed_card_no_reverse(i);
  }
  window.scrollTo(0, document.getElementById("show-card-num-0").y);
  console.log(document.getElementById("show-card-num-0").y);
  console.log(document.getElementById("show-card-num-0"));
  return;
};

/*==========================CELTIC CROSS CARD DRAWING FUNCTIONS=======================*/
var draw_celtic_indices = function () {
  var indices = [];
  var result;
  while (indices.length < 10) {
    result = pick_card_index();
    if (indices.indexOf(result) == -1) {
      indices.push(result);
    }
  }
  return indices;
};

var draw_celtic_picture = function (array) {
  var i = 0;
  for (i = 0; i < 10; i++) {
    console.log("inside draw celtic picture loop");
    show_indexed_card(array[i]["img"]);
  }
};

var set_celtic_identifier = function (card_obj, i) {
  //sets celtic array: 1) takes a card object with a number assigned
  //then assigns a string name (celtic identifier) to that object
  console.log("inside set_celtic_identifier");
  switch (i) {
    case 1:
      card_obj["identifier"] = "プレゼント";
      break;
    case 2:
      card_obj["identifier"] = "障碍";
      break;
    case 3:
      card_obj["identifier"] = "過去";
      break;
    case 4:
      card_obj["identifier"] = "未来";
      break;
    case 5:
      card_obj["identifier"] = "私が思う未来"; //질문자가 생각하는 미래
      break;
    case 6:
      card_obj["identifier"] = "貴方の心"; //내면적상황
      break;
    case 7:
      card_obj["identifier"] = "アドバイス";
      break;
    case 8:
      card_obj["identifier"] = "影響";
      break;
    case 9:
      card_obj["identifier"] = "希望";
      break;
    case 10:
      card_obj["identifier"] = "結果";
      break;
  }
  return card_obj;
};

var is_reversed = function (direction) {
  if (direction == "reversed") {
    return true;
  }
};

var erase_display = function () {
  document.getElementById("results").innerHTML = "";
  var i = 0;
  for (i = 0; i < 10; i++) {
    var j = i + 1;
    document.getElementById("celtic-num-" + j).innerHTML = "";
  }
};

var draw_celtic_cross = function () {
  
  erase_display();
  
  console.log("inside draw_celtic_cross fct");
  //select randomized celtic indices
  var indices = draw_celtic_indices();
  console.log(indices);
  var i = 0;
  var j;
  var card;
  var celtic_result = [];
  //for each of the indices in the celtic index...
  for (i = 0; i < indices.length; i++) {
    j = i + 1;
    card = draw_indexed_card(indices[i]); //select the card associated with the index
    card["number"] = j; //assign cards to celtic indices array (celtic_result)
    set_celtic_identifier(card, card["number"]); //set a string associated with the number of celtic result
    console.log("card is ...", card);
    console.log("card['img'] is ...", card["img"]);
    document.getElementById("results").innerHTML +=
      "<div class='placard-container' id='celtic-exp-" +
      j +
      "'><div class='placard-container-item''celtic-identifier-name'>" +
      card["identifier"].toUpperCase() +
      "</div><div class='placard-container-item card-container'>" +
      "<div class='card-image-container'><img width=120px height=200px class='card-image card-container-item' src= '" +
      card["img"] +
      "' id='card-img-num-" +
      j +
      "'><p class='card-container-item' 'card-name'>" +
      card["name"] +
      ", " +
      card["direction"] +
      "</div><div class='placard-container-item card-explanation'>" +
      card["rw_meaning"] +
      "</div></div></div>";
    if (is_reversed(card["direction"])) {
      const card_image_ = document.getElementById("card-img-num-" + j);
      card_image_.classList.add("reversed");
    }
    celtic_result.push(card);
  }
  console.log("celtic result is ...", celtic_result);
  draw_cross_graphic(celtic_result);
  return celtic_result;
};

var draw_cross_graphic = function (array) {
  console.log("inside draw_cross_graphic");
  var i = 0;
  for (i = 0; i < array.length; i++) {
    var j = i + 1;
    document.getElementById("celtic-num-" + j).innerHTML +=
      "<img src= '" +
      array[i]["img"] +
      "' width=55 height=auto id='cc-img-num-" +
      j +
      "'>";
    if (is_reversed(array[i]["direction"])) {
      console.log("inside reversed,draw cross graphic");
      const cc_image_ = document.getElementById("cc-img-num-" + j);
      cc_image_.classList.add("reversed");
    }
  }
  return;
};

