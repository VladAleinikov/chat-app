export type User = {
  id: string;
  fullName: string;
  userName: string;
  password: string;
  gender: Gender;
  profilePicture: string;
};

enum Gender{
  MALE,
  FEMALE
}