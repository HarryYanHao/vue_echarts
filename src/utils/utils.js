//公共方法
export default{
  isMobile(){
        let is_mobile = false
        is_mobile = navigator.userAgent.match(
/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
        console.log(is_mobile)
        return is_mobile
      },
}