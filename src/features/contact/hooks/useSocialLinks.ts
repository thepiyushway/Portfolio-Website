import { socials } from '../../../config/site';
import type { Social } from '../types';

export function useSocialLinks(): Social[] {
  return socials.map((item) => ({ ...item }));
}
