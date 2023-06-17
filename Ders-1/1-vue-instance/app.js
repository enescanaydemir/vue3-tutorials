const app = Vue.createApp({
    data() {
        return {
            //vue instance
            title: "Vue.js Bootcamp 1.gün",
            content: "Lorem ipsum olem aews",
            eduflow: {
                //bu objenin(eduflow) içerisinde tanımlı her şey birer attribute  dur. Bunları template içerisinde kullanırız. v-bind: ile bağlarız.
                title: "İlteişim için tıklayınız",
                target: "_blank",
                url: "https://www.linkedin.com/in/enescan-aydemir/", // url = key, link= value, key-value ilişkisi var.
                alt: "linkedin-enescan-aydemir",
            },
            owner: "Enes Can Aydemir",
            coords: {
                x: 0,
                y: 0,
            }
        };
    },
    methods: { //methodlar(key)= fonksiyonları içerir
        changeTitle(pTitle) {
            this.title = pTitle;
        },
        updateCoords(message, event) {
            // console.log(message, event.x, event.y);

            this.changeTitle(`${event.x},${event.y}`)
            this.coords = {
                x: event.x,
                y: event.y,
            }
        }
    },
}).mount("#app");
