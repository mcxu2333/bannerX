# bannerX
基于JQuery的轮播图插件
* 使用方法:</br>
1、引入`bannerX.css` 再依次引入 `jQuery.js` 和 `bannweX.js` ;</br>
2、对需要实现banner效果的容器使用 `bannerX API`实现效果：
```javascript
  $('div.demo').bannerX({
  
      //设置参数
  });

```
* 参数设置

参数   | 类型    |说明                  
-------|-------|-----------------------
width  |string |轮播图片宽度            
height |string |轮播图高度              
imgs   |array  |必须，图片url的字符串数组
