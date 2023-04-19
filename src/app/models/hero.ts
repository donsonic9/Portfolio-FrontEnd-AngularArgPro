export class Hero {

  id?: Number;
  img_profile: String;
  saludo: String;
  profesion: String;

  constructor(img_profile: String, saludo: String, profesion: String) {
    this.img_profile = img_profile;
    this.saludo = saludo;
    this.profesion = profesion;
  }

}
