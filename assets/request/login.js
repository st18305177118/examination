
import Cookies from 'js-cookie'
export const Login = (vm) => {
  let data ={
    username:vm.userInfo.username,
    password:vm.userInfo.password,
    rememberMe:true
  };
  vm.$axios.post('/api/authenticate', data)
    .then((rep) => {
      console.log(rep)
      Cookies.set("userName", vm.userInfo.username)
      vm.$router.push({
        name: "index"
      })
    })
    .catch((e) => {
      vm.$message.error("用户名或密码错误！！！")
    })
};
