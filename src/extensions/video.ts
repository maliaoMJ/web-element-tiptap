import { MenuData, Node } from 'tiptap';
import { MenuBtnView } from '@/../types';
import InsertVideoCommandButton from '@/components/MenuCommands/InsertVideoCommandButton.vue';
export default class Music extends Node implements MenuBtnView {
  get name () {
    return 'video';
  }

  // @ts-ignore
  get schema () {
    return {
      attrs: {
        src: {
          default: null,
        },
      },
      group: 'block',
      selectable: false,
      parseDOM: [{
        tag: 'video',
        // @ts-ignore
        getAttrs: dom => ({
          src: dom.getAttribute('src'),
        }),
      }],
      // @ts-ignore
      toDOM: (node) => ['video', {
        src: node.attrs.src,
        controls: 'controls',
        autoplay: 'autoplay'
      }],
    };
  }

  // @ts-ignore
  commands ({ type }) {
    // @ts-ignore
    return attrs => (state, dispatch) => {
      const { selection } = state;
      const position = selection.$cursor ? selection.$cursor.pos : selection.$to.pos;
      const node = type.create(attrs);
      const transaction = state.tr.insert(position, node);
      dispatch(transaction);
    };
  }

  // @ts-ignore
  get view () {
    return {
      props: ['node', 'updateAttrs', 'view'],
      computed: {
        src: {
          // @ts-ignore
          get () {
            // @ts-ignore
            return this.node.attrs.src;
          },
          // @ts-ignore
          set (src) {
            // @ts-ignore
            this.updateAttrs({
              src,
            });
          },
        },
      },
      template: `
       <div class="video" style="width: 100%;height:auto;min-height:100px;overflow:hidden;">
          <video preload autoplay controls :src="src" stlye="min-height:30px;max-height:30px max-width:1200px;width:50vw"></video>
        </div>
      `,
    };
  }

  menuBtnView (editorContext: MenuData) {
    return {
      component: InsertVideoCommandButton,
      componentProps: {
        editorContext
      },
    };
  }
}
