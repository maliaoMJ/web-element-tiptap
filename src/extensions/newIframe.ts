// @ts-nocheck
import { Node as ProsemirrorNode, DOMOutputSpec } from 'prosemirror-model';
import { Image as TiptapImage } from 'tiptap-extensions';
import { MenuData } from 'tiptap';
import { MenuBtnView } from '@/../types';
import { ImageDisplay } from '@/utils/image';
import InsertIframeCommandButton from '@/components/MenuCommands/Iframe/InsertIframeCommandButton.vue';
import IframeView from '@/components/ExtensionViews/IframeView.vue';
const IMAGE_URL_REGEX = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

// @ts-ignore
function getAttrs (dom: HTMLElement): { [key: string]: any } {
  const { cssFloat, display } = dom.style;
  let { width, height } = dom.style;

  let dp = dom.getAttribute('data-display') || dom.getAttribute('display');
  if (dp) {
    dp = /(inline|block|left|right)/.test(dp) ? dp : ImageDisplay.INLINE;
  } else if (cssFloat === 'left' && !display) {
    dp = ImageDisplay.FLOAT_LEFT;
  } else if (cssFloat === 'right' && !display) {
    dp = ImageDisplay.FLOAT_RIGHT;
  } else if (!cssFloat && display === 'block') {
    dp = ImageDisplay.BREAK_TEXT;
  } else {
    dp = ImageDisplay.INLINE;
  }

  width = width || dom.getAttribute('width') || null;
  height = height || dom.getAttribute('height') || null;

  return {
    src: dom.getAttribute('src') || '',
    title: dom.getAttribute('title') || '',
    alt: dom.getAttribute('alt') || '',
    width: width == null ? null : parseInt(width, 10),
    height: height == null ? null : parseInt(height, 10),
    display: dp,
  };
}

function toDOM (node: ProsemirrorNode): DOMOutputSpec {
  const { src, alt, title, width, height, display } = node.attrs;

  const attrs: { [key: string]: any } = {
    src,
    alt,
    title,
    width,
    height,
    frameborder: 0,
    allowfullscreen: 'true',
  };

  attrs['data-display'] = display;

  return ['iframe', attrs];
}

export default class Image extends TiptapImage implements MenuBtnView {
  get defaultOptions () {
    return {
      urlPattern: IMAGE_URL_REGEX,
      uploadRequest: null,
    };
  }

  get name () {
    return 'newIframe';
  }

  get schema () {
    return {
      inline: true,
      attrs: {
        src: {
          default: '',
        },
        alt: {
          default: '',
        },
        title: {
          default: '',
        },
        width: {
          default: null,
        },
        height: {
          default: null,
        },
        display: {
          default: ImageDisplay.INLINE,
        }
      },
      group: 'inline',
      draggable: true,
      parseDOM: [{ tag: 'iframe[src]', getAttrs }],
      toDOM,
    };
  }

  get view () {
    return IframeView;
  }

  menuBtnView (editorContext: MenuData) {
    return {
      component: InsertIframeCommandButton,
      componentProps: {
        editorContext,
      },
    };
  }
}
