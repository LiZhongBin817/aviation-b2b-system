/*
 * @Descripttion: 
 * @Author: lizb
 * @Date: 2026-01-16 10:00:49
 * @LastEditors: lizb
 * @LastEditTime: 2026-01-16 14:20:48
 */
// 登录接口mock
export default [
  {
    url: '/api/auth/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password, code } = body;
      
      // 简单的登录验证逻辑
      if (username === 'admin' && password === '123456' && code === '1234') {
        return {
          code: 200,
          message: '登录成功',
          data: {
            token: 'mock_jwt_token_' + Date.now(),
            userInfo: {
              id: 1,
              username: username,
              realName: 'Admin User',
              role: 'admin',
              email: 'admin@example.com',
              phone: '13800138000'
            }
          }
        };
      } else {
        return {
          code: 400,
          message: '用户名、密码或验证码错误'
        };
      }
    }
  },
  
  // 用户信息接口mock
  {
    url: '/api/auth/getInfo',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '获取成功',
        data: {
          id: 1,
          username: 'admin',
          realName: 'Admin User',
          role: 'admin',
          email: 'admin@example.com',
          phone: '13800138000',
          department: '技术部',
          position: '管理员'
        }
      };
    }
  }
];