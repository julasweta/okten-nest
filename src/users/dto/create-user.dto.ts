//дані які приходять з запиту
export class CreateUserDto {
  id: string;
  name: string;
  city: string;
  age: number;
  status: boolean;
}
/* якщо дані не потребують валідації, типізуємо в папці interfaces */
