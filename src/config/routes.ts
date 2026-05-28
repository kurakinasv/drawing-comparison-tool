import { createBrowserRouter } from 'react-router';
import { AppLayout } from '@/components/layout/AppLayout/AppLayout';
import { HomePage } from '@/pages/HomePage/HomePage';
import { CreatePostPage } from '@/pages/CreatePostPage/CreatePostPage';
import { ViewPostPage } from '@/pages/ViewPostPage/ViewPostPage';
import { ComparePage } from '@/pages/ComparePage/ComparePage';
import { CompareResultPage } from '@/pages/CompareResultPage/CompareResultPage';
import { LoginPage } from '@/pages/LoginPage/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'create', Component: CreatePostPage },
      { path: 'post/:id', Component: ViewPostPage },
      { path: 'compare', Component: ComparePage },
      { path: 'compare/result', Component: CompareResultPage },
      { path: 'login', Component: LoginPage },
    ],
  },
]);
