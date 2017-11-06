import Quill from './core';

import { AlignClass, AlignStyle } from './src/formats/align';
import {
  DirectionAttribute,
  DirectionClass,
  DirectionStyle,
} from './src/formats/direction';
import Indent from './src/formats/indent';

import Blockquote from './src/formats/blockquote';
import Header from './src/formats/header';
import List, { ListItem } from './src/formats/list';

import { BackgroundClass, BackgroundStyle } from './src/formats/background';
import { ColorClass, ColorStyle } from './src/formats/color';
import { FontClass, FontStyle } from './src/formats/font';
import { SizeClass, SizeStyle } from './src/formats/size';

import Bold from './src/formats/bold';
import Italic from './src/formats/italic';
import Link from './src/formats/link';
import Script from './src/formats/script';
import Strike from './src/formats/strike';
import Underline from './src/formats/underline';

import Formula from './src/formats/formula';
import Image from './src/formats/image';
import Video from './src/formats/video';

import CodeBlock, { Code as InlineCode } from './src/formats/code';

import Syntax from './src/modules/syntax';
import Toolbar from './src/modules/toolbar';

import Icons from './src/ui/icons';
import Picker from './src/ui/picker';
import ColorPicker from './src/ui/color-picker';
import IconPicker from './src/ui/icon-picker';
import Tooltip from './src/ui/tooltip';

import BubbleTheme from './src/themes/bubble';
import SnowTheme from './src/themes/snow';

Quill.register(
  {
    'attributors/attribute/direction': DirectionAttribute,

    'attributors/class/align': AlignClass,
    'attributors/class/background': BackgroundClass,
    'attributors/class/color': ColorClass,
    'attributors/class/direction': DirectionClass,
    'attributors/class/font': FontClass,
    'attributors/class/size': SizeClass,

    'attributors/style/align': AlignStyle,
    'attributors/style/background': BackgroundStyle,
    'attributors/style/color': ColorStyle,
    'attributors/style/direction': DirectionStyle,
    'attributors/style/font': FontStyle,
    'attributors/style/size': SizeStyle,
  },
  true,
);

Quill.register(
  {
    'formats/align': AlignClass,
    'formats/direction': DirectionClass,
    'formats/indent': Indent,

    'formats/background': BackgroundStyle,
    'formats/color': ColorStyle,
    'formats/font': FontClass,
    'formats/size': SizeClass,

    'formats/blockquote': Blockquote,
    'formats/code-block': CodeBlock,
    'formats/header': Header,
    'formats/list': List,

    'formats/bold': Bold,
    'formats/code': InlineCode,
    'formats/italic': Italic,
    'formats/link': Link,
    'formats/script': Script,
    'formats/strike': Strike,
    'formats/underline': Underline,

    'formats/formula': Formula,
    'formats/image': Image,
    'formats/video': Video,

    'formats/list/item': ListItem,

    'modules/syntax': Syntax,
    'modules/toolbar': Toolbar,

    'themes/bubble': BubbleTheme,
    'themes/snow': SnowTheme,

    'ui/icons': Icons,
    'ui/picker': Picker,
    'ui/icon-picker': IconPicker,
    'ui/color-picker': ColorPicker,
    'ui/tooltip': Tooltip,
  },
  true,
);

export default Quill;
