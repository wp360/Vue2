<template>
    <div class='banner'>
        <h3>关于我们页面</h3>
        <div class="changePic">
          <div class="bar">
            <!--绑定class的用法,并且通过click改变layout属性-->
            <a class="grid-icon" :class="{ 'active': layout == 'grid'}" @click="layout = 'grid'"></a>
            <a class="list-icon" :class="{ 'active': layout == 'list'}" @click="layout = 'list'"></a>
          </div>
          <ul v-if="layout == 'grid'" class="grid">
            <li v-for="(a,index) in articles" :key="index">
              <a :href="a.url" target="_blank"><img :src="a.image.large" /></a>
            </li>
          </ul>
          <ul v-if="layout == 'list'" class="list">
            <li v-for="(a,index) in articles" :key="index">
              <a :href="a.url" target="_blank"><img :src="a.image.small" /></a>
              <p>{{a.title}}</p>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      layout: 'grid',
      articles: [
        {
          title: '儿童社交的爱与痛（套装全2册）',
          url: 'http://product.dangdang.com/25189806.html',
          image: {
            large: 'http://img3m6.ddimg.cn/48/21/25189806-1_w_7.jpg',
            small: 'http://img3m6.ddimg.cn/48/21/25189806-1_w_7.jpg'
          }
        },
        {
          title: '刘墉口才大师经典套装(畅销30年超值珍藏版)',
          url: 'http://product.dangdang.com/23995236.html',
          image: {
            large: 'http://img3m6.ddimg.cn/12/33/23995236-1_w_6.jpg',
            small: 'http://img3m6.ddimg.cn/12/33/23995236-1_w_6.jpg'
          }
        },
        {
          title: '丹·布朗作品系列：本源',
          url: 'http://product.dangdang.com/25253662.html',
          image: {
            large: 'http://img3m2.ddimg.cn/49/15/25253662-1_w_3.jpg',
            small: 'http://img3m2.ddimg.cn/49/15/25253662-1_l_3.jpg'
          }
        },
        {
          title: '高兴死了!!!（我正在人生低谷，我现在高兴死了！）',
          url: 'http://product.dangdang.com/25245058.html',
          image: {
            large: 'http://img3m8.ddimg.cn/58/32/25245058-1_w_4.jpg',
            small: 'http://img3m8.ddimg.cn/58/32/25245058-1_l_4.jpg'
          }
        }
        /* {
          title: "谈判：如何在博弈中获得更多(第四版)Everything is Negotiable",
          url: "http://product.dangdang.com/25247638.html",
          image: {
            large: "http://img3m8.ddimg.cn/64/22/25247638-1_l_1.jpg",
            small: "http://img3m8.ddimg.cn/64/22/25247638-1_l_1.jpg"
          }
        },
        {
          title: "好想去这样那样的国家（全6册）",
          url: "http://product.dangdang.com/25261269.html",
          image: {
            large: "http://img3m9.ddimg.cn/33/0/25261269-1_l_3.jpg",
            small: "http://img3m9.ddimg.cn/33/0/25261269-1_l_3.jpg"
          }
        } */
      ]
    }
  },
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: Microsoft YaHei;
}

li {
  list-style: none;
}

.bar {
  background-color: #5c9bb7;
  border-radius: 2px;
  width: 580px;
  padding: 10px;
  margin: 45px auto 25px;
  position: relative;
  text-align: right;
  line-height: 1;
}

.bar a {
  background: #4987a1 center center no-repeat;
  width: 32px;
  height: 32px;
  display: inline-block;
  text-decoration: none !important;
  margin-right: 5px;
  border-radius: 2px;
  cursor: pointer;
}

.bar a.active {
  background-color: #c14694;
}

.bar a.list-icon {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzNkFCQ0ZBMTBCRTExRTM5NDk4RDFEM0E5RkQ1NEZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzNkFCQ0ZCMTBCRTExRTM5NDk4RDFEM0E5RkQ1NEZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjM2QUJDRjgxMEJFMTFFMzk0OThEMUQzQTlGRDU0RkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjM2QUJDRjkxMEJFMTFFMzk0OThEMUQzQTlGRDU0RkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7h1bLqAAAAWUlEQVR42mL8////BwYGBn4GCACxBRlIAIxAA/4jaXoPEkMyjJ+A/g9MDJQBRhYg8RFqMwg8RJIUINYLFDmBUi+ADQAF1n8ofk9yIAy6WPg4GgtDMRYAAgwAdLYwLAoIwPgAAAAASUVORK5CYII=);
}

.bar a.grid-icon {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBEQkMyQzE0MTBCRjExRTNBMDlGRTYyOTlBNDdCN0I4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBEQkMyQzE1MTBCRjExRTNBMDlGRTYyOTlBNDdCN0I4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MERCQzJDMTIxMEJGMTFFM0EwOUZFNjI5OUE0N0I3QjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MERCQzJDMTMxMEJGMTFFM0EwOUZFNjI5OUE0N0I3QjgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4MjPshAAAAXklEQVR42mL4////h/8I8B6IGaCYKHFGEMnAwCDIAAHvgZgRyiZKnImBQsACxB+hNoDAQyQ5osQZIT4gH1DsBZABH6AB8x/JaQzEig++WPiII7Rxio/GwmCIBYAAAwAwVIzMp1R0aQAAAABJRU5ErkJggg==);
}

ul.grid {
  width: 570px;
  margin: 0 auto;
  text-align: left;
}

ul.grid li {
  padding: 2px;
  float: left;
}

ul.grid li img {
  width: 280px;
  height: 280px;
  object-fit: cover;
  display: block;
  border: none;
}

ul.list {
  width: 500px;
  margin: 0 auto;
  text-align: left;
}

ul.list li {
  border-bottom: 1px solid #ddd;
  padding: 10px;
  overflow: hidden;
}

ul.list li img {
  width: 120px;
  height: 120px;
  float: left;
  border: none;
}

ul.list li p {
  margin-left: 135px;
  font-weight: bold;
  color: #6e7a7f;
}
</style>
