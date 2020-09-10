<template>
  <div>
    <command-button
    slot="reference"
    :tooltip="t('editor.extensions.NewIframe.buttons.insert_page.tooltip')"
    icon="paperclip"
    :command="openUrlPrompt"
  />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import { MessageBox } from 'element-ui';
import { MenuData } from 'tiptap';
import i18nMixin from '@/mixins/i18nMixin';
import CommandButton from '../CommandButton.vue';

@Component({
  components: {
    CommandButton
  },
})
export default class IframeCommandButton extends Mixins(i18nMixin) {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  private get imageNodeOptions () {
    return this.editorContext.editor.extensions.options.image;
  }

  openUrlPrompt (): void {
    MessageBox.prompt('', this.t('editor.extensions.NewIframe.control.insert_by_url.title'), {
      confirmButtonText: this.t('editor.extensions.NewIframe.control.insert_by_url.confirm'),
      cancelButtonText: this.t('editor.extensions.NewIframe.control.insert_by_url.cancel'),
      inputPlaceholder: this.t('editor.extensions.NewIframe.control.insert_by_url.placeholder'),
      inputPattern: this.imageNodeOptions.urlPattern,
      inputErrorMessage: this.t('editor.extensions.NewIframe.control.insert_by_url.invalid_url'),
      roundButton: true,
    // @ts-ignore
    }).then(({ value: url }) => {
      this.editorContext.commands.newIframe({ src: url });
    }).catch(() => {

    });
  }
};
</script>
