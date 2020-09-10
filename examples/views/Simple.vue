<template>
  <div class="el-tiptap-editor__wrapper">
    <el-tiptap
      :extensions="extensions"
      :content="content"
      :spellcheck="false"
      :readonly="false"
      @onUpdate="onEditorUpdate"
      placeholder="Write something ..."
    />
  </div>
</template>

<script>
import { CodeBlockHighlight } from 'tiptap-extensions';
// 支持语法高亮
// 支持的语言
import javascript from 'highlight.js/lib/languages/javascript';
import htmlbars from 'highlight.js/lib/languages/htmlbars';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';
import cpp from 'highlight.js/lib/languages/cpp';
import python from 'highlight.js/lib/languages/python';
import scss from 'highlight.js/lib/languages/scss';
import less from 'highlight.js/lib/languages/less';
import stylus from 'highlight.js/lib/languages/stylus';
import bash from 'highlight.js/lib/languages/bash';
import go from 'highlight.js/lib/languages/go';
import swift from 'highlight.js/lib/languages/swift';
import java from 'highlight.js/lib/languages/java';
import php from 'highlight.js/lib/languages/php';
import shell from 'highlight.js/lib/languages/shell';
import sql from 'highlight.js/lib/languages/sql';
import typescript from 'highlight.js/lib/languages/typescript';
import scala from 'highlight.js/lib/languages/scala';
import {
  Doc,
  Text,
  Paragraph,
  Heading,
  Bold,
  Underline,
  Italic,
  Strike,
  ListItem,
  BulletList,
  OrderedList,
  FontType,
  SelectAll,
  Fullscreen,
  Print,
  // Preview,
  TextHighlight,
  TextColor,
  FormatClear,
  TableRow,
  TableCell,
  TableHeader,
  Table,
  History,
  TrailingNode,
  HardBreak,
  HorizontalRule,
  LineHeight,
  Indent,
  TextAlign,
  TodoList,
  TodoItem,
  Blockquote,
  CodeBlock,
  Iframe,
  Image,
  Link,
  Music,
  NewIframe,
  Preview,
  Video
} from '../../src/index.ts';
// 语法风格
import 'highlight.js/styles/monokai-sublime.css';
export default {
  data () {
    return {
      extensions: [
        new Doc(),
        new Text(),
        new Paragraph(),
        new Heading({ level: 6 }),
        new Bold({ bubble: true }), // 在气泡菜单中渲染菜单按钮
        new Underline({ bubble: true }),
        new Italic({ bubble: true }),
        new Strike({ bubble: true }),
        new ListItem(),
        new BulletList(),
        new OrderedList(),
        new FontType(),
        new SelectAll(),
        new Fullscreen(),
        new Print(),
        // new Preview(),
        new TextHighlight(),
        new TextColor(),
        new FormatClear(),
        new TableRow(),
        new TableCell(),
        new TableHeader(),
        new Table(),
        new History(),
        new TrailingNode(),
        new HardBreak(),
        new HorizontalRule(),
        new LineHeight(),
        new Indent(),
        new TextAlign(),
        new TodoList(),
        new TodoItem(),
        new Blockquote(),
        new CodeBlock(),
        new CodeBlockHighlight({
          languages: {
            javascript,
            htmlbars,
            css,
            cpp,
            python,
            scss,
            less,
            stylus,
            bash,
            go,
            java,
            php,
            json,
            shell,
            xml,
            swift,
            typescript,
            sql,
            scala
          }
        }),
        new Iframe(),
        new Image(),
        new Link(),
        new Music(),
        new NewIframe(),
        new Preview(),
        new Video()
      ],

      content: '',
    };
  },
  methods: {
    onEditorUpdate (data) {
      console.log(data);
    }
  }
};
</script>
