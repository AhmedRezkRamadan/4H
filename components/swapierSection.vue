 <template>
  
<Swiper :data2="dataArr" />
</template>
<script setup>
import Swiper from "./Swiper.vue"

const dataArr = [
  {
    title: "Experience positive school furniture",
    description:"Our selection of classroom furniture is comprehensive, so it's easy to find school furniture to suit any classroom setting, no matter how unique",
    image: "/images/s3.png",
    btntitle: "Buy Now",
  },
  {
    title: "No Classroom Furniture Item Too Big or Small",
    description:"Whether you're teaching a history class, a language class, or an art class, you'll find classroom activity tables, bookshelves, chairs, desks, and more designed to fit your needs.",
    image: "/images/s2.png",
    btntitle: "Buy Now",

  },
  {
    title: "We are here to serve you",
    description:"Create learning spaces that meet you and your students' needs with 4H Group",
    image: "/images/s1.png",
    btntitle: "Buy Now",
  }
 ,
]
</script>