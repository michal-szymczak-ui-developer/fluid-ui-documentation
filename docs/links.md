<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/7680549?v=4',
    name: 'Michał Szymczak',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/michal-szymczak-ui-developer' },
      { icon: 'twitter', link: 'https://twitter.com/themisza' }
    ]
  },

]
</script>

# Links

- [Inverted Triangle CSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
- [Utopia Fluid Responsive Design](https://utopia.fyi/)
- [Easy Fluid Typography](https://www.smashingmagazine.com/2022/10/fluid-typography-clamp-sass-functions/)
- [Cube CSS](https://cube.fyi)
- [Modern CSS Reset](https://github.com/hankchizljaw/modern-css-reset)
- [Flow](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/)

<VPTeamMembers size="small" :members="members" />
