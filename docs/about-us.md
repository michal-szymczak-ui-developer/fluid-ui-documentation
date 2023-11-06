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

<VPTeamMembers size="small" :members="members" />
