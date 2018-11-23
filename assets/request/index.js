import QS from 'qs';

export const getHouse = (vm) => {
  let data = QS.stringify({
    page: 0,
    size: 5
  });
  vm.$axios.get('/api/houses/getHouseBykey', data)
    .then((rep) => {
      let i = 0;
      for (i; i <= 5; i ++){
        let item =  rep.data.content[i];
        vm.Jrents.push(item);
      }
    })
};
