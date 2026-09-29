import hankyulLogo from "../../assets/logos/hankyul_logo.png";
import hawonLogo from "../../assets/logos/hawon_logo.png";
import independentLogo from "../../assets/logos/independent_logo.png";
import ndraLogo from "../../assets/logos/ndra_logo.png";
import seohnLogo from "../../assets/logos/seohn_logo.png";
import trLogo from "../../assets/logos/tr_logo.png";
import { organizationIds, type OrganizationId } from "@/types";

export type Organization = {
  id: OrganizationId;
  name: string;
  shortName: string;
  logo: string;
};

export const organizations: Record<OrganizationId, Organization> = {
  seohn: { id: "seohn", name: "세온헌터스", shortName: "세온", logo: seohnLogo.src },
  taerim: { id: "taerim", name: "태림길드", shortName: "태림", logo: trLogo.src },
  hawon: { id: "hawon", name: "해스티 원더러즈", shortName: "해원", logo: hawonLogo.src },
  hankyul: { id: "hankyul", name: "한결손해보험", shortName: "한결", logo: hankyulLogo.src },
  ndra: { id: "ndra", name: "국가재난대응청", shortName: "재난청", logo: ndraLogo.src },
  independent: { id: "independent", name: "무소속", shortName: "무소속", logo: independentLogo.src },
};

export function getOrganization(id: OrganizationId) {
  return organizations[id];
}

export { organizationIds };
