const app = Vue.createApp({
  data() {
    return {
      todoList: [
        { id: 1, text: "Okunan Kitaplar Hafta 1", completed: false },
        { id: 2, text: "Okunan Kitaplar Hafta 2", completed: false },
        { id: 3, text: "Okunan Kitaplar Hafta 3", completed: false },
        { id: 4, text: "Okunan Kitaplar Hafta 4", completed: false },
        { id: 5, text: "Okunan Kitaplar Hafta 5", completed: false },
        { id: 6, text: "Okunan Kitaplar Hafta 6", completed: false },
        { id: 7, text: "Okunan Kitaplar Hafta 7", completed: false },
      ],
    };
  },
  methods: {
    addTodo(event) {
      // this.todoList.push(event.target.value); //todoList içerisine eventten aldığımız target içerisindeki value'yü push ettik. Yani input içerisine yazdığımız bir şeyi todoList e dahil ediyoruz ve bunu enter ile yapıyoruz
      this.todoList.push({
        id: new Date().getTime(),
        text: event.target.value,
        completed: false,
      });
      event.target.value = ""; //enter bastıktan sonra value değeri boş bırakmasını sağlıyoruz. yazdığımız orda kalmasın diye
    },
    removeItem(todoItem) {
      this.todoList = this.todoList.filter((todo) => todo !== todoItem); //Sil butonu ile aktif olacak işlem; Sil butonuna tıklanılan todo nun id sini alıp geri kalan diğer todoları filtreleyip todoList e gönderecek ve yeni todolarda sildiğimiz todo bulunmayacak.
    },
  },
  computed: {
    completedItemCount() {
      return this.todoList.filter((todo) => todo.completed).length;
    },
    unCompletedItemCount() {
      return this.todoList.filter((todo) => !todo.completed).length;
    },
  },
}).mount("#app");
