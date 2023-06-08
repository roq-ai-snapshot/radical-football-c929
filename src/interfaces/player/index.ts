import { ParentInterface } from 'interfaces/parent';
import { PlayerProfileInterface } from 'interfaces/player-profile';
import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { CoachInterface } from 'interfaces/coach';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  user_id: string;
  academy_id: string;
  coach_id: string;
  status: string;
  created_at?: Date;
  updated_at?: Date;
  parent?: ParentInterface[];
  player_profile?: PlayerProfileInterface[];
  user?: UserInterface;
  academy?: AcademyInterface;
  coach?: CoachInterface;
  _count?: {
    parent?: number;
    player_profile?: number;
  };
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  filter?: {
    id?: string;
    user_id?: string;
    academy_id?: string;
    coach_id?: string;
    status?: string;
  };
}
