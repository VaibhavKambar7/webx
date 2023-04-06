interface User {
    username: string;
    password: string;
  }
  
  class LoginPage {
    private users: User[];
  
    constructor() {
      this.users = [
        { username: '1', password: '1' },
        { username: 'user2', password: 'password2' },
        { username: 'user3', password: 'password3' },
      ];
    }
  
    public validateLogin(username: string, password: string): boolean {
      const user: User | undefined = this.users.find((u: User) => u.username === username);
  
      if (user && user.password === password) {
        console.log(`Welcome, ${user.username}!`);
        return true;
      } else {
        console.log(`Invalid login credentials for username ${username}.`);
        return false;
      }
    }
  }
  
  const form = document.querySelector('form')!;
  const usernameInput = document.querySelector('#username') as HTMLInputElement;
  const passwordInput = document.querySelector('#password') as HTMLInputElement;
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const loginPage = new LoginPage();
    loginPage.validateLogin(usernameInput.value, passwordInput.value);
  });
  