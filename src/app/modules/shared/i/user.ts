export class AdditionUserInfo {
  klasse = '';
  nachname = '';
  vorname = '';
  datenschutz = false;
  constructor(registerInfo?: AdditionUserInfo) {
    Object.assign(this, registerInfo);
  }
}

export class User extends AdditionUserInfo {
  key: string;
  email: string;
  rolle: string;
  creationDate?: firebase.default.firestore.Timestamp;

  constructor(
    authUser: firebase.default.User,
    registerInfo?: AdditionUserInfo
  ) {
    super(registerInfo ? registerInfo : null);

    this.email = authUser.email;
    this.rolle = 'USER';
    this.key = authUser.uid;
  }
}
