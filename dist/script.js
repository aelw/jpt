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
    return "<p>The first card of the Major Arcana, The Fool is generally a positive card indicating new beginnings. If it appears in your readings it could mean that you are on the verge of an exciting, unexpected new adventure. Your new adventure will bring you along a path which may require you to make a leap of faith but you will grow as a result of this new experience. This new adventure could be a literal new adventure, like travelling to a place you’ve never been before. The change this card can bring will usually be a welcome one. While the Fool is generally a positive card, its appearance in a reading can also indicate that you need to take the time to look before you leap.</p>";
  } else {
    return "<p>The Fool reversed signifies a new beginning. However, when reversed this Major Arcana trump card indicates that the beginning is something you may be reluctant to jump into. This new beginning is still coming either way! The Fool reversed can be an indication of living in the moment but also can be a sign that in your excitement you are behaving somewhat recklessly towards others. It can signify being irrational, lack of fun and lack of faith or hope.</p>";
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
    return "<p>When The Magician appears in a reading it is a sign that you have all the skills and abilities you need to be successful. The universe is aligning to bring positive changes your way. This Major Arcana trump card shows you that you must use your intellect, concentration and willpower to make things happen.  The Magician usually signifies a time in your life when you have the power to manifest the outcome you want. If it is referring to other people in your life it usually refers to someone you can learn from whose ability and wisdom will impress you.</p>";
  } else {
    return "<p>When The Magician reversed appears in a Tarot reading it is a sign that you will need to be careful not to miss the opportunities coming your way. Don’t allow self-doubt to stop you from seizing the moment. If it refers to a person, The Magician reversed can mean that a person in your life who presents themselves as knowledgeable and trustworthy may actually be trying to use you or manipulate you. Watch out for deceitful and greedy people and be careful who you trust with this Major Arcana card in reverse!</p>";
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
    return "<p>The High Priestess possesses intuition, mystery and sensuality combined with common sense. When the High Priestess appears in a tarot reading she indicates that now is the time to trust your instincts and go with your gut feeling. Pay attention to your dreams and the signs and symbols the universe is sending you when this Major Arcana trump card appears in your tarot reading.</p>";
  } else {
    return "<p>The High Priestess reversed in a tarot reading indicates your intuition is trying to guide you and your instincts are correct. However, in the reversed position this Major Arcana card shows that you are not hearing it. You may be more focused on the opinions of others or winning other people’s approval than your own inner wisdom. It can also indicate that you are neglecting your own needs to take care of others. You need to take the time to connect with yourself and listen to your inner voice. Trust yourself. You have all the wisdom and knowledge you need.</p>";
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
    return "<p>The Empress Tarot is the Major Arcana card of femininity and motherhood. It is also one of the strongest pregnancy cards in the Tarot deck. If you are a mother, you will really come into your own and find fulfilment. If you are a father, The Empress encourages you to build on your communication with your children and show them your nurturing side. Even if you are not a parent, when The Empress appears the message is the same, you should embrace your softer side, allow yourself to explore the emotions you are feeling and listen to your intuition. People will be drawn to you, especially those in need of the empathy, compassion and nurturing you are able to provide.</p>";
  } else {
    return "<p>When The Empress reversed appears in a Tarot reading, it again tells you to embrace your feminine qualities. This applies to men too. We are all a mixture of masculine and feminine qualities. The Empress reversed indicates that you have been suppressing or neglecting your feminine side and need to embrace it in order to bring your masculine and feminine energies into balance. You may be focusing too much on the material and mental aspects of life, rather than the emotional and spiritual when this Major Arcana card appears. The disharmony indicated by The Empress reversed can take many forms. You may be putting others needs before your own to your detriment. Or you may feel so emotionally overwhelmed that you are neglecting those that are important to you. You may also feel unattractive and undesirable and your confidence has taken a knock. You will need to shift the focus and ground yourself to correct this imbalance. It can be a signifier of empty-nest syndrome for the parents of grown up children. It can also be an indicator of mother issues affecting you depending on its placement in a Tarot spread.</p>";
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
    return "<p>As a person, The Emperor represents an older man who is good in business and usually wealthy. The Emperor is a solid, stable man. He is a powerful, grounded protector but he also can be rigid and stubborn. This can be a father or father-figure type or an older man you are romantically involved with. The Emperor is a hard task master and has little time for fun and frivolity. Children of The Emperor can struggle with father issues as falling short of his high expectations can affect their self-esteem. If The Emperor appears in a past position, this Major Arcana card can indicate that the father figure in your life was authoritarian and that, while he had your best interests at heart, he may have struggled to show affection. If it appears in the present or future it’s a much better omen as it indicates a wise older man who will give you solid advice which, if you follow it, will lead you in the right direction. Generally, if not representing a person in your life, The Emperor signifies the dominance of logic over emotion and of the mind over the heart. It signifies that concentration, structure, stability and focus is required if you want to make your ideas and dreams a reality. The Emperor upright can represent fatherhood.</p>";
  } else {
    return "<p>The Emperor in reverse as a person signifies an older man or person in authority in your life who may be abusing his power or being too authoritarian leaving you feeling powerless or rebellious. This person may actually be trying to give you solid guidance but the message is lost due to their domineering behaviour. The best way to handle this person is to remain calm and logical. Take the advice that works for you and throw the rest away. Don’t be afraid to stand up to authority but do so in a practical and logical manner which will get you the results you want. The Emperor reversed can also indicate a father figure who let you down or abandoned you. If not representing a person in your life, The Emperor Tarot reversed can indicate that you are letting your heart overrule your head too much and need to balance your mind with your emotions. This Major Arcana card shows that you may be lacking self-control and need to get more structure in your life. The Emperor reversed can represent paternity issues or questions over paternity.</p>";
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
    return "<p>The Hierophant is the card of traditional values and institutions. The Hierophant can represent a counsellor or mentor who will provide you with wisdom and guidance or a spiritual or religious advisor such as a priest, vicar, preacher, imam, rabbi or a monk. Alternatively, you may be dealing with someone who is very set in their ways. The institutions The Hierophant can represent include economic, religious, political, social, family, educational, social welfare and medical. Its appearance can signify that now is a time to conform to convention or tradition. It’s not a time to rock the boat. It can also be an indicator that you will take part in some sort of traditional ceremony or that you may start creating some new traditions or rituals of your own.</p>";
  } else {
    return "<p>When The Hierophant Tarot appears reversed it is time to break with convention. You will want to change traditional structure, social norms and rigid rules. Those close to you may not understand this need to challenge the established way of doing things and may be completely against it but with this Major Arcana card appearing in your Tarot reading you will feel compelled to think for yourself and throw away the rule book. The Hierophant reversed can signify an unconventional way of living or an alternative lifestyle. Alternatively, it may indicate that you are clinging desperately to old ways to your detriment or it may indicate that you have feelings of guilt and shame associated with behaving in a way that goes against the values you were raised with. Learning to live by your own rules, while still listening to your own conscience, will bring you freedom from oppression. It will open your mind and expand your horizons in a positive way.  The Hierophant reversed can also be an indicator of conflict with a person in a position of authority.</p>";
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
    return "<p>The Lovers signifies perfect union, harmony, love and attraction. The Lovers can represent finding the balance within oneself. You are learning to understand yourself, your own personal moral code and what you value in life. This will bring harmony and balance to your life.  In general when The Lovers appears it is an indication that you have major choices to make or are faced with a dilemma. You may be feeling uncertain about situations, people in your life or what direction you should take. These are important decisions you are faced with. Don’t automatically go for the easy road, make sure you have all the information and make the right decision. Even if it seems like a difficult path, it will lead you on to greater things.</p>";
  } else {
    return "<p>The Lovers Tarot reversed indicates that you may be struggling to take ownership of the decisions you’ve made. This is causing conflict within you. You may be feeling uncertain of the direction your life is going in. You need to remember that you are the master of your own destiny. Don’t try to blame the universe if your situation is a result of choices that you’ve made. Instead be accountable, learn from past mistakes and let them go. If you do that you will be able to move forward in a position direction. You will develop a deeper understanding of your true self, your values and your beliefs and avoid repeating the same mistakes in the future.</p>";
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
    return "<p>The Chariot Tarot represents overcoming obstacles through determination, focus and willpower. With this Major Arcana trump card in your tarot spread you will be feeling motivated, ambitious and in control. Now is a time to go for what you really want. The Chariot is not without its challenges, there may be many obstacles in your path but if you stay focused, keep your composure and are confident in your abilities, you will be successful! It can also represent travel (usually involving driving) as The Chariot is after all a mode of transport.  The Chariot can also indicate that you may be acting defensively or aggressively to hide that you are feeling emotionally vulnerable. You may feel like you are in a battle at the moment. Don’t worry, if you maintain your focus, you will be successful! The Chariot is also an indicator of success in sports or competitions. The Chariot represents finding the balance between the heart and mind. Put any worries aside and maintain your focus.</p>";
  } else {
    return "<p>The Chariot reversed can indicate that you feel powerless and are lacking direction. You need to take control of your own destiny and not let outside forces determine your path. When The Chariot reversed you are still moving but you have let go of the reins. You need to regain your drive and determination. Don’t be a passenger in your own life, focus and take your control back! Consider what aspects of your current situation are within your control and take proactive steps to change your fate. You may be powerless, lacking in confidence and put upon by others or by the circumstances of your life. This may be leading to anger, frustration and uncontrolled aggression. If the people in your life are being too needy and demanding you need to take back you power in a productive way. Be clear about what time or resources you are prepared to dedicate to others. Set your boundaries and stick to them.</p>";
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
    return "<p>The Strength is the Major Arcana card of inner strength. It represents mastering raw emotions in order to bring calm to yourself or a situation. It is similar to the Chariot in that it represents overcoming challenges. However, the Strength card usually refers to inner challenges. Overcoming the obstacles we face in relation to our own doubts, fears and anxieties. In a general context this card indicates that you are learning to master your fears and anxieties, to be courageous and daring. You have all the skills you need to be successful, the focus now is to conquer your inner worries and believe in yourself. Take the time you need to master your emotions, be patient and compassionate with yourself and you will find a new confidence in yourself and your abilities. Strength, as well as being representative of taming your emotions, can also represent taming someone else’s wild ways. This is not done by trying to dominate the other person but by gentle coaxing, positive reinforcement, encouragement and compassion. </p>";
  } else {
    return "<p>When the Strength appears reversed in your Tarot reading, it indicates that you are not tapping into the inner strength you have. It is does not indicate a lack of strength so much as it indicates that you are letting fear, anxiety or low self-esteem paralyse you. Now more than ever you need to summon your inner resolve and self-belief to pull you out of your current situation. You have the strength you need to get over your obstacles. You have simply lost touch with it and that disconnection is leaving you feeling weak, vulnerable and lacking confidence. Focus on the positive, stay away from people who make you feel inadequate and spend time with people who build you up. </p>";
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
    return "<p>The Hermit in an upright position generally indicates that you are entering a period of soul searching, self-reflection and spiritual enlightenment. You may find that you need time alone to gain a deeper understanding of yourself, to remove yourself from the daily grind in order to discover your true spiritual self, contemplate your existence, your direction in life or your values. The Hermit can also indicate isolating yourself or withdrawing into oneself in order to recover from a difficult situation. This Major Arcana trump card can suggest that you may be going through an anti-social phase where you just don’t want to interact with people as much as you normally would. The Hermit is wise, mature and knowledgeable and may be an indication of someone seeking the services of a counsellor or psychiatrist. This is a time to focus on yourself and meeting your own needs.</p>";
  } else {
    return "<p>The Hermit reversed suggests that you have withdrawn too much from the world or are becoming too reclusive. Solitude might have been necessary or good for you at one point but The Hermit reversed is telling you that it is time to come back to the world and the people around you. Taking time for soul-searching and self-reflection can be a great thing in moderation but too much can be damaging. At some point, you do need to draw a line under things and move forward, this Major Arcana card in reversed position indicates that now is that time. It can also indicate that you may be feeling shy or apprehensive about being in social situations. Don’t be afraid to get back out there. Alternatively, The Hermit in reversed can indicate that you are avoiding self-reflection completely as you are afraid of what you’ll discover if you look inside yourself. It can be an indicator of becoming too fixated with someone or something or too rigid and restricted in your views.</p>";
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
    return "<p>The Wheel of Fortune is generally an indicator of luck or destiny and it is a Major Arcana signifier of change. When the Wheel of Fortune appears upright in your Tarot reading big changes are coming. These changes should be for your greater good, but remember not all change is easy even if it’s leading you to your destiny! The upright Wheel of Fortune signals that the universe is working in your favour to help you reach your goals. Make sure you make the most of this time by focusing your intention on what you truly want! Know that the universe has a plan for you even if that plan is not clear to you at this point. The Wheel of Fortune also represents the ever-changing cycles we go through in life. We must learn to accept this process as part of living, even if it’s uncomfortable at times. This trump card is also a karma card so remember to be nice to people on your way up, you may be meeting them again on your way back down!</p>";
  } else {
    return "<p>the Wheel of Fortune reversed still indicates change but this change is likely to be negative and unwelcome. The reversed Wheel of Fortune is a strong indicator that there is a challenging time ahead and that the change coming may be difficult to adjust to. It can represent that things had been going well and have suddenly and quite unexpectedly fallen apart. This sudden deterioration can leave you feeling powerless, out of control and as if external forces are working against you. However, that is not the case. While there may be some outside factors, the current situation is most likely a result of decisions you made. You will need to take control of your situation and ownership of your choices in order to learn from this situation. Although things may be tough with the Wheel of Fortune in reverse, there is a big opportunity for you to learn karmic lessons here that will help you move on to a brighter and better future, seize the opportunity and don’t resist change. These ups and downs are part of life and often we learn more from hardship than we do from good fortune.</p>";
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
    return "<p>The Justice relates to karmic justice, legal matters and cause and effect. In a general context Justice is showing you that all actions have consequences. So look at your present circumstances in that context, how have your own actions contributed to where you find yourself today? Are there any karmic lessons that you should be learning from your current situation? This Major Arcana card is also a signifier of legal matters being resolved in a fair and balanced matter. This is usually a favourable omen if you are involved in a legal dispute. Justice is concerned with truth and integrity, so you may find yourself compelled to speak the truth and that you more than ever value honesty and integrity in others. Justice also relates to balance. It may signify that circumstances may arise that could throw you off balance. These circumstances may or may not be beyond your control or of your own making. Either way, you must try to keep yourself on an even-keel as events unfold. The Justice card can also indicate that you have a choice to make when it appears in your Tarot readings as you will be weighing up all your options and balancing the scales.</p>";
  } else {
    return "<p>Justice reversed can indicate injustice or avoidance of karmic justice. This may take the form of being treated unjustly in your life or situation where you are being unfairly affected by the choices or actions of others. You may feel you are being victimised or blamed for something that is not your fault. Whatever the situation, you must try to maintain your balance. Even if you didn’t create the situation, you can choose how you react to it and that can be a lesson in itself. Justice in a reversed position can also be an indicator of someone trying to avoid their karma. If you have played a part in creating your current situation by bad choices or actions, you must be accountable. Don’t try to blame others or avoid the consequences, just learn from it and move forward a little wiser and more self-aware. The Justice reversed can also indicate dishonesty. If you have been caught out in a lie, don’t try to justify it or lie your way out of it. Just confess, accept the consequences and try to draw a line under it. Justice reversed can indicate someone with very hard-line or uncompromising views. Examine if you or those around you may have become prejudiced. Examine this and determine is this how you want to be or what you want in your life? If you are involved in a legal dispute, it is not a favourable card to get and indicates that there will be some form of injustice in the outcome or the outcome will not be what you had hoped for.</p>";
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
    return "<p>The Hanged Man indicates that you are in a situation that you are not happy with. You may be feeling like you are stuck in a rut or trapped in a situation or frame of mind that is not making you happy but you have the power to release yourself. This may involve walking away from the situation or simply changing your perspective on it. The Hanged Man may also signify that you may be facing a dilemma and are unsure of what path to take. You may feel that things are not turning out the way you planned with this Major Arcana card appearing in your Tarot spread. You need to step outside yourself and look at your situation from a different angle. Give yourself time to just relax, stop trying to control things and just let them be, the correct course of action will become clear to you in time.</p>";
  } else {
    return "<p>The Hanged Man reversed can indicate that you are being impulsive and making rash decisions as a way to distract yourself from some sort of inner discontentment. This Major Arcana trump card generally shows that you may be jumping from one bad situation to the next without considering where this behaviour is taking you. Ask yourself if there are feelings you trying to avoid confronting or changes that you know need to be made but are reluctant to tackle. If there are, consider what you fear will happen if you do? If you genuinely don’t know what to do in terms of your direction in life, just stop, breathe and wait for things to become clearer. However, if you know your behaviour patterns are not working for you, change them. Your attitude towards your life will determine life’s attitude towards you!</p>";
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
    return "<p>Although it is the that many people fear, Death generally does not mean physical death. As a rule you should never predict deaths (or the outcomes of illnesses or pregnancies for that matter) as a Tarot reader. It is unethical and irresponsible. Aside from the ethics, The Death usually signifies spiritual transformation and a time of change and new beginnings, not actual death! The transformation or change that Death can bring can be difficult, unexpected, sudden or even traumatic but it will bring with it a new lease of life. Its best to try not to resist the change the Death brings as resisting it will only make the transition difficult and painful. Instead try to embrace the change as a fresh start. This Major Arcana card can also signify the need to let go of old issues or beliefs when it appears in a Tarot spread. It may be telling you that you need to draw a line under the past in order to move forward in a positive direction. A Death card transformation can be a bit of a shock to the system but ultimately it’s a positive one.</p>";
  } else {
    return "<p>Death reversed indicates that you are resisting a change that is necessary for you to move forward. Nothing new can begin while you are holding on to this old negative energy. Death indicates that while you are finding it difficult to let go, once you do, new energy will come into your life to give you a new brighter beginning. The change the Death reversed brings is not something you can resist forever, if you keep holding onto the things you should be letting go of, the universe will find a way to push you on to your life path in its own way. The universe’s way of getting you to where you’re supposed to be, if you resist it, can be shocking and distressing. It’s much better to make you way to your correct path rather than getting a jolt that forces you onto it. At least if you make a decision to let go of old situations, old issues or relationships you will feel empowered that you made a decision to end what wasn’t working for you. When you think of the change you are resisting, ask yourself realistically is it going to make you feel worse than staying in your current situation indefinitely or could it possibly lead you to something amazing?</p>";
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
    return "<p>the Temperance signifies balance, peace, patience and moderation. This Major Arcana card indicates that you have found your inner calm and have a good perspective on things. It is a sign that the relationships in your life are harmonious. You have learned not to allow yourself to be dragged into other people’s conflict or to let minor issues knock you off balance. Instead you adapt to the situations with a clear mind and calm heart and keep your balance. Temperance can also signify that you have found peace and tranquillity and you are feeling content. Temperance indicates that you are truly in touch with who you are inside, what you value and your own moral compass and you are finding it easier to figure out your aspirations and set yourself goals. </p>";
  } else {
    return "<p>Temperance reversed indicates imbalance or overindulgence.  This Major Arcana card can be an indicator that you are behaving in a hasty or reckless fashion. It can be a signifier of many issues with excessive or harmful indulgences such as drinking, drug use, gambling, overeating, shopping and the list goes on. The Temperance in a reversed position may be telling you that you have lost touch with your own inner calm and tranquillity which can lead you to seek gratification in risky, harmful ways. Temperance reversed can also indicate a lack of harmony with the people in your life so you may find yourself clashing with those closest to you or allowing yourself to be dragged into other people’s drama. You may be lacking perspective and not looking at the bigger picture. You would do well to take a step back and take a look at how you are behaving, examine the root causes and work on resolving them.</p>";
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
    return "<p>The Devil can signify depression or addiction. It can also be a sign of feeling trapped or restricted. With this Major Arcana card in your Tarot spread you may feel as though outside influences or forces beyond your control are restricting you, leaving you feeling powerless and victimised. However, this is the illusion The Devil creates. You are in control of your own destiny and are not bound by anything other than your own attitudes and behaviour. Don’t give up and don’t give away your power. You don’t have to tolerate negativity, criticism, manipulation or abuse from anyone. There are always options and there is always something positive you can do to improve your situation no matter how hopeless things may seem on the surface. Likewise be mindful of how you are treating others and make sure you are not trying to manipulate or control people in your life either. The Devil upright in your Tarot reading can also indicate obsessive, secretive or impulsive behaviour. It can be a sign that you are out of control. The Devil is also a signifier of materialism and may show that you have become overly concerned with material things, status or power. These are not things that will make you truly fulfilled as a person so put your energy into the things that will.</p>";
  } else {
    return "<p>The Devil reversed can signify that you are becoming aware of the things that have been trapping you and the role you play in allowing them to. It is a great card for anyone battling an addiction or mental illness or engaging in harmful behaviour as it indicates that you are starting to see the light and take back control of yourself and your life. You want to be free from these problems and you are starting to get the motivation to change your circumstances. It can also indicate that you are getting a new perspective on issues that you felt powerless to change previously. The changes you want to make may not be easy but they are necessary for you if you want to have a happy life in the future and you are beginning to realise what you have to do. The Devil reversed can also indicate a near miss with a negative, harmful or dangerous situation or person. The important message this Major Arcana card brings is to be grateful that you avoided it, learn from it and move forward. Do not fall back into the old bad or risky behaviours that led you so close to danger. Don’t get cocky and think you are invincible if you managed to dodge the bullet. Appreciate your good fortune, but don’t push it!</p>";
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
    return "<p>Whereas the Death card is usually the card people are terrified of, out of all of the cards in the deck, The Tower is the one you really need to brace yourself for. The Tower represents chaos and destruction. It is the Major Arcana card of sudden upheaval and unexpected change. This change usually is scary, life changing and often unavoidable. A negative Tower event can be akin to a bomb going off in your life. You don’t know how you will survive but somehow you will and later you will realise that while it was a tremendously difficult thing to go through and you wouldn’t wish it on your worst enemy, it has made you into the person you are. One positive aspect of The Tower is that the destruction it brings is usually directed at something that was built on a false beliefs and foundations or unrealistic goals and dreams. Also on the bright side, the destruction The Tower brings is always followed by renewal and creation. However, The Tower with a negative aspect can represent a whole host of tragic, traumatic or life-altering events like the death of a loved one, divorce, a bad breakup, assault, rape, violent abuse, stillbirth or miscarriage, child abuse, bankruptcy, a drug overdose, a car crash or job loss to name but a few. It’s usually the kind of thing you hope will never happen to you. That said, not every Tower event denotes tragedy. If the surrounding cards are positive, The Tower can simply represent a big change, like going to live in another country. This will be a massive upheaval. It will be a scary adjustment and will change your life as you know it but ultimately the change will be a good one. Placement of The Tower is important too, in a past position in a Tarot spread it is telling you what you’ve been through. While there are some life-events that we cannot avoid, sometimes The Tower will appear in a future if you are on a path that is leading to danger to warn you to avoid it. For instance, if you tend to put yourself in dangerous situations without thinking of the consequences, The Tower may be a warning to be mindful of your safety. Or if you take big gambles with money, The Tower may be warning you that it’s time to start acting more responsibly to avert disaster. It can also warn of natural disasters such as earthquakes, tsunamis, hurricanes, tornadoes etc. </p>";
  } else {
    return "<p>The Tower reversed can be a sign that you have narrowly avoided a disaster. You will need to learn from the experience in order to prevent the lesson from coming back around again. It can also signify delaying the inevitable. While we would all like to go through life without experiencing hardships, they are a necessary part of life. Without darkness how would we ever learn to appreciate the light? If you have been running from a big change because you fear the pain or heartache it will bring, this Major Arcana card in reversed position may be telling you it’s time to turn and face it. Avoiding it may seem like the easier option but if you do you’ll be running for the rest of your life. Confronting it won’t be easy but it will eventually lead you to a new beginning.  If you have already experienced your Tower event, The Tower reversed warns you not to try and rebuild what you had but to seek something new and better to build in place of what was destroyed as it was destroyed for a reason. You need to let it go and focus on creating something new. It can also be a sign that you are trying to hold onto people that are no longer supporting you in the way they once did. You need to let go of them and let them go their own way, so new people can come into your life.</p>";
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
    return "<p>The Star indicates hope for the future, inspiration and contentment. With this Major Arcana card in your Tarot spread you will find yourself feeling very positive, motivated and free. You will be feeling very serene and in tune with the universe as The Star is a card of spiritual connection. The Star is a very positive omen. It is the period of calm and stability that follows the storm that was The Tower. The Star indicates that you have come through your tough times with a renewed sense of yourself and the world around you, you are full of calm, well-balanced energy and you are open to healing the wounds of the past. Whatever mental, emotional, physical or spiritual issues you were experiencing are now behind you and you are ready to embrace what your future holds. Trust that the universe has a plan for you and trust the feeling you have that everything is going to be OK.  You will be feeling confident in yourself and people will like you for who you are with this card in your Tarot reading. The Star can also indicate creativity and artistic flair, so now would be a great time to take up an artistic hobby.</p>";
  } else {
    return "<p>The Star in a reversed position can indicate that you are feeling hopeless. Perhaps the difficult situations you have been through in the past have drained you of your lust for life and your faith in the universe’s plan for you. The Star reversed does not indicate that things are hopeless, only that you feel they are. You need to take responsibility for yourself and your attitude to life. You may want to consider seeking some professional counselling to help you heal the wounds of the past and leave them where they belong. The Star can signify that you have lost your confidence, your belief in yourself and your trust in your own abilities. This Major Arcana card can also be an indication of feeling anxious and overwhelmed. A change of attitude is needed to resolve this not necessarily a change of circumstances. Don’t allow yourself to continue to play the victim if you have long since left the situation in which you were victimised. The Star is telling you that it’s time to heal the past, draw a line under it and move forward. Seek support to do this if you need to. You can do anything you set your mind to, you just have to believe in yourself and focus on the positive. Start small and try to find one or two things to be grateful for in each day. A creative outlet might also be helpful to you if you are artistically inclined. Rediscover your creative side, it will help you heal.</p>";
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
    return "<p>The general meaning of The Moon in an upright position is that everything is not as it seems. It is also the Major Arcana of intuition. The Moons tells you that something about a situation or person in your life is not what it appears to be and you need to trust what your instincts are telling you in order to see past this illusion. The Moon also indicates that you should pay attention to your dreams as your subconscious may be bringing your attention to some information you’ve missed. The Moon can also signify that you are letting your anxiety or fear overwhelm you which may be having a negative effect on your outlook and causing you to suffer from mood swings, instability or insecurity. It can also represent a woman’s menstrual cycle. The Moon can also signify dormant insecurities or repressed issues resurfacing. The Moon can represent underhanded or dodgy deals or illegal behaviour. If it appears in this context it is a warning to clean your act up before your behaviour is exposed. If you are awaiting a decision on something, The Moon indicates that the answer will either be delayed or be so vague it will add to your confusion rather than clarify matters</p>";
  } else {
    return "<p>In a general context The Moon reversed can signify releasing fears or negative energy clearing. It can also indicate secrets or lies being exposed. If you have been experiencing fear or anxiety it should begin to subside. If you have lost something, The Moon reversed is a sign you will find it. This Major Arcana card may also be an indication of self-deception or delusions. You may be kidding yourself about your role in creating your current circumstances or you may be struggling to separate your own deception or fantasies from reality. The Moon reversed can also indicate that any depression or mental health issues you have been having will begin to lift and you will begin to see the light again. You will work through any repressed issues or insecurities to find new confidence and clarity. If you have been awaiting a decision on something, The Moon reversed indicates that you will get an answer or clarity on the matter.";
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
    "",
  rw_meaning:Moon()};

function Sun() {
  if (u == 0) {
    return "<p>The Sun is the Major Arcana card of positivity, optimism, freedom and fun. When The Sun appears in an upright position, things should be going well for you as this card also represents success and enthusiasm. You will find that people are drawn to the happy vibes and positive energy you are giving out and you will bring light and joy to everyone and everything you come into contact with. You will be feeling carefree, liberated and self-assured. It is also the card of truth so if you have been the victim of lies or deception, The Sun is coming to shine its light on the deceit to reveal the truth and the perpetrators of the lies. The Sun in an upright position also signifies good luck. Any problems you have been experiencing will melt away with the warmth this card brings. It can also indicate travel to a country with a warm climate.</p>";
  } else {
    return "<p>The Sun reversed can indicate sadness, depression and pessimism. You may be finding it difficult to focus on the positive with this card in your Tarot reading. The Sun reversed does not usually mean that your situation or circumstances are all that bad but that you are feeling pessimistic and focusing on the negative which is affecting your outlook on life. It can signify a lack of enthusiasm for life, being unclear on the right path to take or being unable to see the way forward. This Major Arcana card may show that you are letting negative energy/thoughts close you off to the happiness and joy that is all around you. You have the power to change this by simply allowing yourself to be open to the positive things that are coming your way and by finding gratitude for the good things in your life.  The Sun reversed can also be an indicator of being overly enthusiastic or confident to the point that it becomes a negative trait. For example, you may be being so overly confident that you are actually becoming egotistical or arrogant. Or you may be so enthusiastic about achieving your goals that you haven’t stopped to check if they are actually realistic.</p>";
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
    "",
  rw_meaning:Sun()};

function Judgment() {
  if (u == 0) {
    return "<p>The Sun is the Major Arcana card of positivity, optimism, freedom and fun. When The Sun appears in an upright position, things should be going well for you as this card also represents success and enthusiasm. You will find that people are drawn to the happy vibes and positive energy you are giving out and you will bring light and joy to everyone and everything you come into contact with. You will be feeling carefree, liberated and self-assured. It is also the card of truth so if you have been the victim of lies or deception, The Sun is coming to shine its light on the deceit to reveal the truth and the perpetrators of the lies. The Sun in an upright position also signifies good luck. Any problems you have been experiencing will melt away with the warmth this card brings. It can also indicate travel to a country with a warm climate.</p>";
  } else {
    return "<p>The Sun reversed can indicate sadness, depression and pessimism. You may be finding it difficult to focus on the positive with this card in your Tarot reading. The Sun reversed does not usually mean that your situation or circumstances are all that bad but that you are feeling pessimistic and focusing on the negative which is affecting your outlook on life. It can signify a lack of enthusiasm for life, being unclear on the right path to take or being unable to see the way forward. This Major Arcana card may show that you are letting negative energy/thoughts close you off to the happiness and joy that is all around you. You have the power to change this by simply allowing yourself to be open to the positive things that are coming your way and by finding gratitude for the good things in your life.  The Sun reversed can also be an indicator of being overly enthusiastic or confident to the point that it becomes a negative trait. For example, you may be being so overly confident that you are actually becoming egotistical or arrogant. Or you may be so enthusiastic about achieving your goals that you haven’t stopped to check if they are actually realistic.</p>";
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
    return "<p>The World signifies having the world at your feet! This can be in a literal sense as The World is one of the Travel cards of the Major Arcana. It can represent new worlds opening up for you so you can expect to be welcomed by the people in the countries you travel to. The World can also mean you will have the world at your feet in another sense, i.e. that you will be successful and the opportunities available to you at the moment are endless. You have gone through the trials and tribulations of the rest of the Major Arcana, you have endured the hardships and learned your lessons and now you will reap the rewards. You should be proud of what you have achieved, it has not been easy to get here but you’ve done it. The universe is smiling upon you and luck is on your side when this Major Arcana card appears in your reading so grab the opportunities available to you. The World can represent the completion of a challenge such as a university course or a project or can represent finally achieving a dream or aspiration such as starting your own business, getting married or having children. You have reached the point where you can be happy with what you have accomplished. Success can bring a whole new set of challenges or worries so make sure you’re not carrying the weight of the world on your shoulders. You’ve worked hard to get to this point so stop and savour the moment! Celebrate your accomplishments.</p>";
  } else {
    return "<p>The World reversed can indicate that you have not accomplished what you set out to do and things have become stagnant. You may have tried to take shortcuts instead of putting in the hard work necessary to achieve your dreams. You may be throwing all your energy into trying to make something work that is not working for you. The World reversed can signify feeling stuck in a situation. This will be one particular part of your life that is taking up your energy rather than problems in all areas. You may be aware of what is it already as it will be a focus for you and you may feel burdened by it. Remember that there is no point in flogging a dead horse. So if you’ve thrown everything you’ve got a something and it’s still not working for you, The World reversed may be telling you that it’s time to accept the disappointment and cut your losses. </p>";
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
      card_obj["identifier"] = "Present";
      break;
    case 2:
      card_obj["identifier"] = "Challenge";
      break;
    case 3:
      card_obj["identifier"] = "Past";
      break;
    case 4:
      card_obj["identifier"] = "Future";
      break;
    case 5:
      card_obj["identifier"] = "Above";
      break;
    case 6:
      card_obj["identifier"] = "Below";
      break;
    case 7:
      card_obj["identifier"] = "Advice";
      break;
    case 8:
      card_obj["identifier"] = "Influences";
      break;
    case 9:
      card_obj["identifier"] = "Hopes";
      break;
    case 10:
      card_obj["identifier"] = "Outcome";
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

