 <template>
<Swiper :data2="dataArr" />
</template>
<script setup>
import Swiper from "./Swiper.vue"
const dataArr = [
  {
    title: "Enjoy high-quality, locally manufactured furniture at competitive prices",
    description:'We can manufacture all types of school, office and home furniture, and we have advanced production equipment and an ideal production system, with a highly trained team with ideal materials and high quality.',
    image: "/images/s21.jpg",
    btntitle: "Buy Now",
  },
  {
    title: "Design your space with classroom furniture sets",
    description:'We offer classroom furniture sets that come with carefully selected school furniture that you can customize to fit your space. Simply choose one of our classroom furniture collections and customize pre-selected desks, chairs, storage solutions, classroom rugs, and more.',
    image: "/images/s22.jpg",
    btntitle: "Buy Now",
  },
  {
    title: "School Furniture Designed for Every Kind of Classroom",
    description:'No matter the shape or size of your classroom, 4H GROUP has options to meet your needs. Our school furniture comes in a variety of styles, a wide range of shapes and sizes, you can plan accordingly and start the school year off right. We also offer teacher furniture, such as desks and desktop organization supplies for teachers like you. Manage your classroom easily and efficiently with our solutions.',
    image: "/images/s23.jpg",
    btntitle: "Buy Now",
  }
 ,
]
</script>