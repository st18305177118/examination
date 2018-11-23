import QS from 'qs';

export const register = (vm) => {
  let data = {
    login: vm.rUser,
    password: vm.rPassword,
    email: vm.rUser + '@qq.com'
  }
  vm.$axios.post('/api/register', data)
    .then(rep => {
      vm.$message.success("注册成功")
      vm.$router.push({
        name: "login-login"
      })
    })
}
