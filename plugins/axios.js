export default function ({ $axios}) {
  $axios.defaults.baseURL = 'http://118.25.16.238:9999';
  $axios.headers = "Access-Control-Allow-Origin";
}
