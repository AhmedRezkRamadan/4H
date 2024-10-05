import { createI18n } from 'vue-i18n'
export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en: {
        home:'home',
        service: 'services',
        about: 'about us',
        contact: 'contact us',
        curncy:'EGP',
        fotercontact:'Stay in constant contact with us and enjoy exclusive offers only for website customers..',
        supbtn:'Subscribe',
        store:'store',
        contactuspage:'Get in Touch',
        sugestes:'For all of your suggestions, questions and messages.',
        Name:'Name',
        Email:'Email',
        message:'message',
        call:'You can contact us and register your data to receive all new updates',
        phones:'Call Center Number',
        address:'Factory Address',
        location:'The Qanater road coming down to Bassous',
        OurFields:'ourFields',
        Gallary:'Gallary'
      },
      ar:{
        home:'الصفحة الرئيسية',
        service:"الخدمات",
        about: 'عن الشركة',
        contact: 'اتصل بنا',
        curncy:'جنيه مصري ',
        fotercontact:'ابقى على تواصل دائم معنا واستمتع بالعروض الحصرية المقدمة فقط لعملاء الموقع.',
        supbtn:'اشترك',
        store:'متجر',
        contactuspage:'تواصل معنا',
        sugestes:'لجميع اقتراحاتكم وأسئلتكم ورسائلكم.',
        Name:'الاسم',
        Email:'البريد الالكتروني',
        message:'الرسالة',
        call:'يمكنك الاتصال بنا وسجل بياناتك لتلقي جميع التحديثات الجديدة',
        phones:'رقم الدعم الفني',
        address:'عنوان الشركة',
        location:'طريق القناطر القادم من باسوس',
        OurFields:'حقولنا',
        Gallary:'المعرض'
      }
    }
  })

  vueApp.use(i18n)
})