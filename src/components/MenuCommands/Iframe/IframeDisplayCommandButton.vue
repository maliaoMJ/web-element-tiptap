<template>
  <el-popover
    v-model="popoverVisible"
    placement="top"
    trigger="click"
    popper-class="el-tiptap-popper"
  >
    <div class="el-tiptap-popper__menu">
      <div
        v-for="display in displayCollection"
        :key="display"
        :class="{
          'el-tiptap-popper__menu__item--active': display === currDisplay,
        }"
        class="el-tiptap-popper__menu__item"
        @mousedown="hidePopover"
        @click="updateAttrs({ display })"
      >
        <span>{{ t(`editor.extensions.NewIframe.buttons.display.${display}`) }}</span>
      </div>
    </div>

    <command-button
      slot="reference"
      :tooltip="t('editor.extensions.NewIframe.buttons.display.tooltip')"
      icon="map-signs"
    />
  </el-popover>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import { Popover } from 'element-ui';
import { Node as ProsemirrorNode } from 'prosemirror-model';
import i18nMixin from '@/mixins/i18nMixin';
import { ImageDisplay } from '@/utils/image';
import CommandButton from '../CommandButton.vue';

@Component({
  components: {
    [Popover.name]: Popover,
    CommandButton,
  },
})
export default class IframeDisplayCommandButton extends Mixins(i18nMixin) {
  @Prop({
    type: ProsemirrorNode,
    required: true,
  })
  readonly node!: ProsemirrorNode;

  @Prop({
    type: Function,
    required: true,
  })
  readonly updateAttrs!: Function;

  popoverVisible = false;

  displayCollection = [
    ImageDisplay.INLINE,
    ImageDisplay.BREAK_TEXT,
    ImageDisplay.FLOAT_LEFT,
    ImageDisplay.FLOAT_RIGHT,
  ];

  private get currDisplay () {
    return this.node.attrs.display;
  }

  private hidePopover () {
    this.popoverVisible = false;
  }
}
</script>
