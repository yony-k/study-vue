const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Board.vue') },
      {
        path: '/newBoard',
        component: () => import('pages/Board.vue'),
      },
      {
        path: '/bestBoard',
        component: () => import('pages/Board.vue'),
      },
      {
        path: '/board/:pnum',
        name: 'post',
        component: () => import('pages/Post.vue'),
        props: route => ({ pnum: Number(route.params.pnum) }),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
