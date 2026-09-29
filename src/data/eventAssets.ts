import type { StaticImageData } from "next/image";
import bok1999 from "../../assets/1999/bok_1999.png";
import bokBirthday from "../../assets/birthday-cafe/bok_birthday_cafe.png";
import bokMagazine from "../../assets/magazine/bok_magazine.png";
import bokOffRecord from "../../assets/off-the-record/bok_off_the_record.png";
import dahae1999 from "../../assets/1999/dahae_1999.png";
import dahaeBirthday from "../../assets/birthday-cafe/dahae_birthday_cafe.png";
import dahaeMagazine from "../../assets/magazine/dahae_magazine.png";
import dahaeOffRecord from "../../assets/off-the-record/dahae_off_the_record.png";
import dan1999 from "../../assets/1999/dan_1999.png";
import danBirthday from "../../assets/birthday-cafe/dan_birthday_cafe.png";
import danMagazine from "../../assets/magazine/dan_magazine.png";
import danOffRecord from "../../assets/off-the-record/dan_off_the_record.png";
import haesol1999 from "../../assets/1999/haesol_1999.png";
import haesolBirthday from "../../assets/birthday-cafe/haesol_birthday_cafe.png";
import haesolMagazine from "../../assets/magazine/haesol_magazine.png";
import haesolOffRecord from "../../assets/off-the-record/haesol_off_the_record.png";
import hankyulAnimals from "../../assets/animal-hunters/hankyul_animal_hunters.png";
import hawonAnimals from "../../assets/animal-hunters/hawon_animal_hunters.png";
import independentAnimals from "../../assets/animal-hunters/independent_animal_hunters.png";
import minwon1999 from "../../assets/1999/minwon_1999.png";
import minwonBirthday from "../../assets/birthday-cafe/minwon_birthday_cafe.png";
import minwonMagazine from "../../assets/magazine/minwon_magazine.png";
import minwonOffRecord from "../../assets/off-the-record/minwon_off_the_record.png";
import miro1999 from "../../assets/1999/miro_1999.png";
import miroBirthday from "../../assets/birthday-cafe/miro_birthday_cafe.png";
import miroMagazine from "../../assets/magazine/miro_magazine.png";
import miroOffRecord from "../../assets/off-the-record/miro_off_the_record.png";
import nakyung1999 from "../../assets/1999/nakyung_1999.png";
import nakyungBirthday from "../../assets/birthday-cafe/nakyung_birthday_cafe.png";
import nakyungMagazine from "../../assets/magazine/nakyung_magazine.png";
import nakyungOffRecord from "../../assets/off-the-record/nakyung_off_the_record.png";
import ndraAnimals from "../../assets/animal-hunters/ndra_animal_hunters.png";
import seohnAnimals from "../../assets/animal-hunters/seohn_animal_hunters.png";
import sora1999 from "../../assets/1999/sora_1999.png";
import soraBirthday from "../../assets/birthday-cafe/sora_birthday_cafe.png";
import soraMagazine from "../../assets/magazine/sora_magazine.png";
import soraOffRecord from "../../assets/off-the-record/sora_off_the_record.png";
import trAnimals from "../../assets/animal-hunters/tr_animal_hunters.png";
import yeoreum1999 from "../../assets/1999/yeoreum_1999.png";
import yeoreumBirthday from "../../assets/birthday-cafe/yeoreum_birthday_cafe.png";
import yeoreumMagazine from "../../assets/magazine/yeoreum_magazine.png";
import yeoreumOffRecord from "../../assets/off-the-record/yeoreum_off_the_record.png";
import type { HunterId } from "@/types";

function url(image: StaticImageData) {
  return image.src;
}

export const magazineSrc = {
  haesol: url(haesolMagazine),
  dan: url(danMagazine),
  sora: url(soraMagazine),
  miro: url(miroMagazine),
  yeoreum: url(yeoreumMagazine),
  bok: url(bokMagazine),
  minwon: url(minwonMagazine),
  nakyung: url(nakyungMagazine),
  dahae: url(dahaeMagazine),
} as const;

export const offRecordSrc = {
  haesol: url(haesolOffRecord),
  dan: url(danOffRecord),
  sora: url(soraOffRecord),
  miro: url(miroOffRecord),
  yeoreum: url(yeoreumOffRecord),
  bok: url(bokOffRecord),
  minwon: url(minwonOffRecord),
  nakyung: url(nakyungOffRecord),
  dahae: url(dahaeOffRecord),
} as const;

export const seoul1999Src = {
  haesol: url(haesol1999),
  dan: url(dan1999),
  sora: url(sora1999),
  miro: url(miro1999),
  yeoreum: url(yeoreum1999),
  bok: url(bok1999),
  minwon: url(minwon1999),
  nakyung: url(nakyung1999),
  dahae: url(dahae1999),
} as const;

export const birthdayCafeSrc = {
  haesol: url(haesolBirthday),
  dan: url(danBirthday),
  sora: url(soraBirthday),
  miro: url(miroBirthday),
  yeoreum: url(yeoreumBirthday),
  bok: url(bokBirthday),
  minwon: url(minwonBirthday),
  nakyung: url(nakyungBirthday),
  dahae: url(dahaeBirthday),
} as const;

export const birthdayCafeByHunter: Record<HunterId, string> = {
  haesol: birthdayCafeSrc.haesol,
  dan: birthdayCafeSrc.dan,
  sora: birthdayCafeSrc.sora,
  miro: birthdayCafeSrc.miro,
  yeoreum: birthdayCafeSrc.yeoreum,
  bok: birthdayCafeSrc.bok,
  minwon: birthdayCafeSrc.minwon,
  nagyeong: birthdayCafeSrc.nakyung,
  dahae: birthdayCafeSrc.dahae,
};

export const animalHuntersSrc = {
  seohn: url(seohnAnimals),
  tr: url(trAnimals),
  hawon: url(hawonAnimals),
  hankyul: url(hankyulAnimals),
  ndra: url(ndraAnimals),
  independent: url(independentAnimals),
} as const;
