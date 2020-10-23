export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'davosdo-web-studio',
                  apiId: '65146d03-e583-42f1-a5bf-010e4326db1f'
                },
                {
                  buildHookId: '5f76a6c93885316f54dee0d9',
                  title: 'Events Website',
                  name: 'davosdo-web',
                  apiId: '32227c7d-32a2-4887-b8c6-bf7220564c00'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thedavos/davosdo-web',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://davosdo-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recently created posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
