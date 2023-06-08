import * as yup from 'yup';
import { playerValidationSchema } from 'validationSchema/players';
import { playerProfileValidationSchema } from 'validationSchema/player-profiles';

export const coachValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  academy_id: yup.string().nullable().required(),
  player: yup.array().of(playerValidationSchema),
  player_profile: yup.array().of(playerProfileValidationSchema),
});
