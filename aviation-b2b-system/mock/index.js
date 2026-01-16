import loginMock from './login';
import captchaMock from './captcha';
import menuMock from './menu';

// 合并所有 mock 配置
export default [
  ...loginMock,
  ...captchaMock,
  ...menuMock
];