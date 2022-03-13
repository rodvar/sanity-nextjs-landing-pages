export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '622e6a331889b1467ac1a004',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4j33pk14',
                  apiId: 'e8db9d37-71d3-4db2-91f1-11990a7b7824'
                },
                {
                  buildHookId: '622e6a34e6bcc35c19ae79f9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jetz97n6',
                  apiId: 'c15b2206-64fe-49af-a4c4-d78ad32ebd74'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rodvar/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jetz97n6.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
