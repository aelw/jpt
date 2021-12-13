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

/*heath=================================MAJOR ARCANA===================================*/

function fool() {
  if (u == 0) {
    return "<p>The Fool bodes well for physical health if you have been ill as it indicates vitality and energy. However, it can also indicate being accident prone so if you get the Fool for health be extra careful. It can also represent pregnancy as it represents the beginning of a new life.</p>";
  } else {
    return "<p>When The Fool reversed is in a health reading it indicates trying out alternative treatments could be helpful in resolving any health issues. Also the tendency to be accident prone is stronger when this is in your reading so be mindful of your surroundings.</p>";
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
    return "<p>Your strength and good health may be making a comeback if you have been ill recently or feeling drained. If your illness or ill health is not improving you may benefit from trying alternative therapies.  The Magician Tarot can indicate that an experienced, powerful healer may be needed to give you the healing boost you need.</p>";
  } else {
    return "<p>The Magician Tarot card reversed is still generally a positive card indicating that you need to believe in your ability to heal in order to manifest that healing. However, for mental health issues involving any sort of hallucinations, psychosis or paranoia, The Magician reversed indicates that you should seek the help of an experienced professional sooner rather than later.</p>";
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
    return "<p>The High Priestess is generally telling you to listen to the messages your body is trying to send you about what it needs. The High Priestess can indicate that you are not being taken seriously in relation to your health concerns. Don’t allow your concerns to be ignored! The High Priestess can also symbolise fertility and hormones coming into balance and menstruation.</p>";
  } else {
    return "<p>If you have been isolating yourself from the world, you would do well to get active. The High Priestess reversed can indicate menstruation issues for women, hormonal imbalances and/or fertility issues. As in the upright meaning, if you feel you have a health issue that is not being taken seriously, make your voice heard. Try a few different healthcare practitioners if you need to, as long as doing so doesn't delay your treatment!</p>";
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
    return "<p>The Empress is a strong pregnancy indicator and very good omen of success for those actively trying to get pregnant. On the flip side, if you are not intending to get pregnant and you are capable of getting pregnant, The Empress is a warning to be very careful and take proper precautions! If pregnancy is not a factor in your health concerns, The Empress is an indicator that you need to nurture yourself more and listen to your body’s signals. Watch your energy levels, take time out for yourself to relax and unwind.</p>";
  } else {
    return "<p>Generally in health terms, The Empress tells you to take care of your health in a productive way as you deal with your emotions. It can indicate that emotional conflicts may be causing laziness, apathy, lethargy, or binge eating. You need to exercise and do activities that make you feel good about yourself. Your health will be all the better for it. The Empress reversed in a tarot reading can also indicate fertility/ pregnancy issues. That can be an unwanted pregnancy, a difficult pregnancy, miscarriage, termination or problems conceiving depending on the supporting cards.</p>";
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
    return "<p>The Emperor can mean that you may be being too hard on yourself. Reduce or eliminate activities that are too harsh on your body, avoid punishing exercise regimes and be kind to yourself. Work with your energy levels not against them. If you are having health issues, be logical in your approach to treating them. The “suck it up and get on with it” approach will not serve you well this time. If you need to rest, rest! If you’re ill, seek medical treatment and listen to your doctor’s advice.</p>";
  } else {
    return "<p>The Emperor reversed indicates that you may be being too rigid with your routine and causing yourself undue stress. This may be manifesting in physical symptoms like headaches or poor sleeping patterns. Pushing your body too far can also cause injuries. Don’t be afraid to loosen up the routine and give yourself time to relax. Alternately, if you have not been taking care of your health, The Emperor reversed can show you need to increase yourself discipline to bring yourself back to good health.</p>";
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
    return "<p>If you are experiencing health issues The Hierophant Tarot card indicates that conventional medicine may be the best route for you at the moment. You would also do well to introduce some sort of health routine such into your daily life e.g. exercising daily or taking vitamin supplements to boost your immune system.</p>";
  } else {
    return "<p>If you are ill, The Hierophant in reverse indicates that now is a good time to try alternative or holistic therapies. It will benefit you greatly. Don’t be too rigid in sticking to your normal health or exercise routines. It’s time to shake things up, try things you wouldn’t normally try and step outside your comfort zone.</p>";
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
    return "<p>The Lovers in a health reading is a signifier that having the right support will help you to get through any health issues. This may be a partner or friend who is offering moral support or a doctor or healthcare provider. The Lovers  can simply be an indication that you have decisions to make regarding a course of treatment. The Lovers can also be related to heart health so make sure you are taking good care of your heart when this card appears.</p>";
  } else {
    return "<p>The Lovers Tarot card in a reversed position indicates that you need to reconnect with how your body is feeling to bring harmony and health. At the moment, you may feel like your body is working against you but you need to learn to be kind to it and work within your energy levels. Your body is capable of amazing things but sometimes is needs rest and recuperation to restore itself. Don’t get frustrated at your body just give it the time it needs to heal.</p>";
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
    return "<p>If you have been having health issues that have been wearing you down, you will feel a new burst of motivation and energy to tackle them. You may have a long road to recovery ahead but you are strong and you will overcome these challenges. The Chariot can also represent issues with the digestive system. It’s a great time to start a new exercise regime!</p>";
  } else {
    return "<p>As with the upright meaning, The Chariot reversed signifies a burst of motivation and energy .  Just remember to pace yourself and not to rush things. If starting a new exercise program remember: slow and steady wins the race. If you try to do too much too soon you could end up hurting yourself! </p>";
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
    return "<p>The Strength Tarot Card  is a great card to get. It usually an indicator of good or improving health and feeling fit as a fiddle. If you have been ill, Strength reversed can represent overcoming an illness or beginning to get your strength back. It also shows the body and mind coming back into balance. Now is a good time to make positive changes to make your lifestyle healthier, especially those that require you to exercise more self-control.</p>";
  } else {
    return "<p>Strength in reversal is still an indicator of good health. However, you may be lacking in self-control which could be leading to bad habits that negatively affect your health. Try to reconnect with your inner self control and tackle these bad habits one at a time. Don’t try to do everything at once.  Small regular changes will accumulate into a big positive change.</p>";
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
    return "<p>The Hermit  indicates overdoing things may lead to health issues. If you find that you’re rushed off your feet, never having a minute to take a breath, The Hermit suggests that if you don’t make time for yourself to rest and reboot your health may suffer. Take a break. Even taking a few minutes every day to meditate or just clear your mind and connect with how your body is feeling would benefit your health at this time.</p>";
  } else {
    return "<p>The Hermit Tarot card reversed  can be an indication of mental health issues such as agoraphobia and paranoia. It can also be a stronger warning than the upright card that you need to take time out to relax or your health may suffer.</p>";
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
    return "<p>Again change is the theme of Wheel of Fortune in a health reading. So if you’ve been battling health issues the wheel may start to turn in your favour. Likewise you may experience some health issues that force you to make a necessary adjustment in your life. For instance, if you’ve been pushing yourself too far mentally, physically or emotionally, you may find a bout of illness forces you to slow down and take things easy.  This may simply be the universe’s way of telling you that you need to take better care of yourself. So heed the warning and make positive adjustments that are kind to your body and health.</p>";
  } else {
    return "<p>Wheel of Fortune reversed can indicate that you may be finding upheaval or disruption in another area of your life is having a knock on effect on your health. Try to remain positive and avoid letting pessimism take over.  While change can be stressful, especially unwelcome change, remember that even if you can’t control the situation, you can control how you let it affect you. Don’t try to stop events from happening but make positive steps to take care of yourself and your body even through the tough times and your health will benefit.</p>";
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
    return "<p>If you’ve been having health issues, Justice can indicate that you are out of balance which is contributing to your health issues. It also cautions against overindulgence in any area of your life. Try to keep everything in moderation.</p>";
  } else {
    return "<p>Justice reversed indicates a need for balance but it’s a stronger indicator that a lack of balance may cause health issues. Try to make time to take care of yourself and avoid overindulgence.</p>";
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
    return "<p>If you have been experiencing health issues, The Hanged Man encourages you to consider all of your treatment options. This does not mean you should reject the treatment you’ve been offered but it tells you to rethink your health issues and consider tackling them from multiple angles. It can also indicate that whatever the issue you are experiencing, you may need to just allow yourself time to heal rather than becoming frustrated that your health is not improving as quickly as you want it to. </p>";
  } else {
    return "<p>If you have been having health issues, The Hanged Man in a reversed position tells you that you really need to think outside the box to resolve them. You may consider the possibility that issues in other areas of your life may be aggravating or even causing your health issues. For example, stress, grief and anxiety can physically manifest themselves in a whole host of symptoms like migraines, insomnia, poor concentration, chronic fatigue, skin conditions and the list goes on. Alternative and holistic therapies could compliment your current medical treatment, boost your healing and help resolve any issues that may be exasperating your health woes.</p>";
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
    return "<p>Don’t panic if you see the Death card in health reading, again the Death card only indicates physical death in extremely rare cases and only in certain combinations! If you have been feeling like your health is never going to improve, Death can signify that a change is coming. However, how you handle this change will go a long way to determining the outcome. If your health has been bad and illness has left you feeling pessimistic, try to embrace the coming changes by changing your attitude. Try to find something positive in each day even if you feel ill. You may also try a new approach that you haven’t tried before like a different diet, holistic therapy or energy healing. Know that your current state is temporary, it will change. </p>";
  } else {
    return "<p>Death reversed can be an indicator that you are resisting tackling your health issues or being proactive in your treatments. Maybe your health woes are physical symptoms of a deeper issue and you are resisting resolving that. Maybe you have old fears surrounding a particular type of illness and you’ve been avoiding check-ups as a result. Go and get it out of the way, it will give you renewed energy.  </p>";
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
    return "<p>The Temperance Tarot card indicates that moderation is the key to good health so if you need to get any unhealthy habits under control, you will find that now is a great time to do it. If you have been experiencing any health issues, look to the areas of your life or health where you have been overdoing it or under-doing it. Bringing balance these areas may give you the healing boost you need.  </p>";
  } else {
    return "<p>Temperance reversed  is a very strong indicator that you are out of balance in some areas of your life that are having a knock on effect on your health. The Temperance Tarot card reversed can also be a sign of unhealthy or harmful excesses when it appears in a Tarot spread so be mindful of what you are putting into your body at this time. You need to connect to how you are feeling, figure out what issues may be causing you to seek comfort in unhealthy ways and resolve those issues to bring your balance back.</p>";
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
    return "<p>The Devil can indicate poor health brought about by harmful behaviour such as drug addiction, alcoholism or compulsive overeating. It is also an indicator of mental health issues such as depression, anxiety, panic attacks, bipolar, schizophrenia etc. If you feel like you have a mental health problem, please do not look to the cards to diagnose you, seek the help of a mental health professional. The Devil upright  can also indicate a silent illness like high blood pressure. If you have been feeling unwell or inexplicably exhausted, go to the doctor and get a check-up. If you have a diagnosed illness, The Devil tells you not to let it define you, while you may have some restrictions be careful that you are not putting excessive limitations on yourself out of fear of exasperating your illness.</p>";
  } else {
    return "<p>In a health Tarot spread, The Devil reversed is a good omen as it indicates stopping harmful habits and starting on the road to recovery so if you have suffered from any sort of addiction, you may well be getting the strength to overcome it. Stay strong and focused. It can also signify that you are starting to overcome stress, anxiety and any mental health issues that may have been causing issues in the past. It’s important to keep moving forward and to keep the momentum going with this new lease of life you’ve been given. Don’t fall back in to old patterns.</p>";
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
    return "<p>The Tower can represent a sudden illness or an accident so be mindful of your safety and well-being. If coupled with pregnancy cards it can indicate a difficult pregnancy, miscarriage, abortion or stillbirth. The Tower can also indicate mental health problems, which is understandable as Tower events generally bring with them extreme emotional turmoil. While the health issues The Tower represents are by no means easy, they are usually followed by a period of renewal. If health problems you are experiencing are forcing you to make changes in your life, try to go with the flow as these changes may ultimately prove to be for your best. Try to embrace them with a positive attitude. If you engage in any kind of substance abuse, The Tower is warning you to stop immediately or you may overdose.</p>";
  } else {
    return "<p>The Tower reversed can indicate that you may be ignoring an illness or a warning sign of an illness, hoping it will go away. You need to face this head on to give yourself the best chance at recovery. It may also indicate that a health scare may turn out to be nothing serious, and as such, you have averted disaster. Whatever the case, burying your head in the sand will not do you any good in terms of health issues.</p>";
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
    return "<p>If you have been having health issues, The Star indicates that you are coming into a time of great healing. It can be a signifier for good health and for health issues being resolved in a positive way. Or it can simply signify that you will be feeling much more hopeful about your future health.</p>";
  } else {
    return "<p>The Star reversed can indicate that your health is not all that bad but any issues you have will be magnified by your anxiety and pessimism at the moment. You may be worrying about your health and blowing any symptoms way out of proportion rather than going for a simple check-up. Try to focus on the positive. If you are worried about a health issue, go and get it checked by a doctor to put your mind at ease. Energy healing may be beneficial to you at the moment to boost your health and help you to let go of any negative energy you’re holding onto.</p>";
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
    return "<p>The Moon can signify mental health issues. It can be an indicator of anxiety disorders and depression. The Moon may also be telling you to trust your instincts in relation to your health. If you feel you have an underlying health problem, go get a check-up and push for as many tests as you need to get to the bottom of what’s affecting you. For women, The Moon can indicate a health issue relating to the menstrual cycle or being affected by a hormonal imbalance in some way.</p>";
  } else {
    return "<p>The Moon reversed can be a positive card in relation to health issues as it can indicate lifting of mental health issues such as depression or anxiety. However, it can also be an indicator of being unable to separate reality from fantasy and as such, if the supporting cards are negative, it can indicate an illness involving delusions or paranoia becoming worse. Generally  The Moon reversed shows stability returning to your health in general. If you have been awaiting the results of health test or had issues with waiting for a diagnosis, you will soon get clarity on what is causing health problems for you.</p>";
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
    return "<p>The Sun Tarot card is the Major Arcana card of positivity, optimism, freedom and fun. When The Sun appears in an upright position, things should be going well for you as this card also represents success and enthusiasm. You will find that people are drawn to the happy vibes and positive energy you are giving out and you will bring light and joy to everyone and everything you come into contact with. You will be feeling carefree, liberated and self-assured. It is also the card of truth so if you have been the victim of lies or deception, The Sun is coming to shine its light on the deceit to reveal the truth and the perpetrators of the lies. The Sun Tarot card in an upright position also signifies good luck. Any problems you have been experiencing will melt away with the warmth this card brings. It can also indicate travel to a country with a warm climate.</p>";
  } else {
    return "<p>In a general context, The Sun Tarot card reversed can indicate sadness, depression and pessimism. You may be finding it difficult to focus on the positive with this card in your Tarot reading. The Sun reversed does not usually mean that your situation or circumstances are all that bad but that you are feeling pessimistic and focusing on the negative which is affecting your outlook on life. It can signify a lack of enthusiasm for life, being unclear on the right path to take or being unable to see the way forward. This Major Arcana card may show that you are letting negative energy/thoughts close you off to the happiness and joy that is all around you. You have the power to change this by simply allowing yourself to be open to the positive things that are coming your way and by finding gratitude for the good things in your life.  The Sun reversed can also be an indicator of being overly enthusiastic or confident to the point that it becomes a negative trait. For example, you may be being so overly confident that you are actually becoming egotistical or arrogant. Or you may be so enthusiastic about achieving your goals that you haven’t stopped to check if they are actually realistic.</p>";
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
    return "<p>Judgement can signify a period of healing and wholeness after a difficult illness. You have come through the tough times, learned from them and you are ready and willing to take all necessary steps to help you on the road to recovery.</p>";
  } else {
    return "<p>If you suffer from a long-term illness or injury, Judgement reversed may be telling you to let go of any old negativity especially if it’s relating to someone who may have caused or contributed to your injury or illness. Holding onto negativity will only make your recovery more difficult. You have to accept where you are and let go of the past if you want to move forward.</p>";
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
    return "<p>If you have been battling an illness or injury, The World is an excellent card to get as it represents successfully coming through adversity. It is a great omen for recovery. Your health generally should be on the up if The World appears in a health Tarot spread. </p>";
  } else {
    return "<p>if you have been suffering from an illness, The World reversed can indicate that you need to rethink your treatments. If you have been trying the same things over and over and they have not been working, The World reversed is telling to try something different. This does not mean ignore your doctor’s advice but maybe try a holistic approach in conjunction with your current treatments that will compliment them and boost your health. However, if you have been failing to complete treatments like a course of medication or complete a fitness plan, The World reversed tells you to stop trying to take shortcuts and finish what you’ve started, if you want to resolve your health issues.</p>";
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

