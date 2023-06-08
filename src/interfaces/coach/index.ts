import { PlayerInterface } from 'interfaces/player';
import { PlayerProfileInterface } from 'interfaces/player-profile';
import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface CoachInterface {
  id?: string;
  user_id: string;
  academy_id: string;
  created_at?: Date;
  updated_at?: Date;
  player?: PlayerInterface[];
  player_profile?: PlayerProfileInterface[];
  user?: UserInterface;
  academy?: AcademyInterface;
  _count?: {
    player?: number;
    player_profile?: number;
  };
}

export interface CoachGetQueryInterface extends GetQueryInterface {
  filter?: {
    id?: string;
    user_id?: string;
    academy_id?: string;
  };
}
