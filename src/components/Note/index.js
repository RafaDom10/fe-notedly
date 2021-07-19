import ReactMarkdown from 'react-markdown';
import moment from 'moment';

import {
  StyledNote, MetaData, MetaInfo, UserActions,
} from './styles';

export default function Note({ note }) {
  return (
    <StyledNote>
      <MetaData>
        <MetaInfo>
          <img
            src={note.author.avatar}
            alt={`${note.author.username} avatar`}
            height="50px"
          />
        </MetaInfo>
        <MetaInfo>
          <em>by</em>
          {' '}
          {note.author.username}
          {' '}
          <br />
          {moment(note.createdAt).format('MMMM Do YYYY')}
        </MetaInfo>
        <UserActions>
          <em>Favorites:</em>
          {' '}
          {note.favoriteCount}
        </UserActions>
      </MetaData>
      <ReactMarkdown>
        {note.content}
      </ReactMarkdown>
    </StyledNote>
  );
}
