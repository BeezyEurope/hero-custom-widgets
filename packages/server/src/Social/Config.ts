import Twitter from "twitter";
import SocialService, { SocialService as SocialServiceType } from "./Service";
import SocialRepository, { SocialRepositoryType } from "./Repository";
import SocialController from "./Controller";

export interface SocialConfig {
  socialRepository: SocialRepositoryType;
  socialService: SocialServiceType;
  socialController: any;
}

const Config = (twitterClient: Twitter): SocialConfig => {
  const socialRepository = SocialRepository(twitterClient);

  const socialService = SocialService(socialRepository);

  const socialController = SocialController({ socialService });

  return { socialRepository, socialService, socialController };
};

export default Config;
