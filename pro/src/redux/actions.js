import axios from 'axios';

let agree = 10;

const ajax = (params) => new Promise((resolve) => {
  console.log('ajax params',params);
  setTimeout(() => {
    agree += 1;
    resolve(agree);
  },1000)
});

export let setAgree = function(newsid) {
  return function(dispatch, getState) {
    // axios.post('http://localhost:8900/news.php','newsid='+newsid)
    // .then((res)=>{
    //   // dispatch({
    //   //   type: "INFO_ADDCLICK",
    //   //   num: res.data.agree
    //   // })
    //   dispatch(InfoAction.getAgree(res.data.agree))
    // });
    // 模拟 ajax
    ajax(newsid).then((agree) => {
      // dispatch(InfoAction.getAgree(agree))
      dispatch({
        type: "INFO_ADDCLICK",
        num: agree
      });
    });
  }
}

class InfoAction
{
  static getAgree(num)
  {
    return {
      type: "INFO_ADDCLICK",
      num: num
    }
  }
}
