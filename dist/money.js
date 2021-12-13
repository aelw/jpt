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
    return "<p>Opportunity knocks! With the Fool in your career, it may be time to go for that new job or start your own business that you’ve been dreaming of. Other people may try to put you off or may not understand what you’re doing, be patient with them and try to make them understand but do not let them deter you. For current projects it indicates fresh new ideas and being reinvigorated with energy. The Fool indicates big opportunities for advancement. Be clever and research your opportunities and the risk but don’t be afraid to take the plunge! Financially, if you take the chance and work hard you will make more than you thought you would.</p>";
  } else {
    return "<p>Financially, the fool reversed shows some potentially promising financial opportunities but exercise caution and do your homework before committing to anything. You don’t want to be taken advantage of. Career-wise you may be becoming restless in your current position or thinking of going out on your own. Think before you act! Or you may simply be holding back your best ideas due to a lack of confidence, don’t be afraid to put yourself out there and assert yourself. Your ideas are just as valid as everyone else’s. Don’t be afraid to speak up.</p>";
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
    return "<p>In terms of money and career, The Magician Tarot points to a new opportunities presenting themselves. They will require you to make a brave move and to put your original ideas into practice. Play your cards close to your chest with certain people as The Magicians never give away their secrets. It’s a good time for promotions or starting a new business venture, you will be feeling powerful and self-assured. Big things are coming your way! You might be presented with an opportunity to mentor someone or be mentored by someone who will give you the benefit of their experience.  Your finances will be improving or you will have a great opportunity to make extra money when this card appears.</p>";
  } else {
    return "<p>In terms of money and career, The Magician Tarot reversed suggests that you are not using the skills and abilities you have to make the best of the opportunities available to you. Again you may be experiencing feelings of self-doubt. You may feel like you are not living up to your full potential but feel afraid of the risks involved in giving a new venture a go. Take the time to figure out and resolve why you are finding change so difficult, what is holding you back? It is just fear of disappointing? The Magician reversed can indicate deceitful people around you so if you are holding back on a new venture because you are unsure you can trust the other people involved, this may be an indicator that you are right to be concerned. If you are stuck in a financial rut you will need to take a proactive approach to change your circumstances.</p>";
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
    return "<pIn a work context, The High Priestess can indicate that you may soon become aware of information or an opportunity that will be of benefit to you. The High Priestess Tarot card is an indicator of creativity and inspiration for those involved in the arts. For students, if The High Priestess Tarot card appears a good teacher may be coming into your life to help you in your studies. Be careful who you discuss your finances with. Keep them on a need to know basis.</p>";
  } else {
    return "<p>In a career context, The High Priestess reversed can indicate that you have not been kept in the loop in work. You may be feeling isolated and detached as a result. The High Priestess reversed can indicate a duplicitous female so be careful who you trust. Financially speaking, make sure you understand all the conditions before taking out loans or signing contracts, again somebody may be being dishonest with you. Trust your intuition if it doesn’t feel right.</p>";
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
    return "<p>In a career context, when The Empress appears in a Tarot reading, you will be feeling very creative and will inspire the people around you with your passion. You will be full of new ideas. For those trying to decide on a career or thinking of changing career, it is usually an indicator that you would do well in a creative field such as the Arts. Financially speaking this is a good time for cash flow. It’s also a good time to follow your intuition in terms of investments. As you reap the benefits, remember to share your abundance of wealth with those in need.</p>";
  } else {
    return "<p>In a career context, The Empress reversed can indicate that you are finding your work unfulfilling or monotonous and long to do something where you feel creatively inspired. You may feel unappreciated in your work. Again this is not necessarily the case. It’s more to do with your insecurities. Now is not a time for knee-jerk reactions or big decisions career wise, it is a time to stop and wait until you feel ready. Again take some time to get to the root of how you are feeling and resolve that. In terms of finances, you will have everything you need although you may not feel confident that there is an abundance of money. Trust that as long as you continue to make responsible choices you will be financially secure. Don’t squander your money.</p>";
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
    return "<p>The Emperor in a career context indicates that your hard work will be noticed and you will reap the rewards of status and success. Concentration, focus and perseverance will get you where you want to go. If you are looking for work you will need to be persistent and logical in your job search. Good opportunities are coming that will bring structure and stability to your career. Again, it can be a sign that an older male colleague or boss will provide guidance and support to you. Financially, The Emperor is a sign that you need to be responsible and practical with your finances. You need to keep reasonable control of your spending and be aware of where your money is going. At the same time, you don’t need be a tyrant when it comes to controlling spending.</p>";
  } else {
    return "<p>In a career contact, The Emperor reversed shows a lack of consistency, focus and organisation leading to problems at work. If you are finding the restrictions work imposes on you are really starting to bother you, it may be time for a change. Perhaps there is another job in your chosen field that would give you greater freedom. Perhaps you are tired of following orders and want to be your own boss. These are options to consider. Financially speaking, you may be lacking control of your finances if The Emperor Tarot card appears in the reversed position. Consider getting the help of a professional.</p>";
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
    return "<p>This is a good time to get involved in group or team projects career wise. You should do what’s expected of you and avoid unconventional methods at work and you will be successful. The Hierophant is a signifier for sharing knowledge so you may find you get a teacher or mentor who will help you along your career path. Alternatively, you may also become a mentor or trainer of others. Also, now is a good time to take up study in an established educational institution. Financially, this is good time to get involved low risk, conventional investment opportunities. You should stick to conventional methods of managing your money. If you need financial advice use traditional financial institutions.</p>";
  } else {
    return "<p>When the Hierophant reversed appears in a career context, it can be a sign of a boss or person in a position of authority being a stickler for the rules and forcing others to conform to their way of doing things. You may have to tow-the-line with this person if they outrank you but you will not be happy about it and your work environment will feel restrictive. Alternatively, it can indicate that in group or team project you will feel pressured to conform to the group consensus even though it goes against your personal belief. You may also come into contact with a teacher or mentor who will teach you things with that you will feel the need to challenge.</p>";
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
    return "<p>When The Lovers card appears in a career context, it can represent a business partnership between two people. If this card is representing a partnership, it will be a great partnership and mutually beneficial. You and your business partner are on the same wavelength, will work well together and be mutually supportive of each other. The Lovers in a career Tarot reading can also indicate the possibility of getting romantically involved with a work colleague. Be cautious about mixing business with pleasure, make sure you know the risks involved and are prepared for the consequences. The Lover can also signify that you have a decision to make in relation to your career path. Again it may seem like you are only faced with undesirable choices but that’s not actually the case. Gather all your facts together to make the right decision. It may indicate a big change coming or a change of job, it may seem like something you don’t want at the time but it will be good for you.  Financially, now is a good time to seek financial opportunities as you will be attracting good fortune. </p>";
  } else {
    return "<p>The Lovers Tarot reversed in a career context can indicate disharmony in a business partnership. If you have a business partner you need to communicate with them and ensure that you are both in agreement about the direction the business is taking and your goals for the future. Like the upright meaning, The Lovers reversed can indicate the possibility of a romance at work but it comes with a stark warning. This romance could bring you trouble in your career. Be careful, make sure you understand and are prepared to accept the consequences of mixing business with pleasure if this gets messy. Financially, The Lovers reversed can represent being financially irresponsible and making impulsive decisions in relation to money. It can indicate being materialistic and seeking instant gratification by material means. Again, be accountable for your choices and learn from your mistakes.</p>";
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
    return "<p>With The Chariot in a work context you should be feeling very ambitious and motivated. If you have been having any issues with work colleagues that you feel may be trying to sabotage you, put your worries aside and continue to work hard and keep your self-control. Alternately, if you are job-seeking or have been feeling stuck in a rut career-wise, now is a good time to go after the job you’ve always wanted. You will beat the competition and achieve your goals! The Chariot can also represent work-related travel. In a financial context, The Chariot is a good omen that can represent overcoming obstacles. If there has been a financial challenge that has seemed insurmountable, this card indicates that this may be a good time to tackle it. It can also represent a big travel or transport related purchase such as buying a car or plane ticket or paying for a holiday etc. </p>";
  } else {
    return "<p>The ambition and motivation we see in The Chariot upright is still present in The Chariot reversed. However, when reversed it suggests that you are trying to run before you can walk! Work towards your goals one step at a time. Be careful not to be too forceful in your approach, it could be counterproductive and you could set yourself up for a fall. You need to take a step back and evaluate the obstacles in your way. Consider a slightly softer approach to achieving your goals. Financially, you need to be careful not to rush in investments or financial deals without properly considering them. Make sure you have all the information and have obtained solid financial advice before committing to anything. </p>";
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
    return "<p>In a career context Strength indicates that now is the time to master your emotions and forge ahead. You have the skills, you have the potential, you just need to be brave and believe in yourself. Don’t let fear of failure or fear of looking foolish hold you back from doing what you want to do and reaching your potential. If you want that promotion, go for it. If you feel like you are being overlooked, make yourself known. If you’ve always thought you could run your own business, believe in yourself and make it happen. Financially, avoid impulsive decisions when it comes to spending. That’s not to say you shouldn’t spend but make sure any purchases or investments are thought through properly and not based on an emotional impulse.</p>";
  } else {
    return "<p>The Strength Tarot reversed is similar to the upright meaning, in that it indicates that you need to be brave and have self-belief to get ahead in your career. In the reversed position in a career Tarot reading, this Major Arcana card is a stronger indicator that you have been letting fear and anxiety hold you back. Fear of failure can be paralysing if you allow it to be. Let go of the self-doubt, it doesn’t serve you. You have more inner strength, skill and ability than you realise. You just have to believe in yourself. Once you start to gain confidence you will find more direction and focus. Others will notice this change. Financially, Strength reversed is a stronger indicator not to be impulsive with your finances now. You may have money in abundance at the moment but you don’t know how long that will last for, be smart with your money.</p>";
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
    return "<p>The Hermit in a career context can indicate may suggest that you are putting too much focus on your career or money and materialistic pursuits, rather than sharing your attention between activities that will leave you feeling fulfilled on all levels. It can also indicate that you are wondering if you are in the right career. Money and materialism may no longer be enough to motivate you and you may find yourself seeking a new more satisfying career path.  Financially, now is a time to be mature in your approach to money and investments.</p>";
  } else {
    return "<p>In a career context The Hermit reversed  can indicate that it’s time to start putting  yourself out there career wise and making business connections after a period of working in solitude. You may be finding it tough to work alone and would benefit from doing some team projects or doing some consultancy work which will encourage you to interact with more people in your chosen field. Financially, now is a good time to seek the advice of a wiser, more mature person on investments or money. Don’t jump into things you don’t understand where money is concerned.</p>";
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
    return "<p>In a career context, again the upright Wheel of Fortune is usually a good omen and an indicator of big changes coming. If you’ve always wanted to start your own business or you’ve been considering a career change now is a good time to make the change. The universe is conspiring to help you reach your dreams so now is the moment to go for whatever you’ve been hoping for in your career. If you are happy and stable in your career, Wheel of Fortune can still be an indicator of changes coming. Even if these changes are challenging for you, they will ultimately lead to bigger and better things so embrace the change and try to go with the flow as much as possible. Financially, Wheel of Fortune also indicates change, if you have been consistently comfortable money wise, it cautions you to be prepared for the unexpected and make sure you put something by for a time when you may need it. If you’ve been experiencing financial difficulties the Wheel of Fortune Tarot card upright is an indicator that things are going to improve for you as you will have good financial luck. </p>";
  } else {
    return "<p>In a career context, the Wheel of Fortune reversed signifies a career becoming stagnant or a period of disruption and uncertainty in your career. Again, this Major Arcana card in reverse can show unwelcome changes coming. You must assess the decisions you’ve made about your career and honesty ask yourself if they have been the right choices to help you achieve what you want to get out of life. Have you seized the opportunities that were available to you? If not, don’t beat yourself up over it. Know that your current setbacks are only temporary. Use this time to learn from past mistakes and position yourself to seize your moment when the Wheel swings upwards again. Financially, don’t gamble or take financial risks when the Wheel of Fortune is in a reversed position. If you are feeling the pinch financially, this trump card can signify that you have neglected to put money aside or build yourself a financial safety net. Your current hardship will not last forever, when your finances improve, carry the lessons from this time forward with you.</p>";
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
    return "<p>When Justice appears in a career context, it tells you that you need to pay attention to balancing your work and personal life. Don’t forget to take adequate time out for yourself. Career is important. We all need to be able to financially support ourselves and there’s nothing wrong with having ambition. At same time, consider how many people on their deathbeds think “I wish I’d spent more time at the office.”? Remember to make time for the people who are important to you and for yourself while you’re building and maintaining a career you can be proud of. Financially, Justice can literally show you balancing your books and is a reminder that if you behave with integrity in terms of money and business you will be rewarded. If you’re going to take a bit of a gamble on something, this card is a good omen.  </p>";
  } else {
    return "<p>In a career context, Justice reversed may indicate that you are being treated unfairly in work. Perhaps you are being blamed for others mistakes or shortcomings. Perhaps you feel others are trying to sabotage you. Whatever the issue, don’t be hasty in your reaction. It is better to hold back and take a logical approach to resolve the issue. Don’t charge in and confront the culprits as with justice in reverse, arguments are not likely to go in your favour. Justice in reversed can also indicate that if you have not been acting with integrity in your career, your behaviour may be coming back to bite you. It can be a sign of corruption in business. Don’t try to avoid the consequences but hold your hands up and learn from your mistakes. You will be more respected for it. Justice reversed can also be a stronger indicator of a lack of work/life balance than the upright card, so be mindful of putting too much emphasis on either your work or personal life when this Major Arcana card appears in your reading. Financially, avoid risky investments or gambles as you are not likely to be in luck with this card appearing. It can indicate injustice in relation to money so be very cautious of people you are doing financial deals with at the moment, they may not be trustworthy!</p>";
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
    return "<p>In a career context The Hanged Man indicates that you are feeling uncertain about your career path or feel like your career has become stagnant. You may be unclear about what steps you need to take to move your career forward. If you are struggling to make a decision, understand that you don’t have to make a decision right now. Just relax and let things unfold. Things will become clearer in time. If you’re having financial issues, The Hanged Man indicates that you need a fresh perspective. Maybe anxiety around your finances is making them seem worse than they actually are or there may be positive things happening for you in other areas that you are not appreciating because you are focusing too much on money.  </p>";
  } else {
    return "<p>In a work context, The Hanged Man reversed Tarot card indicates that things may not be going well but you have neither the will nor inclination to deal with the issues involved. You may be resorting to blaming others or feeling like you are powerless to change your circumstances. Now is the time to take back control of your career. Figure out what you want and go for it, don’t be a passenger in your own life especially if it’s not taking you where you want to go. Financially, this Major Arcana card can indicate that you are paralysed by your fear of financial hardship. If you are struggling to cope financially, consider seeking financial advice from a professional. A fresh perspective might be all you need to get things moving in the right direction.</p>";
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
    return "<p>Death in a career context is a warning not to get too dependent on anything that is not working for you. The only thing in life that is guaranteed is that things change. If you are unhappy in your current job, start looking for a new one or the universe may force you to find a new job. If you are starting your own business but have been reluctant to quit your old job because of the security it offers, Death may be indicating that’s it’s time to consider jumping in with both feet. Money can be tightening when the Death card appears in a financial context, you may have a sudden drop in income or loss of money. If that happens don’t let it get you down, this change will lead you somewhere positive and you will learn from it. If you experience financial hardship, don’t stick your head in the sand, make practical adjustments and keep moving forward in a positive way. If you are tight on money, consider getting back to basics, swap big nights out for cosy nights in with close friends. And remember, any financial issues will be fine in the long run if you make the changes necessary.</p>";
  } else {
    return "<p>Like the upright meaning, The Death Tarot card reversed is an indicator that now might be time for a career change or new direction. You may be resistant to this change because you are afraid to let go of the security you have. You may like the stability and routine your career brings even if you find it unfulfilling. You may have been engaging in behaviour patterns that have stopped you from getting to where you want to be. Take time to figure out what needs to change in order to get you to the place on the career ladder you want to be and make it happen. Financially, much like the upright meaning, when this Major Arcana card appears reversed in a Tarot spread, it tell you that a financial deterioration of some sort may be inevitable and you will need to rethink how you manage your finances to get through it. Have a rethink of your spending habits, are there ways you have been wasting money that could improve your ability to manage your finances that you are resisting? Maybe you could be eliminating debt but you overspend out of habit? Let go of bad financial practices and be responsible with your money. Any hardship will only be temporary if you manage your money carefully. </p>";
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
    return "<p>In a career context, Temperance tells you that now, is a great time to set goals as you have the patience and persistence to achieve what you want. Your hard work and dedication will be noticed with Temperance upright in your Tarot spread. If you are hoping for a promotion or career advancement, Temperance tells you to be patient and not to jump at the first opportunity if there is a chance for something better further down the line. In a financial context, things should be going well as you should have balanced finances. However, be careful to practice moderation in relation to money as now is a time to maintain the balance and build your savings up at a steady pace rather than take risks with money or make risky investments. </p>";
  } else {
    return "<p>In a career context, the Temperance Tarot card reversed can signify an imbalance or conflict in a work situation. You may be working too hard or not working hard enough or you could be clashing with your co-workers. It can also indicate that you are ignoring or reacting negatively to constructive criticism. Whatever the issue, you need to look inward to re-balance your own energy in order to resolve this situation. Financially, if you are having issues you need to nip them in the bud immediately. Watch out for impulsive spending as you find yourself looking for instant gratification to distract you from the imbalance you're feeling inside. You need to slow down and reconnect with yourself to find peace. Excessive spending will bring you debt, not inner tranquillity!   </p>";
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
    return "<p>In a career context, The Devil upright in your Tarot reading can indicate that you feel trapped in a job that you hate. Again, you are in control of your own life even if you don’t feel that way. Evaluate what you really want in your career and if a move is what you need, make it. Remember that it is a choice you are making if you decide to stay in a job you dislike. The Devil can also indicate a colleague or person in a career context who is deceptive and may be trying to sabotage you. Be careful who you trust, this person will be all smiles to your face and while simultaneously stabbing you in the back. In a financial context, The Devil indicates that money will be tight but it suggests that there is more you could be doing to help yourself. Watch your spending! It can easily get out of control with The Devil in your Tarot spread. Also, avoid gambling or any sort of risky or impulsive investments.</p>";
  } else {
    return "<p>In a career context, The Devil reversed shows that your awareness of how your behaviour and choices have influenced your current circumstances is increasing dramatically and you are ready to start taking steps to get to where you want to be. While you may have felt stuck in your job due to financial constraints or being too focused on attaining status or materialistic goals, you are starting to see the big picture and refocus on what is going to make you happy and fulfilled in your life. Seize this new motivation and don’t fall back into old habits because they are comfortable or offer more financial security. Financially speaking, if you have been engaging in gambling, excessive spending or risky behaviours with money, you are starting to regain control of yourself.</p>";
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
    return "<p>In a career context, The Tower may indicate a lack of job security. It can be a signifier of a redundancy or job loss. However, it may also indicate a big change in your current position which will bring you unwelcome stress and may prove difficult but could ultimately lead to a better position or more security. For instance, the company you work for could be bought over by another company which could cause you a lot of stress or uncertainty for a while but may eventually lead to a more secure job. Financially speaking, The Tower warns to you to be careful with money. In its extreme negative, The Tower can represent bankruptcy. Avoid risky investments. There may be an unexpected upheaval coming in financial terms so if you haven’t put any money aside for a rainy day, you'd better do so quickly.</p>";
  } else {
    return "<p>In a career context, The Tower reversed can indicate that you may be managing to hold onto your job in difficult circumstances. This can be simply a sign that you are successfully avoiding a job loss. However, if you are avoiding something you perceive as a career disaster and rather than feel relieved you find yourself unhappy or dissatisfied, consider that this outcome may not actually be the best thing for you. Sometimes being out of our comfort zones can inspire us to do amazing things we never would have attempted otherwise. Financially, The Tower reversed is the same, it can indicate that you are averting a financial disaster but it does not necessarily mean that you should. It may be worth considering allowing whatever this negative event is, to just happen so you can deal with it and move forward, rather than constantly trying to push a boulder up a big hill and always struggling. For instance, being made redundant while scary, stressful and difficult for you, may give you the time and motivation to start your own business. Or if you have been struggling to make payments on a mortgage you can no longer afford to the detriment of every other area of your life, giving the keys back to the bank and renting might actually be a tough choice that would ultimately make you happier.</p>";
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
    return "<p>The Star in a career context indicates that you will have great opportunities coming your way in terms of work. If you have been waiting to find out the outcome of a promotion or job interview, The Star is very positive sign that things are going to go in your favour or something even better is going to come your way. It can also be an indicator that you would do well in a more creative role. You may be feeling very creatively inspired with The Star in your Tarot reading. Financially speaking, if you have been having money issues, The Star tells you that there is a way to get your finances in check. Now is a good time to make investments, within reason, as The Star in an upright position, signifies your finances moving in a positive direction.</p>";
  } else {
    return "<p>In a career Tarot spread, The Star reversed indicates that you may be feeling bored in your career or feel that you are stuck in a career that is going nowhere. Monotony has set in and you no longer feel the creative spark or enthusiasm you once had. You need to change your attitude and start focusing on the positive. Things are not as bad as they seem and anything you are unhappy with is within your power to change. The Star reversed can also indicate that you are not using your creativity and are letting your talents go to waste. In a financial context, if your finances have not been going well, The Star reversed tells you that any problems are within your power to change. Reassess your financial plans in light of any recent changes in your circumstances and ask yourself are these plans still working for you and will they get you what you want? If not, look at what you can do to change them to suit your current circumstances. Don’t let anxiety over money overwhelm you, it’s not all doom and gloom! Things are not as bad as you think they are.</p>";
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
    return "<p>With The Moon Tarot card appearing in a career context, you may be very unclear or even anxious about your career direction. There may be miscommunication between you and your colleagues or superiors in a work context which could cause problems or misunderstandings. Alternatively, someone may be holding information back from you and you may not have all the facts you need to make a decision. In terms of finance, The Moon indicates that you should be wary of undertaking investments or any big financial gambles as you may not have all the facts you need to make an informed decision. It can also indicate that someone may be purposely deceiving you to con you out of money. Don’t be overly paranoid but do trust your instincts, if it feels like it’s too good to be true it probably is!</p>";
  } else {
    return "<p>In a career context, if you work in an artistic or creative field, The Moon reversed can indicate a creative block such as writer’s block. In a general career context, it can indicate that any uncertainty or instability that you’ve been experiencing in your career will begin to stabilise. If you have been unclear about your career path recently, this Major Arcana card can signify that things will start to become clearer and you will feel more confident about your direction. Financially, if you have been confused about how to manage your finances, this may start to become clearer. However, The Moon in a reversed position can be a sign that deception is being or is about to be exposed so if your gut instincts tell you not to invest or commit money to something, listen to them and wait for the information you are missing to be revealed.</p>";
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
    return "<p>In a career context, The Sun Tarot card signifies a time of great success! New opportunities will be coming your way and you will be full of optimism and enthusiasm. You will be ready and able to jump in and make any project a success. Financially, you should be doing very well with The Sun appearing in your Tarot reading as it is the Tarot card of abundance. Business ventures, investments and any sort of money making initiatives should be going well for you. If you have any hidden debts, they should also come to the surface during this time so remember to put some of your wealth aside to cover them.  </p>";
  } else {
    return "<p>In a career context, The Sun reversed can signify feeling trapped or oppressed by your career. This oppression is more than likely within your power to change. For example, you may be feeling pessimistic and drained because you are working too many hours but you haven’t asked for the time off you need to rest. The Sun Tarot card reversed can also signify success evading you! You may be missing opportunities because you lack the confidence and self-assurance to go for them. Alternately, it can indicate that you may have set unrealistic career goals or may not be taking the appropriate practical steps to achieve what you want but relying on positivity alone to get you there. It can also indicate that you work in a cut-throat environment where being egotistical or competitive may be more valued. In a financial Tarot spread, The Sun reversed can be a bad omen. Investments may take a downturn or you may experience temporary financial hardship. However, The Sun Tarot card reversed usually indicates issues that are of your own making so look at your financial worries realistically and ask yourself if there is more you could be doing to resolve them.</p>";
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
    return "<p>In a career Tarot reading, Judgement can be an indication that you are being assessed or evaluated. You may be in the running for a promotion and not even know it. Be careful how you represent yourself when this card is in your reading, you are being watched. If you’ve been letting projects slide lately, now is the time to pick up the slack before you lose an opportunity. Financially speaking, Judgment tells you to be careful with money and not to make snap judgements. Make sure you have all the information you need to make an informed decision before making any big purchases or investments. It can also indicate a loss in a lawsuit so don’t do anything that could be negligent or lead to trouble like dangerous driving and make sure any insurance you need to have is up to date.</p>";
  } else {
    return "<p>Judgement reversed shows that you are at a turning point in your career and this time could make or break you in terms of success. You need to make a decision but you are paralysed by self-doubt. This is not a time for indecisiveness. You need to seize the opportunities available to you. If you let them slip by you may regret it. In a financial context, don’t be overly cautious with money. That’s not to suggest you should go wild and blow all your money at a casino but loosening the purse strings a little bit won’t kill you. You may find yourself deliberating endlessly about every purchase, if it’s something you need and you can afford it, just buy it! It’s good to be financially responsible but you don’t have to fret about every penny you spend.</p>";
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
    return "<p>In a career context, The World can represent reaching your career goals. If you have gone into business for yourself, it represents reaching a point, after all the stress and uncertainty of the start-up phase when you weren’t sure it would work, where your business is a success and you can finally breathe a sigh of relief! Enjoy the fruits of your hard work, you deserve it and remember to share your success with the people who helped you along the way. If you work for someone else, it can represent finally getting the position you always dreamed of or completing a successful project that will get you the recognition you deserve. The World in a career Tarot reading can also represent travelling in relation to work. In a financial context, The World indicates that money should be coming your way. However, this is not encouragement to gamble or make risky investments, rather it tells you that all the hard work you’ve been doing is going to pay off. Maybe you’ll receive an unexpected but well-deserved bonus or you will land a big contract which will give you financial security or maybe you’ll just reach the point where you feel financially secure after a long period of scrimping and saving. Whatever it is, your finances will be looking good with The World in your Tarot reading.</p>";
  } else {
    return "<p>In a career context, The World reversed can indicate that you have not reached the career goals you have set for yourself. It can also signify that you are falling short of your potential. Ask yourself what is holding you back? Have you putting the effort in? Are you afraid to strive to be all you can be for fear of failure? Are you stuck in a career that does not fulfil you? Remember you are the master of your own destiny. Don’t be afraid to make mistakes, mistakes are how we learn. And don’t be afraid to think outside the box or take an unconventional career path if it’s what you love to do. In a financial Tarot spread, The World Tarot card reversed can indicate that your finances have become stagnant. There are always things you can do to help yourself. Don’t try to take shortcuts or engage in risky investments or get rich quick schemes to boost your bank balance. Hard work, consistency and determination are needed to get you into a comfortable financial position.</p>";
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

