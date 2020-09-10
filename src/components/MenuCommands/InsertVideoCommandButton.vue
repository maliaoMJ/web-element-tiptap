<template>
  <div>
    <command-button
      :command="openInsertMusicControl"
      :tooltip="t('editor.extensions.Video.tooltip')"
      icon="video"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import { MenuData } from 'tiptap';
import { MessageBox } from 'element-ui';
import i18nMixin from '@/mixins/i18nMixin';
import CommandButton from './CommandButton.vue';

@Component({
  components: {
    CommandButton
  }
})
export default class InsertMusicCommandButton extends Mixins(i18nMixin) {
  @Prop({
    type: Object,
    required: true
  })
  readonly editorContext!: MenuData

  openInsertMusicControl (): void {
    MessageBox.prompt('', this.t('editor.extensions.Video.control.title'), {
      confirmButtonText: this.t('editor.extensions.Video.control.confirm'),
      cancelButtonText: this.t('editor.extensions.Video.control.cancel'),
      inputPlaceholder: this.t('editor.extensions.Video.control.placeholder'),
      roundButton: true
      // @ts-ignore
    })
      // @ts-ignore
      .then(({ value: href }) => {
        this.editorContext.commands.video({ src: href });
      })
      .catch(() => {});
  }
}
</script>
