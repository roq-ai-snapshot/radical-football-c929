import * as yup from 'yup';
import { parentValidationSchema } from 'validationSchema/parents';
import { playerProfileValidationSchema } from 'validationSchema/player-profiles';

export const playerValidationSchema = yup.object().shape({
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  academy_id: yup.string().nullable().required(),
  coach_id: yup.string().nullable().required(),
  parent: yup.array().of(parentValidationSchema),
  player_profile: yup.array().of(playerProfileValidationSchema),
});
