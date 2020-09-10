<template>
  <div class="image-bubble-menu">
    <iframe-display-command-button
      :node="node"
      :update-attrs="updateAttrs"
    />

    <edit-iframe-command-button
      :node="node"
      :update-attrs="updateAttrs"
    />

    <remove-iframe-command-button
      :view="view"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Node as ProsemirrorNode } from 'prosemirror-model';
import { EditorView } from 'prosemirror-view';
import IframeDisplayCommandButton from '../MenuCommands/Iframe/IframeDisplayCommandButton.vue';
import EditIframeCommandButton from '../MenuCommands/Iframe/EditIframeCommandButton.vue';
import RemoveIframeCommandButton from '../MenuCommands/Iframe/RemoveIframeCommandButton.vue';

@Component({
  components: {
    IframeDisplayCommandButton,
    EditIframeCommandButton,
    RemoveIframeCommandButton,
  },
})
export default class ImageBubbleMenu extends Vue {
  @Prop({
    type: ProsemirrorNode,
    required: true,
  })
  readonly node!: ProsemirrorNode;

  @Prop({
    type: Object,
    required: true,
  })
  readonly view!: EditorView;

  @Prop({
    type: Function,
    required: true,
  })
  readonly updateAttrs!: Function;
};
</script>
