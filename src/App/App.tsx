import 'styles/global.css';

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';

import Router from 'components/router';
import View from 'components/view';
import Views from 'containers/views';
import { PATHS } from 'routes';

const BookmarkView = React.lazy(() => import('views/booksmark'));
const BookmarksView = React.lazy(() => import('views/booksmarks'));
const CategoryView = React.lazy(() => import('views/category'));
const GenreView = React.lazy(() => import('views/genre'));
const ChannelView = React.lazy(() => import('views/channel'));
const ChannelsView = React.lazy(() => import('views/channels'));
const CollectionView = React.lazy(() => import('views/collection'));
const CollectionsView = React.lazy(() => import('views/collections'));
const HistoryView = React.lazy(() => import('views/history'));
const HomeView = React.lazy(() => import('views/home'));
const IndexView = React.lazy(() => import('views/index'));
const ItemView = React.lazy(() => import('views/item'));
const NotFoundView = React.lazy(() => import('views/notFound'));
const PairView = React.lazy(() => import('views/pair'));
const SearchView = React.lazy(() => import('views/search'));
const SettingsView = React.lazy(() => import('views/settings'));
const DonateView = React.lazy(() => import('views/donate'));
const SpeedView = React.lazy(() => import('views/speed'));
const TrailerView = React.lazy(() => import('views/trailer'));
const VideoView = React.lazy(() => import('views/video'));
const WatchingView = React.lazy(() => import('views/watching'));
const ReleasesView = React.lazy(() => import('views/releases'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
});
type Props = {};
const baseHref = process.env.BASE_HREF || '';

const App: React.FC<Props> = (props) => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Views {...props}>
          <View path={`${baseHref}${PATHS.Index}`} component={IndexView} layout="fill" exact />
          <View path={`${baseHref}${PATHS.Home}`} component={HomeView} />
          <View path={`${baseHref}${PATHS.Search}`} component={SearchView} />
          <View path={`${baseHref}${PATHS.Category}`} component={CategoryView} />
          <View path={`${baseHref}${PATHS.Genre}`} component={GenreView} />
          <View path={`${baseHref}${PATHS.Watching}`} component={WatchingView} />
          <View path={`${baseHref}${PATHS.Releases}`} component={ReleasesView} />
          <View path={`${baseHref}${PATHS.Bookmark}`} component={BookmarkView} />
          <View path={`${baseHref}${PATHS.Bookmarks}`} component={BookmarksView} />
          <View path={`${baseHref}${PATHS.Collection}`} component={CollectionView} />
          <View path={`${baseHref}${PATHS.Collections}`} component={CollectionsView} />
          <View path={`${baseHref}${PATHS.Channel}`} component={ChannelView} layout="fill" />
          <View path={`${baseHref}${PATHS.Channels}`} component={ChannelsView} />
          <View path={`${baseHref}${PATHS.History}`} component={HistoryView} />
          <View path={`${baseHref}${PATHS.Item}`} component={ItemView} layout="fill" />
          <View path={`${baseHref}${PATHS.Video}`} component={VideoView} layout="fill" />
          <View path={`${baseHref}${PATHS.Trailer}`} component={TrailerView} layout="fill" />
          <View path={`${baseHref}${PATHS.Pair}`} component={PairView} layout="fill" />
          <View path={`${baseHref}${PATHS.Donate}`} component={DonateView} />
          <View path={`${baseHref}${PATHS.Speed}`} component={SpeedView} />
          <View path={`${baseHref}${PATHS.Settings}`} component={SettingsView} />
          <View component={NotFoundView} />
        </Views>
      </QueryClientProvider>
    </Router>
  );
};

export default MoonstoneDecorator(App);
