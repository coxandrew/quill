import Parchment from 'parchment';
import Quill from './src/core/quill';

import Block, { BlockEmbed } from './src/blots/block';
import Break from './src/blots/break';
import Container from './src/blots/container';
import Cursor from './src/blots/cursor';
import Embed from './src/blots/embed';
import Inline from './src/blots/inline';
import Scroll from './src/blots/scroll';
import TextBlot from './src/blots/text';

import Clipboard from './src/modules/clipboard';
import History from './src/modules/history';
import Keyboard from './src/modules/keyboard';

Quill.register({
  'blots/block': Block,
  'blots/block/embed': BlockEmbed,
  'blots/break': Break,
  'blots/container': Container,
  'blots/cursor': Cursor,
  'blots/embed': Embed,
  'blots/inline': Inline,
  'blots/scroll': Scroll,
  'blots/text': TextBlot,

  'modules/clipboard': Clipboard,
  'modules/history': History,
  'modules/keyboard': Keyboard,
});

Parchment.register(Block, Break, Cursor, Inline, Scroll, TextBlot);

export default Quill;
