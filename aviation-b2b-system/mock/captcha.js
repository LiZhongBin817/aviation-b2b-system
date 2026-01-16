// 验证码接口mock
export default [
  {
    url: '/captcha/image',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '获取成功',
        data: {
          image: 'https://picsum.photos/120/40?' + Date.now(), // 带时间戳防止缓存
          codeToken: 'test_token_' + Date.now()
        }
      };
    }
  }
];