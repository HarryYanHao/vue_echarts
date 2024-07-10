//公共方法
export default{
  isMobile(){
        let is_mobile = false
        is_mobile = navigator.userAgent.match(
/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
        return is_mobile
      },
   swiperDown(i){
        // document.querySelector('#swiper2').scrollIntoView({
        //  behavior: "smooth"
        // }); 
        this.sh = document.documentElement.scrollTop || document.body.scrollTop
        this.scroll(document.querySelector(i), 100);
      },
    scroll(e, frame) {
        var eTop = e.getBoundingClientRect().top; 
        var eAmt = eTop / frame;  
        var curTime = 0;
        console.log(this.sh)
        while (curTime < frame) {
            curTime += 1;  
              window.setTimeout(this.scrollH, curTime * (200 / frame) , eTop - ((frame - curTime) * eAmt)+this.sh );
          }
        },
    scrollH(height) {
        window.scrollTo({
          top: height
        })
      },
}