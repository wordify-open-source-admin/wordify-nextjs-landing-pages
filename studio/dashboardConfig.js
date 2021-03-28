export default {
  widgets: [
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
                  buildHookId: '6054e6123e633618bbbca59d',
                  title: 'Sanity Studio',
                  name: 'wordify-nextjs-landing-pages-studio',
                  apiId: 'd2dd6172-26a1-4f16-ae1b-3091e3957041'
                },
                {
                  buildHookId: '6054e612c00985177586738c',
                  title: 'Landing pages Website',
                  name: 'wordify-nextjs-landing-pages',
                  apiId: 'ea210225-5019-452c-aef8-13c4f20f9615'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wordify-open-source-admin/wordify-nextjs-landing-pages',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://wordify-nextjs-landing-pages.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    }
  ]
}
