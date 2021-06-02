window.onload = function () {
  new Vue({
    el: "#app",
    data: {
      isDisabled: false,
      books: [
        {
          id: 1,
          bookName: "《算法导论》",
          publishDate: "2006-9",
          price: 85.0,
          count: 0,
        },
        {
          id: 2,
          bookName: "《UNIX编程艺术》",
          publishDate: "2006-2",
          price: 95.0,
          count: 0,
        },
        {
          id: 3,
          bookName: "《编程珠玑》",
          publishDate: "2008-10",
          price: 39.0,
          count: 0,
        },
        {
          id: 4,
          bookName: "《软件工程》",
          publishDate: "2001-9",
          price: 78.0,
          count: 0,
        },
      ],
    },
    methods: {
      decrement(index) {
        this.books[index].count--;
        console.log(this.books[index].count);

        if (this.books[index].count == 0) {
          this.isDisabled = true;
        }
      },
      increment(index) {
        this.books[index].count++;
      },
      removeHandler(index) {
        this.books.splice(index, 1);
      },
    },
    computed: {
      totalPrice() {
        let totalPrice = 0;
        this.books.forEach(function (item) {
          totalPrice += item.price * item.count;
        });
        return totalPrice;
      },
    },
    filters: {
      showPrice(price) {
        return "￥" + price.toFixed(2);
      },
    },
  });
};
