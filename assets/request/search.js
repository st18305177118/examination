import QS from 'qs';

export const searchHouse = (vm) => {
  let data = QS.stringify({
    keyword: vm.searchKey
  });
  vm.$axios.get('/api/houses/getHouseBykey?'+data)
    .then((rep) => {
      vm.Jrents = rep.data.content
      console.log(">>>>>>>>>>>>>>>>",rep)
    })
};
