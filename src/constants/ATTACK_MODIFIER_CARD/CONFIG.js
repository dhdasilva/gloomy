import ID from './ID';

export default {
  [ID.BLESS]: { id: ID.BLESS, name: '(Effect:Bless)', shuffle: true },
  [ID.CRIT]: { id: ID.CRIT, name: '(Attack:2x)', shuffle: true },
  [ID.CURSE]: { id: ID.CURSE, name: '(Effect:Curse)', shuffle: true },
  [ID.NEG1]: { id: ID.NEG1, name: '(Attack:-1)' },
  [ID.NEG1_DARK]: { id: ID.NEG1_DARK, name: '(Attack:-1) (Element:Dark)' },
  [ID.NEG2]: { id: ID.NEG2, name: '(Attack:-2)' },
  [ID.NULL]: { id: ID.NULL, name: '(∅)', shuffle: true },
  [ID.POS0]: { id: ID.POS0, name: '(Attack:+0)' },
  [ID.POS0_AIR]: { id: ID.POS0_AIR, name: '(Attack:+0) (Element:Air)' },
  [ID.POS0_EARTH]: { id: ID.POS0_EARTH, name: '(Attack:+0) (Element:Earth)' },
  [ID.POS0_FIRE]: { id: ID.POS0_FIRE, name: '(Attack:+0) (Element:Fire)' },
  [ID.POS0_ICE]: { id: ID.POS0_ICE, name: '(Attack:+0) (Element:Ice)' },
  [ID.POS0_REFRESH_ITEM]: { id: ID.POS0_REFRESH_ITEM, name: '(Attack:+0) (Symbol:ItemRefresh) an item' },
  [ID.POS0_STUN]: { id: ID.POS0_STUN, name: '(Attack:+0) (Effect:Stun)' },
  [ID.POS0_TARGET]: { id: ID.POS0_TARGET, name: '(Attack:+0) (Symbol:Target)' },
  [ID.POS1]: { id: ID.POS1, name: '(Attack:+1)' },
  [ID.POS1_AIR]: { id: ID.POS1_AIR, name: '(Attack:+1) (Element:Air)' },
  [ID.POS1_CURSE]: { id: ID.POS1_CURSE, name: '(Attack:+1) (Effect:Curse)' },
  [ID.POS1_DARK]: { id: ID.POS1_DARK, name: '(Attack:+1) (Element:Dark)' },
  [ID.POS1_DISARM]: { id: ID.POS1_DISARM, name: '(Attack:+1) (Effect:Disarm)' },
  [ID.POS1_HEAL2]: { id: ID.POS1_HEAL2, name: '(Attack:+1) (Symbol:Heal) 2' },
  [ID.POS1_IMMOBILIZE]: { id: ID.POS1_IMMOBILIZE, name: '(Attack:+1) (Effect:Immobilize)' },
  [ID.POS1_INVISIBLE]: { id: ID.POS1_INVISIBLE, name: '(Attack:+1) (Effect:Invisible)' },
  [ID.POS1_POISON]: { id: ID.POS1_POISON, name: '(Attack:+1) (Effect:Poison)' },
  [ID.POS1_PUSH1]: { id: ID.POS1_PUSH1, name: '(Attack:+1) (Effect:Push) 1' },
  [ID.POS1_SHIELD1]: { id: ID.POS1_SHIELD1, name: '(Attack:+1) (Symbol:Shield) 1' },
  [ID.POS1_STUN]: { id: ID.POS1_STUN, name: '(Attack:+1) (Effect:Stun)' },
  [ID.POS1_WOUND]: { id: ID.POS1_WOUND, name: '(Attack:+1) (Effect:Wound)' },
  [ID.POS2]: { id: ID.POS2, name: '(Attack:+2)' },
  [ID.POS2_CURSE]: { id: ID.POS2_CURSE, name: '(Attack:+2) (Effect:Curse)' },
  [ID.POS2_FIRE]: { id: ID.POS2_FIRE, name: '(Attack:+2) (Element:Fire)' },
  [ID.POS2_ICE]: { id: ID.POS2_ICE, name: '(Attack:+2) (Element:Ice)' },
  [ID.POS2_MUDDLE]: { id: ID.POS2_MUDDLE, name: '(Attack:+2) (Effect:Muddle)' },
  [ID.POS2_POISON]: { id: ID.POS2_POISON, name: '(Attack:+2) (Effect:Poison)' },
  [ID.POS2_WOUND]: { id: ID.POS2_WOUND, name: '(Attack:+2) (Effect:Wound)' },
  [ID.POS3]: { id: ID.POS3, name: '(Attack:+3)' },
  [ID.POS3_MUDDLE]: { id: ID.POS3_MUDDLE, name: '(Attack:+3) (Effect:Muddle)' },
  [ID.POS4]: { id: ID.POS4, name: '(Attack:+4)' },
  [ID.ROLLING_AIR]: { id: ID.ROLLING_AIR, name: '(Effect:Rolling) (Element:Air)' },
  [ID.ROLLING_CURSE]: { id: ID.ROLLING_CURSE, name: '(Effect:Rolling) (Effect:Curse)' },
  [ID.ROLLING_DARK]: { id: ID.ROLLING_DARK, name: '(Effect:Rolling) (Element:Dark)' },
  [ID.ROLLING_DISARM]: { id: ID.ROLLING_DISARM, name: '(Effect:Rolling) (Effect:Disarm)' },
  [ID.ROLLING_EARTH]: { id: ID.ROLLING_EARTH, name: '(Effect:Rolling) (Element:Earth)' },
  [ID.ROLLING_FIRE]: { id: ID.ROLLING_FIRE, name: '(Effect:Rolling) (Element:Fire)' },
  [ID.ROLLING_HEAL1]: { id: ID.ROLLING_HEAL1, name: '(Effect:Rolling) (Symbol:Heal) 1' },
  [ID.ROLLING_HEAL3]: { id: ID.ROLLING_HEAL3, name: '(Effect:Rolling) (Symbol:Heal) 3' },
  [ID.ROLLING_IMMOBILIZE]: { id: ID.ROLLING_IMMOBILIZE, name: '(Effect:Rolling) (Effect:Immobilize)' },
  [ID.ROLLING_INVISIBLE]: { id: ID.ROLLING_INVISIBLE, name: '(Effect:Rolling) (Effect:Invisible)' },
  [ID.ROLLING_LIGHT]: { id: ID.ROLLING_LIGHT, name: '(Effect:Rolling) (Element:Light)' },
  [ID.ROLLING_MUDDLE]: { id: ID.ROLLING_MUDDLE, name: '(Effect:Rolling) (Effect:Muddle)' },
  [ID.ROLLING_PIERCE3]: { id: ID.ROLLING_PIERCE3, name: '(Effect:Rolling) (Effect:Pierce) 3' },
  [ID.ROLLING_POISON]: { id: ID.ROLLING_POISON, name: '(Effect:Rolling) (Effect:Poison)' },
  [ID.ROLLING_POS1]: { id: ID.ROLLING_POS1, name: '(Effect:Rolling) (Attack:+1)' },
  [ID.ROLLING_POS1_DISARM]: { id: ID.ROLLING_POS1_DISARM, name: '(Effect:Rolling) (Attack:+1) (Effect:Disarm)' },
  [ID.ROLLING_POS2]: { id: ID.ROLLING_POS2, name: '(Effect:Rolling) (Attack:+2)' },
  [ID.ROLLING_PULL1]: { id: ID.ROLLING_PULL1, name: '(Effect:Rolling) (Effect:Pull) 1' },
  [ID.ROLLING_PUSH1]: { id: ID.ROLLING_PUSH1, name: '(Effect:Rolling) (Effect:Push) 1' },
  [ID.ROLLING_PUSH2]: { id: ID.ROLLING_PUSH2, name: '(Effect:Rolling) (Effect:Push) 2' },
  [ID.ROLLING_SHIELD1]: { id: ID.ROLLING_SHIELD1, name: '(Effect:Rolling) (Symbol:Shield) 1' },
  [ID.ROLLING_STUN]: { id: ID.ROLLING_STUN, name: '(Effect:Rolling) (Effect:Stun)' },
  [ID.ROLLING_TARGET]: { id: ID.ROLLING_TARGET, name: '(Effect:Rolling) (Symbol:Target)' },
  [ID.ROLLING_WOUND]: { id: ID.ROLLING_WOUND, name: '(Effect:Rolling) (Effect:Wound)' },
};