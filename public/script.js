var Price = 9.99;
var LOAD_NUM = 10;
new Vue({
    el: '#app',
    data: {
        total: 0,
        items: [],
        cart: [],
        results: [],
        newSearch: 'anime',
        lastSearch: '',
        loading: false,
        price: PRICE
    },
    computed: {
        noMoreItems: function(){
            return this.items.length === this.results.length && this.results.length > 0;
        }
    },
    methods: {
        appendItems: function(){
            // console.log('appendItems');
            if(this.items.length < this.r.length){
                var append = this.results.slice(this.items.length,this.items.length+LOAD_NUM);
                this.items = this.items.concat(append);
            }
        },
        onSubmit(){
            //console.log(this.search);//搜索结果
            //console.log(this.$http);
            if(this.newSearch.length){
                this.items = [];
                this.loading = true;
                this.$http
                .get('/search/'.concat(this.newSearch))
                .then(function(res){
                    this.lastSearch = this.newSearch;
                    // console.log(res);
                    // this.items = res.data;
                    this.results = res.data;
                    this.appendItems();
                    this.loading = false;
                });
            }
        },
        addItem(index) {
            console.log(index);
            this.total += Price;
            var item = this.items[index];
            // 判断商品是否存在
            var found = false;
            for(var i = 0;i<this.cart.length;i++){
                if(this.cart[i].id === item.id){
                    found = true;
                    this.cart[i].qty++;
                    break;
                }
            }
            if(!found){
                this.cart.push({
                    id: item.id,
                    title: item.title,
                    qty: 1,
                    price: Price
                });
            }
        },
        inc(item) {
            item.qty++;
            this.total += Price;
            //console.log('商品添加');
        },
        dec(item) {
            item.qty--;
            this.total -= Price;
            if(item.qty <= 0){
                for(var i=0;i<this.cart.length;i++){
                    this.cart.splice(i,1);
                    break;
                }
            }
            //console.log('商品减少');
        }
    },
    filters: {
        currency: function (price) {
            return '$'.concat(price.toFixed(2));
        }
    },
    mounted: function(){
        this.onSubmit();

        var vueInstance = this;
        var elem = document.getElementById('product-list-bottom');
        var watcher = scrollMonitor.create(elem);
        watcher.enterViewport(function () {
            // console.log('下拉加载');
            vueInstance.appendItems();
        });
    }
});
//console.log(Vue);
console.log(scrollMonitor);
