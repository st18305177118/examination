import QS from 'qs';

export const requestName = (vm) => {
  let data = QS.stringify({
    page: 0,
    size: 5
  });
  vm.$axios.get('/api/houses/getHouseBykey',{
    "Access-Control-Allow-Origin" : "*"
  }, data)
    .then((rep) => {
      console.log(">>>>>>>>>>>>>>>>>>>>",rep)
      vm.name = rep.data.data
    })
}
