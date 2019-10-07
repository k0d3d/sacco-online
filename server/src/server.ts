import 'dotenv/config';
import App from './app';
import MemberController from './member/member.controller';



const app = new App(
  [
    new MemberController(),
  ],
);

app.listen();