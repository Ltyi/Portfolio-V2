<template>
  <div class="pt-14 font-poppins">
    <Header></Header>
    <About></About>
    <Experience></Experience>
    <Skills></Skills>
    <Portfolio></Portfolio>
    <Contact></Contact>
  </div>
</template>

<script>
import Header from '@/components/Header'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'

export default {
  name: 'Home',

  components: {
    Header,
    About,
    Experience,
    Skills,
    Portfolio,
    Contact
  }
}
</script>
